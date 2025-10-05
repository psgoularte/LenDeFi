"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/cache/components/ui/card"
import { Badge } from "@/cache/components/ui/badge"
import { Button } from "@/cache/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/cache/components/ui/tooltip"
import { Star, TrendingUp, DollarSign, ShieldCheck, Sparkles, Info, Copy, Check, Medal } from "lucide-react"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import Link from "next/link"
import { useConnectModal } from "@rainbow-me/rainbowkit"
import { LoanMarketABI, LOAN_MARKET_ADDRESS } from "@/app/lib/contracts"
import { formatUnits } from "viem"
import type { Loan, AiAnalysisResult } from "@/app/lib/types"
import { ScoreStars } from "./ScoreStars"

const STATUS_MAP = ["Open", "Funded", "Active", "Repaid", "Defaulted", "Cancelled"]

interface LoanRequestCardProps {
  request: Loan
  completedLoans: number
}

export function LoanRequestCard({ request, completedLoans }: LoanRequestCardProps) {
  const { address: userAddress, isConnected } = useAccount()
  const { writeContract, data: hash, isPending, error } = useWriteContract()
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  })

  const { openConnectModal } = useConnectModal()

  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [isCopied, setIsCopied] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [aiAnalysis, setAiAnalysis] = useState<AiAnalysisResult | null>(null)
  const [aiError, setAiError] = useState("")

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(request.borrower)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  const durationMonths = useMemo(() => {
    return Number(request.durationSecs) / (60 * 60 * 24 * 30)
  }, [request.durationSecs])

  const totalInterestRate = useMemo(() => {
    return Number(request.interestBps) / 10000
  }, [request.interestBps])

  const monthlyInterestRate = useMemo(() => {
    if (durationMonths <= 0) return 0
    return Math.pow(1 + totalInterestRate, 1 / durationMonths) - 1
  }, [totalInterestRate, durationMonths])

  const repaymentWithInterest = useMemo(() => {
    const principal = Number(formatUnits(request.amountRequested, 18))
    return principal * (1 + totalInterestRate)
  }, [request.amountRequested, totalInterestRate])

  const formatNumber = (value: number) =>
    value.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })

  const isRepaymentDue = useMemo(() => {
    if (request.status !== 1 && request.status !== 2) return false
    const repaymentDeadline = Number(request.startTimestamp) + Number(request.durationSecs)
    return Date.now() / 1000 > repaymentDeadline
  }, [request.status, request.startTimestamp, request.durationSecs])

  const isProposalExpired = useMemo(() => {
    if (request.status !== 0) return false
    return Date.now() / 1000 > Number(request.fundingDeadline)
  }, [request.status, request.fundingDeadline])

  const { data: averageScoreData } = useReadContract({
    abi: LoanMarketABI,
    address: LOAN_MARKET_ADDRESS,
    functionName: "averageScoreOfBorrower",
    args: [request.borrower],
  })
  
  const { data: tierData } = useReadContract({
    abi: LoanMarketABI,
    address: LOAN_MARKET_ADDRESS,
    functionName: "getBorrowerTier",
    args: [request.borrower],
  })

  const tierInfo = useMemo(() => {
    if (tierData === undefined) return null;
  
    switch (tierData) {
      case 0: // Bronze
        return { 
          text: "Bronze", 
          className: "text-amber-600 border-amber-700 font-semibold",
          medalClass: "text-amber-600"
        };
      case 1: // Silver
        return { 
          text: "Silver", 
          className: "text-slate-500 border-slate-500 font-semibold",
          medalClass: "text-slate-500"
        };
      case 2: // Gold
        return { 
          text: "Gold", 
          className: "text-amber-500 border-amber-500 font-semibold",
          medalClass: "text-amber-500"
        };
      default:
        return null;
    }
  }, [tierData]);


  const displayScore = useMemo(() => {
    if (request.score > 0) return request.score
    if (averageScoreData) return Number(averageScoreData) / 100
    return 0
  }, [request.score, averageScoreData])

  const isBorrower = userAddress?.toLowerCase() === request.borrower.toLowerCase()
  const isInvestor = userAddress?.toLowerCase() === request.investor.toLowerCase()

  const { data: withdrawableAmount } = useReadContract({
    abi: LoanMarketABI,
    address: LOAN_MARKET_ADDRESS,
    functionName: "withdrawableOf",
    args: [BigInt(request.id)],
    query: { enabled: isInvestor && request.status === 3 },
  })

  const repaymentAmount = useMemo(() => {
    const principal = request.amountRequested
    const interest = (principal * request.interestBps) / BigInt(10000)
    return principal + interest
  }, [request.amountRequested, request.interestBps])

  const handleAiAnalysis = async (e: React.MouseEvent) => {
    e.preventDefault()
    setIsAnalyzing(true)
    setAiError("")
    setAiAnalysis(null)
    try {
      const payload = {
        address: request.borrower,
        amount: formatUnits(request.amountRequested, 18),
        interestBps: Number(request.interestBps),
        durationDays: Number(request.durationSecs) / (60 * 60 * 24),
        collateral: formatUnits(request.collateralAmount, 18),
        completedLoans: completedLoans,
      }
      const response = await fetch("/api/risk-analysis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!response.ok) {
        const errData = await response.json()
        throw new Error(errData.error || "A análise falhou. Tente novamente.")
      }
      const data = await response.json()
      setAiAnalysis(data)
    } catch (err) {
      setAiError(err instanceof Error ? err.message : "Ocorreu um erro desconhecido.")
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleInvest = () =>
    writeContract({ abi: LoanMarketABI, address: LOAN_MARKET_ADDRESS, functionName: "fundLoan", args: [BigInt(request.id)], value: request.amountRequested })
  const handleWithdraw = () =>
    writeContract({ abi: LoanMarketABI, address: LOAN_MARKET_ADDRESS, functionName: "withdrawAsBorrower", args: [BigInt(request.id)] })
  const handleRepay = () =>
    writeContract({ abi: LoanMarketABI, address: LOAN_MARKET_ADDRESS, functionName: "repay", args: [BigInt(request.id)], value: repaymentAmount })
  const handleCancel = () =>
    writeContract({ abi: LoanMarketABI, address: LOAN_MARKET_ADDRESS, functionName: "cancelLoan", args: [BigInt(request.id)] })
  const handleCancelFundedLoan = () =>
    writeContract({ abi: LoanMarketABI, address: LOAN_MARKET_ADDRESS, functionName: "cancelFundedLoan", args: [BigInt(request.id)] })
  const handleWithdrawInvestorShare = (score: number) => {
    if (score < 1 || score > 5) return
    writeContract({ abi: LoanMarketABI, address: LOAN_MARKET_ADDRESS, functionName: "withdrawInvestorShare", args: [BigInt(request.id), score] })
  }
  const handleClaimCollateral = (score: number) => {
    if (score < 1 || score > 5) return
    writeContract({ abi: LoanMarketABI, address: LOAN_MARKET_ADDRESS, functionName: "claimCollateral", args: [BigInt(request.id), score] })
  }

  const handleContractAction = (e: React.MouseEvent, action: () => void) => {
    e.preventDefault()
    if (!isConnected) {
      openConnectModal?.()
    } else {
      action()
    }
  }

  const isLoading = isPending || isConfirming
  const isFundedAndExpired = useMemo(() => {
    if (request.status !== 1) return false
    const expirationTimestamp = Number(request.startTimestamp) + Number(request.durationSecs)
    return Date.now() / 1000 > expirationTimestamp
  }, [request.status, request.startTimestamp, request.durationSecs])

  const renderActionButtons = () => {
    // Caso 1: O usuário é o TOMADOR do empréstimo
    if (isBorrower) {
      switch (request.status) {
        case 0: // Open
          return (
            <Button
              size="lg"
              variant="outline"
              className="w-full bg-black text-red-500 border-red-500 hover:bg-red-500 hover:text-black"
              disabled={isLoading}
              onClick={(e) => handleContractAction(e, handleCancel)}
            >
              {isLoading ? "Cancelling..." : "Cancel Loan"}
            </Button>
          )
        case 1: // Funded
          return (
            <Button
              className="w-full"
              size="lg"
              disabled={isLoading || isRepaymentDue}
              onClick={(e) => handleContractAction(e, handleWithdraw)}
            >
              {isLoading ? "Withdrawing..." : isRepaymentDue ? "Withdrawal Period Expired" : "Withdraw Funds"}
            </Button>
          )
        case 2: // Active
          return (
            <Button
              className="w-full"
              size="lg"
              disabled={isLoading || isRepaymentDue}
              onClick={(e) => handleContractAction(e, handleRepay)}
            >
              {isLoading ? "Repaying..." : isRepaymentDue ? "Repayment Overdue" : `Repay & Withdraw Collateral`}
            </Button>
          )
        default:
          return (
            <Button className="w-full" size="lg" disabled>
              {STATUS_MAP[request.status]}
            </Button>
          )
      }
    }

    // Caso 2: O usuário é o INVESTIDOR do empréstimo
    if (isInvestor) {
      switch (request.status) {
        case 1: // Funded
          if (isFundedAndExpired)
            return (
              <Button
                className="w-full bg-black text-red-500 border-red-500 hover:bg-red-500 hover:text-black"
                size="lg"
                variant="outline"
                disabled={isLoading}
                onClick={(e) => handleContractAction(e, handleCancelFundedLoan)}
              >
                {isLoading ? "Cancelling..." : "Cancel & Reclaim Funds"}
              </Button>
            )
          break
        case 2: // Active
        case 4: // Defaulted
          if (isRepaymentDue && request.collateralAmount > 0 && !request.collateralClaimed) {
            return (
              <div className="space-y-3 text-center">
                <p className="text-sm font-medium text-destructive">Repayment overdue. Claim collateral.</p>
                <div className="flex items-center justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-6 w-6 cursor-pointer transition-colors ${
                        (hoverRating || rating) >= star ? "fill-accent text-accent" : "text-muted-foreground"
                      }`}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={(e) => {
                        e.preventDefault()
                        setRating(star)
                      }}
                    />
                  ))}
                </div>
                <Button
                  className="w-full bg-black text-red-500 border-red-500 hover:bg-red-500 hover:text-black"
                  size="lg"
                  variant="outline"
                  disabled={isLoading || rating === 0}
                  onClick={(e) => handleContractAction(e, () => handleClaimCollateral(rating))}
                >
                  {isLoading ? "Claiming..." : "Claim Collateral & Score"}
                </Button>
              </div>
            )
          }
          break
        case 3: // Repaid
          if (withdrawableAmount && withdrawableAmount > 0 && request.score === 0) {
            return (
              <div className="space-y-3 text-center">
                <p className="text-sm font-medium">Leave feedback to withdraw your funds.</p>
                <div className="flex items-center justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-6 w-6 cursor-pointer transition-colors ${
                        (hoverRating || rating) >= star ? "fill-accent text-accent" : "text-muted-foreground"
                      }`}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={(e) => {
                        e.preventDefault()
                        setRating(star)
                      }}
                    />
                  ))}
                </div>
                <Button
                  className="w-full"
                  size="lg"
                  disabled={isLoading || rating === 0}
                  onClick={(e) => handleContractAction(e, () => handleWithdrawInvestorShare(rating))}
                >
                  {isLoading ? "Withdrawing..." : `Withdraw ${formatUnits(withdrawableAmount, 18)} ETH & Score`}
                </Button>
              </div>
            )
          }
          break
      }
      return (
        <Button className="w-full" size="lg" disabled>
          {STATUS_MAP[request.status]}
        </Button>
      )
    }

    // Caso 3: O usuário é um INVESTIDOR EM POTENCIAL
    const isLoanOpenForInvestment = request.status === 0
    return (
      <div className="space-y-3">
        {isLoanOpenForInvestment && (
          <div className="space-y-2">
            {!aiAnalysis && (
              <Button variant="outline" className="w-full" onClick={handleAiAnalysis} disabled={isAnalyzing}>
                <Sparkles className="mr-2 h-4 w-4" />
                {isAnalyzing ? "Analyzing..." : "Analyze Risk with AI"}
              </Button>
            )}
            {isAnalyzing && <p className="text-xs text-center text-muted-foreground">Searching data on-chain...</p>}
            {aiError && <p className="text-xs text-center text-red-500">{aiError}</p>}
            {aiAnalysis && (
              <div className="p-3 bg-card rounded-md border text-center">
                <p className="text-sm font-bold">
                  Risk Score: <span className="text-green-500">{aiAnalysis.riskScore}/100</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">{aiAnalysis.analysis}</p>
              </div>
            )}
          </div>
        )}
        <Button
          className="w-full"
          size="lg"
          disabled={!isLoanOpenForInvestment || isLoading || isProposalExpired}
          onClick={(e) => handleContractAction(e, handleInvest)}
        >
          {isLoading
            ? "Signing..."
            : isProposalExpired
              ? "Proposal Expired"
              : isLoanOpenForInvestment
                ? "Invest Now"
                : STATUS_MAP[request.status]}
        </Button>
      </div>
    )
  }

  const loanEndDate = useMemo(() => {
    if (request.status < 1) return null
    const endDate = new Date((Number(request.startTimestamp) + Number(request.durationSecs)) * 1000)
    return (
      endDate.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "2-digit" }) +
      ", " +
      endDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })
    )
  }, [request.status, request.startTimestamp, request.durationSecs])

  return (
    <Link href={`/loan/${request.id}`} passHref className="no-underline">
      <Card className="h-[540px] border border-transparent hover:border-primary/40 transition-all duration-300 flex flex-col group">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <CardTitle className="text-lg font-semibold">Loan Request #{request.id.toString()}</CardTitle>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground font-mono" title={request.borrower}>
                  {request.borrower.slice(0, 6)}...{request.borrower.slice(-4)}
                </p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCopy}
                  className="h-7 w-7"
                  aria-label="Copy borrower address"
                >
                  {isCopied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
              
              <div className="flex items-center flex-wrap gap-2 pt-1">
                {tierInfo && (
                  <Badge variant="outline" className={`text-xs ${tierInfo.className}`}>
                    <Medal className={`h-8 w-8 ${tierInfo.medalClass}`} />
                    {tierInfo.text}
                  </Badge>
                )}
                {(isBorrower || isInvestor) && (
                  <Badge variant={isBorrower ? "default" : "default"}>
                    {isBorrower ? "Your Loan" : "You are the Investor"}
                  </Badge>
                )}
              </div>

            </div>
            <div className="flex flex-col items-end">
              <Badge variant="default" className="bg-accent text-accent-foreground">
                {`${Number(request.durationSecs) / (60 * 60 * 24)} days`}
              </Badge>
              {loanEndDate && <p className="text-xs text-muted-foreground text-right mt-1">{loanEndDate}</p>}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 flex-grow flex flex-col">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Credit Score</span>
              </div>
              <ScoreStars
                score={displayScore}
                completedLoans={completedLoans}
                isFinalScore={(request.status === 3 || request.status === 4) && request.score > 0}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Interest Rate</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">10% fee on investors profit.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-lg font-bold text-primary">{totalInterestRate * 100}%</p>
                <p className="text-xs text-muted-foreground">{formatNumber(monthlyInterestRate * 100)}% / mth</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-foreground" />
                <span className="text-sm font-medium">Loan Amount</span>
              </div>
              <p className="text-2xl font-bold">{formatNumber(Number(formatUnits(request.amountRequested, 18)))} ETH</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-foreground" />
                <span className="text-sm font-medium">Total Repayment</span>
              </div>
              <p className="text-2xl font-bold">{formatNumber(repaymentWithInterest)} ETH</p>
            </div>
          </div>
          {request.collateralAmount > 0 && (
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Collateral</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">5% fee on claimed collateral in case of default.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className="text-xl font-bold">
                {formatNumber(Number(formatUnits(request.collateralAmount, 18)))} ETH
              </p>
            </div>
          )}
          <div className="pt-2 mt-auto">
            {renderActionButtons()}
            {isSuccess && <p className="text-sm text-center mt-2 text-green-600">Transaction Confirmed!</p>}
            {error && (
              <p className="text-sm text-center mt-2 text-red-600">
                {(error as { shortMessage?: string }).shortMessage || error.message}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}