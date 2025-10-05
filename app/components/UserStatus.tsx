"use client"

import type React from "react"
import { useMemo } from "react"
import { useAccount, useReadContract } from "wagmi"
import { Star, Medal, Sparkles } from "lucide-react"
import { LoanMarketABI, LOAN_MARKET_ADDRESS } from "@/app/lib/contracts"

export function UserStatus(): React.ReactElement | null {
  const { address, isConnected } = useAccount()

  const { data: tierData } = useReadContract({
    abi: LoanMarketABI,
    address: LOAN_MARKET_ADDRESS,
    functionName: "getBorrowerTier",
    args: [address as `0x${string}`],
    query: { enabled: Boolean(isConnected && address) },
  })

  const { data: averageScoreData } = useReadContract({
    abi: LoanMarketABI,
    address: LOAN_MARKET_ADDRESS,
    functionName: "averageScoreOfBorrower",
    args: [address as `0x${string}`],
    query: { enabled: Boolean(isConnected && address) },
  })

  const tierInfo = useMemo(() => {
    if (tierData === undefined || tierData === null) return null
    const tier = Number(tierData)
    switch (tier) {
      case 0:
        return {
          text: "Bronze",
          className:
            "bg-gradient-to-br from-amber-600/10 to-orange-700/10 border-amber-600/50 shadow-lg shadow-amber-600/20",
          textClass: "text-amber-600 font-bold",
          medalClass: "text-amber-600 drop-shadow-[0_0_8px_rgba(217,119,6,0.5)]",
          iconBg: "bg-amber-600/10",
        }
      case 1:
        return {
          text: "Silver",
          className:
            "bg-gradient-to-br from-slate-400/10 to-slate-600/10 border-slate-400/50 shadow-lg shadow-slate-400/20",
          textClass: "text-slate-400 font-bold",
          medalClass: "text-slate-400 drop-shadow-[0_0_8px_rgba(148,163,184,0.5)]",
          iconBg: "bg-slate-400/10",
        }
      case 2:
        return {
          text: "Gold",
          className:
            "bg-gradient-to-br from-yellow-400/10 to-amber-500/10 border-yellow-400/50 shadow-lg shadow-yellow-400/20",
          textClass: "text-yellow-400 font-bold",
          medalClass: "text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]",
          iconBg: "bg-yellow-400/10",
        }
      default:
        return null
    }
  }, [tierData])

  const displayScore = useMemo(() => {
    if (!averageScoreData) return 0
    return Number(averageScoreData) / 100
  }, [averageScoreData])

  if (!isConnected || (tierInfo === null && displayScore === 0)) return null

  return (
    <div
      className="flex items-center gap-0.5 bg-card/50 backdrop-blur-sm rounded-sm border border-border/50 p-0.5 transition-all hover:bg-card/80"
      title="User Status"
    >
      {(tierInfo || displayScore > 0) && (
        <div className="flex items-center">
            {tierInfo ? (
            <div
              className={`flex items-center gap-1 rounded-sm border px-2 py-1 transition-all hover:scale-[1.01] ${tierInfo.className}`}
              title={`User Tier: ${tierInfo.text}`}
            >
              <div className={`flex items-center justify-center rounded-full p-1 ${tierInfo.iconBg}`}>
                <Medal className={`h-6 w-6 ${tierInfo.medalClass}`} strokeWidth={1.5} />
              </div>

              <div className="flex flex-col gap-0.25">
                <div className="flex items-center gap-1">
                  <span className={`text-[10px] font-medium uppercase tracking-wider ${tierInfo.textClass}`}>
                    {tierInfo.text}
                  </span>
                  <Sparkles className={`h-2 w-2 ${tierInfo.medalClass}`} />
                </div>

                {displayScore > 0 && (
                  <div className="flex items-center gap-1" title={`Average Score: ${displayScore.toFixed(1)}`}>
                    <Star className={`h-3 w-3 ${tierInfo.medalClass} fill-current`} strokeWidth={1} />
                    <span className={`text-[11px] font-bold tabular-nums ${tierInfo.textClass}`}>
                      {displayScore.toFixed(1)}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-medium">/ 5.0</span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            displayScore > 0 && (
              <div
                className="flex items-center gap-1 rounded-sm border border-yellow-400/50 bg-gradient-to-br from-yellow-400/10 to-amber-500/10 px-2 py-1 shadow-sm shadow-yellow-400/20 transition-all hover:scale-[1.01]"
                title={`Average Score: ${displayScore.toFixed(1)}`}
              >
                <div className="flex items-center justify-center rounded-full bg-yellow-400/10 p-1">
                  <Star
                    className="h-4 w-4 text-yellow-400 fill-current drop-shadow-[0_0_6px_rgba(250,204,21,0.5)]"
                    strokeWidth={1}
                  />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-[12px] font-bold text-yellow-400 tabular-nums">{displayScore.toFixed(1)}</span>
                  <span className="text-[10px] text-muted-foreground font-medium">/ 5.0</span>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}
