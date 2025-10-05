"use client";

// --- IMPORTS ---
import React, { JSX } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useReadContract } from "wagmi";
import { Medal, Star } from "lucide-react";
import { RequestLoanDialog } from "../loan/RequestLoanDialog";
import { PixRechargeDialog } from "../PixRechargeDialog";
import { LoanMarketABI, LOAN_MARKET_ADDRESS } from "@/app/lib/contracts";

// --- TIPO DE DADOS ---
type UserProfileData = {
  level: "Gold" | "Silver" | "Bronze" | "Unqualified";
  score: number;
  icon: JSX.Element;
  color: string;
};

export function Header() {
  const { isConnected, address } = useAccount();
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);

  // --- A "MESMA LÓGICA" ESTÁ AQUI ---
  // A busca do tier e do score é a fonte da verdade, vinda da blockchain.
  const { data: tierData } = useReadContract({
    abi: LoanMarketABI,
    address: LOAN_MARKET_ADDRESS,
    functionName: "getBorrowerTier",
    args: [address!],
    query: { enabled: isConnected && !!address },
  });

  const { data: averageScoreData } = useReadContract({
    abi: LoanMarketABI,
    address: LOAN_MARKET_ADDRESS,
    functionName: "averageScoreOfBorrower",
    args: [address!],
    query: { enabled: isConnected && !!address },
  });

  useEffect(() => {
    if (isConnected && tierData !== undefined && averageScoreData !== undefined) {
      const score = Number(averageScoreData) / 100;
      let profile: UserProfileData;

      // O switch traduz o dado da blockchain (0, 1, 2) em um perfil.
      // A APARÊNCIA (cor, tamanho do ícone) é definida aqui, independentemente do Card.
      switch (tierData) {
        case 2: // Gold
          profile = {
            level: "Gold",
            score,
            color: "text-yellow-500",
            icon: <Medal className="h-6 w-6 text-yellow-500" />, // Tamanho para o Header
          };
          break;
        case 1: // Silver
          profile = {
            level: "Silver",
            score,
            color: "text-gray-400",
            icon: <Medal className="h-6 w-6 text-gray-400" />, // Tamanho para o Header
          };
          break;
        case 0: // Bronze
          profile = {
            level: "Bronze",
            score,
            color: "text-amber-700",
            icon: <Medal className="h-6 w-6 text-amber-700" />, // Tamanho para o Header
          };
          break;
        default: // Unqualified
          profile = {
            level: "Unqualified",
            score,
            color: "text-gray-500",
            icon: <Medal className="h-6 w-6 text-gray-500" />, // Tamanho para o Header
          };
      }
      setUserProfile(profile);
    } else {
      setUserProfile(null);
    }
  }, [isConnected, tierData, averageScoreData]);


  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-card/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="LenDeFi Logo"
              width={24}
              height={24}
              className="rounded"
            />
            <h1 className="text-xl font-bold">LenDeFi</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <RequestLoanDialog
              triggerButtonText="Request Loan"
              triggerButtonSize="lg"
              triggerButtonClassName="bg-black text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-black"
            />
            <PixRechargeDialog />
            <div className="flex items-center gap-4 border-l pl-6">
              {userProfile && (
                <div className="flex items-center gap-3" title={`Nível: ${userProfile.level}`}>
                  {userProfile.icon}
                  <div>
                    <p className={`font-bold text-md ${userProfile.color}`}>
                      {userProfile.level}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3" />
                      <span>{userProfile.score.toFixed(1)} pts</span>
                    </div>
                  </div>
                </div>
              )}
              <ConnectButton />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}