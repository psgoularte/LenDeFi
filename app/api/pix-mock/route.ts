import { NextResponse } from 'next/server';
import { createWalletClient, http, isAddress, parseEther, BaseError } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';

const SEPOLIA_RPC = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY as `0x${string}`;

if (!SEPOLIA_RPC || !PRIVATE_KEY) {
  console.error("CRITICAL ERROR: Environment variables SEPOLIA_URL and PRIVATE_KEY must be defined.");
  throw new Error("Server configuration incomplete: Missing environment variables.");
}

const account = privateKeyToAccount(PRIVATE_KEY);
const walletClient = createWalletClient({ account, chain: sepolia, transport: http(SEPOLIA_RPC) });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, cpf, telefone, enderecoEthereum, valorEth } = body;
    
    if (!nome || !cpf || !telefone || !enderecoEthereum || !valorEth) {
      return NextResponse.json({ error: "All fields are mandatory" }, { status: 400 });
    }
    if (!isAddress(enderecoEthereum)) {
      return NextResponse.json({ error: "Invalid Ethereum address" }, { status: 400 });
    }

    const transactionId = `PIX-${Date.now()}`;
    console.log(`[${transactionId}] Processing payment for ${nome} (CPF: ${cpf})...`);

    try {
      const valueInWei = parseEther(valorEth);
      console.log(`[${transactionId}] Sending ${valorEth} ETH to ${enderecoEthereum}...`);
      
      const txHash = await walletClient.sendTransaction({
        to: enderecoEthereum,
        value: valueInWei,
      });

      console.log(`[${transactionId}] SUCCESS! Transaction sent with hash: ${txHash}`);
      
      return NextResponse.json({
        message: "Transaction sent successfully! Confirmation may take a few moments on the network.",
        status: "SUBMITTED",
        transactionId: transactionId,
        transactionHash: txHash,
      }, { status: 200 });

    } catch (err: unknown) {
      let errorMessage = "An unknown error occurred while sending the transaction.";
      
      if (err instanceof BaseError) {
        errorMessage = err.shortMessage;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      console.error(`[${transactionId}] FAILED to send ETH:`, errorMessage);
      return NextResponse.json({ error: `Failed to send transaction: ${errorMessage}` }, { status: 500 });
    }

  } catch (error: unknown) {
    let errorMessage = "Failed to process the request.";

    if (error instanceof Error) {
        errorMessage = error.message;
    }
    
    console.error("Error in the payment API POST handler:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}