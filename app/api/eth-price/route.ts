import { NextResponse } from 'next/server';

const COINGECKO_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=brl';

export async function GET() {
  try {
    console.log(`[ETH Price] Fetching new price from CoinGecko...`);

    const response = await fetch(COINGECKO_URL, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch price from CoinGecko, status: ${response.status}`);
    }

    const data = await response.json();
    
    const ethPriceBRL = data?.ethereum?.brl;

    if (!ethPriceBRL) {
      throw new Error("Price not found in CoinGecko response.");
    }

    console.log(`[ETH Price] Successfully fetched. Current price: ${ethPriceBRL}`);
    
    return NextResponse.json({ brlPrice: ethPriceBRL }, { status: 200 });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    console.error("[ETH Price] Error fetching ETH price:", errorMessage);
    
    return NextResponse.json({ error: `Failed to get ETH price: ${errorMessage}` }, { status: 502 }); // 502 Bad Gateway é apropriado aqui
  }
}