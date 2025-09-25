import { NextResponse } from "next/server";
import { createPublicClient, http, formatUnits } from "viem";
import { sepolia } from "viem/chains";
import { Redis } from "@upstash/redis";

type AiAnalysisResult = {
  riskScore: number;
  analysis: string;
};

const githubToken = process.env.GITHUB_TOKEN;
const infuraUrl = process.env.SEPOLIA_URL;

const model = "deepseek/DeepSeek-V3-0324";
const githubEndpoint = "https://models.github.ai/inference";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});
const CACHE_DURATION_SECONDS = 30 * 60; // 30 minutes

if (!githubToken || !infuraUrl || !process.env.UPSTASH_REDIS_REST_URL) {
  console.error(
    "CRITICAL ERROR: One or more environment variables (GITHUB_TOKEN, INFURA_HTTPS_URL, UPSTASH_REDIS_*) were not defined."
  );
}

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(infuraUrl),
});

async function getOnChainData(address: `0x${string}`) {
  try {
    const [balance, transactionCount] = await Promise.all([
      publicClient.getBalance({ address }),
      publicClient.getTransactionCount({ address }),
    ]);
    const ethBalance = parseFloat(formatUnits(balance, 18)).toFixed(4);
    return {
      transactionCount: Number(transactionCount),
      ethBalance: parseFloat(ethBalance),
    };
  } catch (error) {
    console.error(`Failed to fetch data for ${address} via Infura:`, error);
    return { transactionCount: 0, ethBalance: 0 };
  }
}

export async function POST(request: Request) {
  if (!githubToken || !infuraUrl || !process.env.UPSTASH_REDIS_REST_URL) {
    return NextResponse.json(
      { error: "Server configuration is incomplete." },
      { status: 500 }
    );
  }

  try {
    const {
      address,
      amount,
      interestBps,
      durationDays,
      collateral,
      completedLoans,
    } = await request.json();
    const borrowerAddress = address as `0x${string}`;

    if (!borrowerAddress) {
      return NextResponse.json(
        { error: "Wallet address is required." },
        { status: 400 }
      );
    }

    const cacheKey = `analysis:github:${address}-${amount}-${interestBps}-${durationDays}-${collateral}`;

    const cachedEntry = await redis.get<AiAnalysisResult>(cacheKey);
    if (cachedEntry) {
      console.log("Serving response from cache for key:", cacheKey);
      return NextResponse.json(cachedEntry);
    }
    console.log("Cache miss. Fetching new data for key:", cacheKey);

    const onChainData = await getOnChainData(borrowerAddress);

    const prompt = `
      Analyze the risk of a P2P loan. Respond STRICTLY and ONLY with a valid JSON object.

      **Borrower Data:**
      - Completed loans on the platform: ${completedLoans}
      - Total wallet transactions: ${onChainData.transactionCount}
      - Current ETH balance: ${onChainData.ethBalance} ETH
      
      **Loan Terms:**
      - Amount: ${amount} ETH
      - Interest: ${interestBps / 100}%
      - Duration: ${durationDays} days
      - Collateral: ${collateral} ETH

      **Required JSON Format:**
      {
        "riskScore": a number from 0 to 100 (100 = lowest risk),
        "analysis": "A short, one-sentence analysis."
      }
    `;

    const body = {
      model: model,
      messages: [
        {
          role: "system",
          content:
            "You are a DeFi risk analysis expert assistant that responds only with JSON.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.5,
      max_tokens: 250,
    };

    const response = await fetch(`${githubEndpoint}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${githubToken}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error from GitHub AI API:", errorText);
      throw new Error(`AI API Error: ${response.status} - ${errorText}`);
    }

    const aiResponse = await response.json();
    const content = aiResponse.choices[0].message.content;

    try {
      const jsonStart = content.indexOf("{");
      const jsonEnd = content.lastIndexOf("}");
      if (jsonStart === -1 || jsonEnd === -1) {
        throw new Error("JSON not found in AI response.");
      }
      const jsonString = content.substring(jsonStart, jsonEnd + 1);
      const parsedContent: AiAnalysisResult = JSON.parse(jsonString);

      await redis.set(cacheKey, parsedContent, { ex: CACHE_DURATION_SECONDS });

      return NextResponse.json(parsedContent);
    } catch {
      console.error("DEBUG: AI response failed to parse:", content);
      throw new Error("The AI response was not in the expected JSON format.");
    }
  } catch (error: unknown) {
    let errorMessage = "Failed to process the analysis.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error("Error in /api/risk-analysis route:", error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
