"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { useParams } from "next/navigation"
import { useAccount, useReadContract, useReadContracts, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { formatUnits, type Address } from "viem"
import { LoanMarketABI, LOAN_MARKET_ADDRESS } from "@/app/lib/contracts"
import type { Loan, AiAnalysisResult } from "@/app/lib/types"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/cache/components/ui/card"
import { Button } from "@/cache/components/ui/button"
import { Badge } from "@/cache/components/ui/badge"
import { Skeleton } from "@/cache/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/cache/components/ui/alert"
import { Progress } from "@/cache/components/ui/progress"
import {
  DollarSign,
  TrendingUp,
  Clock,
  ShieldCheck,
  Star,
  User,
  Activity,
  AlertCircle,
  Hash,
  BadgePercent,
  History,
  Scale,
  ArrowLeft,
  Sparkles,
  CheckCircle,
  XCircle,
} from "lucide-react"
import Link from "next/link"
import { useConnectModal } from "@rainbow-me/rainbowkit"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

// --- TIPOS ADICIONADOS PARA CORREÇÃO ---
type RawLoanData = readonly [
  Address, bigint, bigint, bigint, bigint, bigint, number, bigint, bigint, Address, number, bigint, bigint, boolean
];

type BorrowerHistory = {
  totalLoans: number;
  repaid: number;
  defaulted: number;
  totalValue: number;
  repaymentRate: number;
  scoreDistribution: { name: string; count: number }[];
} | null;

type ContractError = {
  shortMessage?: string;
  message: string;
};

// --- CONSTANTES ---
const STATUS_MAP = ["Open", "Funded", "Active", "Repaid", "Defaulted", "Cancelled"]
const STATUS_COLORS = {
  0: "bg-green-500/10 text-green-500 border-green-500/20",
  1: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  2: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  3: "bg-green-500/10 text-green-500 border-green-500/20",
  4: "bg-red-500/10 text-red-500 border-red-500/20",
  5: "bg-gray-500/10 text-gray-500 border-gray-500/20",
}

function useBorrowerHistory(borrowerAddress?: Address) {
  const { data: loanCount, isLoading: isLoadingCount } = useReadContract({
    abi: LoanMarketABI,
    address: LOAN_MARKET_ADDRESS,
    functionName: "getLoanCount",
    query: { enabled: !!borrowerAddress },
  })

  const loanContracts = useMemo(() => {
    if (!loanCount) return []
    return Array.from({ length: Number(loanCount) }, (_, i) => ({
      abi: LoanMarketABI,
      address: LOAN_MARKET_ADDRESS,
      functionName: "loans",
      args: [BigInt(i)],
    }))
  }, [loanCount])

  const { data: allLoansData, isLoading: isLoadingLoans } = useReadContracts({
    contracts: loanContracts,
    query: { enabled: loanCount !== undefined && loanCount > 0 },
  })

  const history: BorrowerHistory = useMemo(() => {
    if (!allLoansData || !borrowerAddress) return null

    const borrowerLoans = allLoansData
      .map((result) => (result.status === "success" ? (result.result as unknown as RawLoanData) : null))

      .filter((loanData): loanData is RawLoanData => loanData !== null && loanData[0]?.toLowerCase() === borrowerAddress.toLowerCase())

    if (borrowerLoans.length === 0)
      return { totalLoans: 0, repaid: 0, defaulted: 0, totalValue: 0, repaymentRate: 0, scoreDistribution: [] }

    let repaid = 0
    let defaulted = 0
    let totalValue = BigInt(0)
    const scoreCounts: { [key: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }

    for (const loan of borrowerLoans) {
      const status = loan[6]
      totalValue += loan[1]
      if (status === 3) repaid++
      if (status === 4) defaulted++
      const score = Number(loan[10])
      if (score >= 1 && score <= 5) {
        scoreCounts[score]++
      }
    }

    const finishedLoans = repaid + defaulted
    const repaymentRate = finishedLoans > 0 ? (repaid / finishedLoans) * 100 : 0

    const scoreDistribution = Object.entries(scoreCounts).map(([score, count]) => ({
      name: `${score}★`,
      count,
    }))

    return {
      totalLoans: borrowerLoans.length,
      repaid,
      defaulted,
      totalValue: Number.parseFloat(formatUnits(totalValue, 18)),
      repaymentRate,
      scoreDistribution,
    }
  }, [allLoansData, borrowerAddress])

  const { data: averageScoreData } = useReadContract({
    abi: LoanMarketABI,
    address: LOAN_MARKET_ADDRESS,
    functionName: "averageScoreOfBorrower",
    args: [borrowerAddress!],
    query: { enabled: !!borrowerAddress },
  })
  const averageScore = averageScoreData ? Number(averageScoreData) / 100 : 0

  return { history, averageScore, isLoading: isLoadingCount || isLoadingLoans }
}

function DetailItem({
  icon,
  label,
  value,
  valueClass = "",
}: { icon: React.ReactNode; label: string; value: React.ReactNode; valueClass?: string }) {
  return (
    <div className="group flex flex-col space-y-2 p-4 rounded-lg bg-muted/30 border border-border/50 transition-all hover:bg-muted/50 hover:border-primary/30">
      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
        <span className="text-primary/70 group-hover:text-primary transition-colors">{icon}</span>
        <span>{label}</span>
      </div>
      <div className={`text-2xl font-bold tracking-tight ${valueClass || "text-foreground"}`}>{value}</div>
    </div>
  )
}

function BorrowerHistoryCard({ borrowerAddress }: { borrowerAddress: Address }) {
  const { history, averageScore, isLoading } = useBorrowerHistory(borrowerAddress)

  if (isLoading) {
    return (
      <Card className="border-border/50 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5 text-primary" />
            Loading Borrower History...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-48 w-full bg-muted/50" />
        </CardContent>
      </Card>
    )
  }

  if (!history || history.totalLoans === 0) {
    return (
      <Card className="border-border/50 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5 text-primary" />
            Borrower History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="rounded-full bg-muted/50 p-4 mb-4">
              <History className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">No loan history found for this address.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      <CardHeader className="relative">
        <CardTitle className="flex items-center gap-2 text-xl">
          <History className="h-5 w-5 text-primary" />
          Borrower History
        </CardTitle>
        <CardDescription>Track record and performance metrics</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 relative">
        <div className="grid grid-cols-2 gap-3">
          <DetailItem icon={<Hash size={16} />} label="Total Loans" value={history.totalLoans} />
          <DetailItem
            icon={<BadgePercent size={16} />}
            label="Repayment Rate"
            value={`${history.repaymentRate.toFixed(0)}%`}
            valueClass={
              history.repaymentRate >= 80
                ? "text-green-500"
                : history.repaymentRate >= 50
                  ? "text-yellow-500"
                  : "text-red-500"
            }
          />
          <DetailItem
            icon={<DollarSign size={16} />}
            label="Total Borrowed"
            value={`${history.totalValue.toFixed(2)} ETH`}
          />
          <DetailItem
            icon={<Scale size={16} />}
            label="Avg Score"
            value={
              <div className="flex items-center gap-1">
                {averageScore.toFixed(1)}
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              </div>
            }
            valueClass={averageScore >= 4 ? "text-green-500" : averageScore >= 2.5 ? "text-yellow-500" : "text-red-500"}
          />
        </div>
        
        <div className="flex justify-around text-center pt-4 border-t border-border/50">
            <div>
                <p className="text-sm text-muted-foreground">Repaid</p>
                <p className="text-xl font-bold">{history.repaid}</p>
            </div>
            <div>
                <p className="text-sm text-muted-foreground">Defaulted</p>
                <p className="text-xl font-bold">{history.defaulted}</p>
            </div>
        </div>

        {history.scoreDistribution.some((d) => d.count > 0) && (
          <div className="pt-6 border-t border-border/50">
            <h4 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              Score Distribution
            </h4>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={history.scoreDistribution}>
                <XAxis dataKey="name" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                  }}
                />
                <Bar dataKey="count" fill="#ff7300" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function AiAnalysisCard({ loan, history }: { loan: Loan; history: BorrowerHistory }) {
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [aiAnalysis, setAiAnalysis] = useState<AiAnalysisResult | null>(null);
    const [aiError, setAiError] = useState("");

    const handleAiAnalysis = async () => {
        setIsAnalyzing(true);
        setAiError("");
        setAiAnalysis(null);
        try {
            const payload = {
                address: loan.borrower,
                amount: formatUnits(loan.amountRequested, 18),
                interestBps: Number(loan.interestBps),
                durationDays: Number(loan.durationSecs) / (60 * 60 * 24),
                collateral: formatUnits(loan.collateralAmount, 18),
                completedLoans: history?.repaid || 0,
            };
            const response = await fetch("/api/risk-analysis", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error || "Analysis failed. Please try again.");
            }
            const data = await response.json();
            setAiAnalysis(data);
        } catch (err) {
            setAiError(err instanceof Error ? err.message : "An unknown error occurred.");
        } finally {
            setIsAnalyzing(false);
        }
    };
    
    const riskScoreColor = useMemo(() => {
        if (!aiAnalysis) return "text-foreground";
        if (aiAnalysis.riskScore >= 75) return "text-green-500";
        if (aiAnalysis.riskScore >= 50) return "text-yellow-500";
        return "text-red-500";
    }, [aiAnalysis]);

    return (
        <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                    <Sparkles className="h-5 w-5 text-primary" />
                    AI Risk Analysis
                </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
                {isAnalyzing ? (
                    <p className="animate-pulse">Analyzing on-chain data...</p>
                ) : aiAnalysis ? (
                    <div>
                        <p className="text-sm text-muted-foreground">AI Risk Score</p>
                        <p className={`text-3xl font-bold mb-2 ${riskScoreColor}`}>{aiAnalysis.riskScore}/100</p>
                        <p className="text-sm text-muted-foreground">{aiAnalysis.analysis}</p>
                    </div>
                ) : (
                    <>
                        <p className="text-sm text-muted-foreground">Get an AI-powered risk assessment based on on-chain data.</p>
                        <Button className="w-full font-semibold" onClick={handleAiAnalysis} disabled={isAnalyzing}>
                            <Sparkles className="mr-2 h-4 w-4" />
                            Analyze Risk
                        </Button>
                        {aiError && <p className="text-xs text-destructive mt-2">{aiError}</p>}
                    </>
                )}
            </CardContent>
        </Card>
    );
}

export default function LoanDetailPage() {
  const { id } = useParams()
  const loanId = BigInt(Array.isArray(id) ? id[0] : id || "0")

  const { address: userAddress, isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()

  const { writeContract, data: hash, isPending, error } = useWriteContract()
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash })

  const { data: loanData, isLoading: isLoadingLoan } = useReadContract({
    abi: LoanMarketABI,
    address: LOAN_MARKET_ADDRESS,
    functionName: "loans",
    args: [loanId],
  })

  const loan: Loan | null = useMemo(() => {
    if (!loanData || !Array.isArray(loanData)) return null
    const [
      borrower,
      amountRequested,
      amountFunded,
      interestBps,
      durationSecs,
      fundingDeadline,
      status,
      startTimestamp,
      totalRepayment,
      investor,
      score,
      defaultTimestamp,
      collateralAmount,
      collateralClaimed,
    ] = loanData as RawLoanData
    return {
      id: BigInt(loanId),
      borrower,
      amountRequested,
      amountFunded,
      interestBps,
      durationSecs,
      fundingDeadline,
      status,
      startTimestamp,
      totalRepayment,
      investor,
      score,
      defaultTimestamp,
      collateralAmount,
      collateralClaimed,
    }
  }, [loanData, loanId])

  const { history } = useBorrowerHistory(loan?.borrower);

  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const isBorrower = userAddress?.toLowerCase() === loan?.borrower.toLowerCase()
  const isInvestor = userAddress?.toLowerCase() === loan?.investor.toLowerCase()

  const repaymentAmount = useMemo(() => {
    if (!loan) return BigInt(0)
    const principal = loan.amountRequested
    const interest = (principal * loan.interestBps) / BigInt(10000)
    return principal + interest
  }, [loan])

  const { data: withdrawableAmount } = useReadContract({
    abi: LoanMarketABI,
    address: LOAN_MARKET_ADDRESS,
    functionName: "withdrawableOf",
    args: [loanId],
    query: { enabled: !!loan && isInvestor && loan.status === 3 },
  })

  const isFundingPeriodExpired = useMemo(() => {
    if (!loan) return false
    return BigInt(Math.floor(Date.now() / 1000)) > loan.fundingDeadline
  }, [loan])

  const isBorrowerWithdrawPeriodExpired = useMemo(() => {
    if (!loan || loan.status !== 1) return false
    const withdrawalDeadline = loan.startTimestamp + loan.durationSecs
    return BigInt(Math.floor(Date.now() / 1000)) > withdrawalDeadline
  }, [loan])

  const isRepaymentDue = useMemo(() => {
    if (!loan || (loan.status !== 1 && loan.status !== 2)) return false
    const repaymentDeadline = loan.startTimestamp + loan.durationSecs
    return BigInt(Math.floor(Date.now() / 1000)) > repaymentDeadline
  }, [loan])

  const handleContractAction = (action: () => void) => {
    if (!isConnected) {
      openConnectModal?.()
    } else {
      action()
    }
  }

  const renderActionButtons = () => {
    if (!loan) return <Skeleton className="h-12 w-full bg-muted/50" />

    const isLoading = isPending || isConfirming

    if (isBorrower) {
      if (loan.status === 0 && !isFundingPeriodExpired)
        return (
          <Button
            variant="destructive"
            size="lg"
            className="w-full font-semibold"
            disabled={isLoading}
            onClick={() =>
              handleContractAction(() =>
                writeContract({
                  abi: LoanMarketABI,
                  address: LOAN_MARKET_ADDRESS,
                  functionName: "cancelLoan",
                  args: [loanId],
                }),
              )
            }
          >
            Cancel Loan
          </Button>
        )
      if (loan.status === 1 && !isBorrowerWithdrawPeriodExpired)
        return (
          <Button
            size="lg"
            className="w-full font-semibold bg-primary hover:bg-primary/90"
            disabled={isLoading}
            onClick={() =>
              handleContractAction(() =>
                writeContract({
                  abi: LoanMarketABI,
                  address: LOAN_MARKET_ADDRESS,
                  functionName: "withdrawAsBorrower",
                  args: [loanId],
                }),
              )
            }
          >
            Withdraw Funds
          </Button>
        )
      if (loan.status === 2 && !isRepaymentDue)
        return (
          <Button
            size="lg"
            className="w-full font-semibold bg-primary hover:bg-primary/90"
            disabled={isLoading}
            onClick={() =>
              handleContractAction(() =>
                writeContract({
                  abi: LoanMarketABI,
                  address: LOAN_MARKET_ADDRESS,
                  functionName: "repay",
                  args: [loanId],
                  value: repaymentAmount,
                }),
              )
            }
          >
            Repay Loan
          </Button>
        )
      if (loan.status === 2 && isRepaymentDue)
        return (
          <Button variant="destructive" size="lg" className="w-full font-semibold" disabled>
            Repayment Overdue
          </Button>
        )
      if (loan.status === 0 && isFundingPeriodExpired)
        return (
          <Button variant="secondary" size="lg" className="w-full font-semibold" disabled>
            Funding Period Expired
          </Button>
        )
    }

    if (isInvestor) {
      if (loan.status === 1 && isBorrowerWithdrawPeriodExpired)
        return (
          <Button
            variant="destructive"
            size="lg"
            className="w-full font-semibold"
            disabled={isLoading}
            onClick={() =>
              handleContractAction(() =>
                writeContract({
                  abi: LoanMarketABI,
                  address: LOAN_MARKET_ADDRESS,
                  functionName: "cancelFundedLoan",
                  args: [loanId],
                }),
              )
            }
          >
            Cancel & Reclaim Funds
          </Button>
        )
      if (loan.status === 3 && withdrawableAmount && withdrawableAmount > 0 && loan.score === 0) {
        return (
          <div className="space-y-4 text-center">
            <p className="text-sm font-medium text-muted-foreground">Rate your experience to withdraw funds</p>
            <div className="flex items-center justify-center gap-2 py-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-8 w-8 cursor-pointer transition-all ${(hoverRating || rating) >= star ? "fill-yellow-500 text-yellow-500 scale-110" : "text-muted-foreground hover:text-yellow-500/50"}`}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            <Button
              className="w-full font-semibold bg-primary hover:bg-primary/90"
              size="lg"
              disabled={isLoading || rating === 0}
              onClick={() =>
                handleContractAction(() =>
                  writeContract({
                    abi: LoanMarketABI,
                    address: LOAN_MARKET_ADDRESS,
                    functionName: "withdrawInvestorShare",
                    args: [loanId, rating],
                  }),
                )
              }
            >
              Withdraw & Rate
            </Button>
          </div>
        )
      }
      if (loan.status === 4 && loan.collateralAmount > 0 && !loan.collateralClaimed && loan.score === 0) {
        return (
          <div className="space-y-4 text-center">
            <p className="text-sm font-medium text-destructive">Loan defaulted. Claim collateral & rate borrower</p>
            <div className="flex items-center justify-center gap-2 py-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-8 w-8 cursor-pointer transition-all ${(hoverRating || rating) >= star ? "fill-yellow-500 text-yellow-500 scale-110" : "text-muted-foreground hover:text-yellow-500/50"}`}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            <Button
              variant="destructive"
              className="w-full font-semibold"
              size="lg"
              disabled={isLoading || rating === 0}
              onClick={() =>
                handleContractAction(() =>
                  writeContract({
                    abi: LoanMarketABI,
                    address: LOAN_MARKET_ADDRESS,
                    functionName: "claimCollateral",
                    args: [loanId, rating],
                  }),
                )
              }
            >
              Claim Collateral & Rate
            </Button>
          </div>
        )
      }
    }

    if (loan.status === 0 && !isFundingPeriodExpired) {
      return (
        <Button
          size="lg"
          className="w-full font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
          disabled={isLoading}
          onClick={() =>
            handleContractAction(() =>
              writeContract({
                abi: LoanMarketABI,
                address: LOAN_MARKET_ADDRESS,
                functionName: "fundLoan",
                args: [loanId],
                value: loan.amountRequested,
              }),
            )
          }
        >
          Invest Now
        </Button>
      )
    }

    return (
      <Button size="lg" className="w-full font-semibold" disabled>
        {STATUS_MAP[loan.status]}
      </Button>
    )
  }

  if (isLoadingLoan || !loan) {
    return (
      <div className="container mx-auto p-4 md:p-8 max-w-7xl">
        <Skeleton className="h-96 w-full bg-card/50" />
      </div>
    )
  }

  const totalInterestRate = Number(loan.interestBps) / 10000
  const repaymentWithInterest = Number(formatUnits(repaymentAmount, 18))

  const repaymentProgress =
    loan.status === 3
      ? 100
      : loan.status === 2 && repaymentAmount > 0
        ? (Number(loan.totalRepayment) / Number(repaymentAmount)) * 100
        : 0

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4 md:p-8 max-w-7xl">
        <div className="mb-8 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to all loans
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Loan Request #{loan.id.toString()}
              </h1>
              <p className="text-sm text-muted-foreground font-mono break-all">{loan.borrower}</p>
            </div>
            <Badge className={`${STATUS_COLORS[loan.status as keyof typeof STATUS_COLORS]} border text-base px-4 py-2 font-semibold`}>
              {STATUS_MAP[loan.status]}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              <CardHeader className="relative">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  Loan Terms
                </CardTitle>
                <CardDescription>Key details and conditions</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
                <DetailItem
                  icon={<DollarSign size={18} />}
                  label="Amount"
                  value={`${parseFloat(formatUnits(loan.amountRequested, 18)).toString()} ETH`}
                />
                <DetailItem
                  icon={<TrendingUp size={18} />}
                  label="Interest"
                  value={`${(totalInterestRate * 100).toFixed(2)}%`}
                  valueClass="text-primary"
                />
                <DetailItem
                  icon={<Clock size={18} />}
                  label="Duration"
                  value={`${Number(loan.durationSecs) / 86400} days`}
                />
                <DetailItem
                  icon={<ShieldCheck size={18} />}
                  label="Collateral"
                  value={loan.collateralAmount > 0 ? `${parseFloat(formatUnits(loan.collateralAmount, 18)).toString()} ETH` : "None"}
                  valueClass={loan.collateralAmount > 0 ? "text-foreground" : "text-muted-foreground"}
                />
                <DetailItem
                  icon={<DollarSign size={18} />}
                  label="Repayment"
                  value={`${parseFloat(repaymentWithInterest.toFixed(6))} ETH`}
                  valueClass="text-primary"
                />
                <DetailItem
                  icon={<Activity size={18} />}
                  label="Status"
                  value={
                    <Badge className={`${STATUS_COLORS[loan.status as keyof typeof STATUS_COLORS]} border text-sm`}>{STATUS_MAP[loan.status]}</Badge>
                  }
                />
              </CardContent>
            </Card>
            
            {(loan.status === 2 || loan.status === 3 || loan.status === 4) && (
              <Card className="border-border/50 bg-card/50 backdrop-blur overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    Repayment Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold text-primary">{repaymentProgress.toFixed(0)}%</span>
                    </div>
                    <Progress value={repaymentProgress} className="h-3" />
                  </div>
                  <div className="flex items-center justify-between text-sm pt-2 border-t border-border/50">
                    <span className="text-muted-foreground">
                      {parseFloat(formatUnits(loan.totalRepayment, 18)).toString()} / {parseFloat(repaymentWithInterest.toFixed(6))} ETH
                    </span>
                    {loan.status === 2 && (
                      <span className="text-muted-foreground">
                        Due:{" "}
                        {new Date(
                          (Number(loan.startTimestamp) + Number(loan.durationSecs)) * 1000,
                        ).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {loan.borrower && <BorrowerHistoryCard borrowerAddress={loan.borrower} />}
          </div>

          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <User className="h-5 w-5 text-primary" />
                  Borrower
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                  <p className="text-xs font-mono break-all text-muted-foreground">{loan.borrower}</p>
                </div>
              </CardContent>
            </Card>

            {loan.status === 0 && <AiAnalysisCard loan={loan} history={history} />}

            <Card className="sticky top-24 border-primary/20 bg-card/80 backdrop-blur shadow-xl shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none rounded-lg" />
              <CardHeader className="relative">
                <CardTitle className="text-xl">Take Action</CardTitle>
                <CardDescription>Manage your loan position</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                {renderActionButtons()}
                <div className="text-center mt-4 min-h-[1.5rem]">
                  {(isPending || isConfirming) && (
                    <p className="text-sm text-muted-foreground animate-pulse">Processing transaction...</p>
                  )}
                  {isSuccess && <p className="text-sm text-green-500 font-medium">✓ Transaction Confirmed!</p>}
                  {error && (
                    <p className="text-sm text-destructive">{(error as ContractError).shortMessage || "Transaction failed."}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}