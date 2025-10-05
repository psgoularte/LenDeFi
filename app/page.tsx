"use client";

import { useEffect, useState, useMemo, JSX } from "react";
import Image from "next/image";
import { useAccount, useReadContract, useReadContracts } from "wagmi";
import { LoanMarketABI, LOAN_MARKET_ADDRESS } from "@/app/lib/contracts";
import type { Loan, AiAnalysisResult } from "@/app/lib/types"; // Garanta que AiAnalysisResult esteja no seu types
import { formatUnits } from "viem";

// Importando componentes
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { StatsCards } from "@/app/components/dashboard/StatsCards";
import { HowItWorks } from "@/app/components/dashboard/HowItWorks";
import { LoanRequestCard } from "@/app/components/loan/LoanRequestCard";
import { RequestLoanDialog } from "@/app/components/loan/RequestLoanDialog";

// Importando componentes de UI
import { Button } from "@/cache/components/ui/button";
import { Switch } from "@/cache/components/ui/switch";
import { Label } from "@/cache/components/ui/label";
import { Card, CardContent } from "@/cache/components/ui/card";
import { Input } from "@/cache/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/cache/components/ui/tabs";
import { Medal, List } from "lucide-react";

// Definição de Tier: 0 = Bronze, 1 = Silver, 2 = Gold, -1 = All
type Tier = -1 | 0 | 1 | 2;

export default function InvestmentRequestsPage() {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showMyLoansOnly, setShowMyLoansOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTier, setSelectedTier] = useState<string>("-1"); 
  
  const itemsPerPage = 9;
  const { isConnected, address: userAddress } = useAccount();

  // ALTERADO: Cores de fundo do estado ativo agora são mais claras
  const tierOptions: { value: Tier; label: string; className: string; icon: JSX.Element }[] = [
    { value: -1, label: "All", className: "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground", icon: <List className="h-4 w-4" /> },
    { value: 2, label: "Gold", className: "data-[state=active]:bg-yellow-300 data-[state=active]:text-black hover:bg-yellow-300/50", icon: <Medal className="h-4 w-4 text-yellow-500 data-[state=active]:text-black" /> },
    { value: 1, label: "Silver", className: "data-[state=active]:bg-slate-300 data-[state=active]:text-black hover:bg-slate-300/50", icon: <Medal className="h-4 w-4 text-slate-500 data-[state=active]:text-black" /> },
    { value: 0, label: "Bronze", className: "data-[state=active]:bg-amber-400 data-[state=active]:text-black hover:bg-amber-400/50", icon: <Medal className="h-4 w-4 text-amber-700 data-[state=active]:text-black" /> },
  ];

  const { data: loanCount, isLoading: isLoadingCount } = useReadContract({
    abi: LoanMarketABI,
    address: LOAN_MARKET_ADDRESS,
    functionName: "getLoanCount",
  });

  const loanContracts = useMemo(() => {
    if (!loanCount) return [];
    const count = Number(loanCount);
    return Array.from({ length: count }, (_, i) => ({
      abi: LoanMarketABI,
      address: LOAN_MARKET_ADDRESS,
      functionName: "loans",
      args: [BigInt(i)],
    }));
  }, [loanCount]);

  const { data: loansData, isLoading: isLoadingLoansData } = useReadContracts({
    contracts: loanContracts,
    query: { enabled: loanContracts.length > 0 },
  });

  const borrowerAddresses = useMemo(() => {
    if (!loansData) return [];
    const uniqueAddresses = new Set<string>();
    loansData.forEach(result => {
      if (result.status === 'success' && result.result) {
        const borrowerAddress = (result.result as any)[0];
        uniqueAddresses.add(borrowerAddress.toLowerCase());
      }
    });
    return Array.from(uniqueAddresses);
  }, [loansData]);

  const tierContracts = useMemo(() => {
    return borrowerAddresses.map(address => ({
      abi: LoanMarketABI,
      address: LOAN_MARKET_ADDRESS,
      functionName: "getBorrowerTier",
      args: [address as `0x${string}`],
    }));
  }, [borrowerAddresses]);

  const { data: tiersData } = useReadContracts({
    contracts: tierContracts,
    query: { enabled: tierContracts.length > 0 },
  });

  const borrowerTierMap = useMemo(() => {
    const map = new Map<string, number>();
    if (tiersData) {
      tiersData.forEach((result, i) => {
        if (result.status === 'success' && result.result !== undefined && borrowerAddresses[i]) {
          map.set(borrowerAddresses[i], Number(result.result));
        }
      });
    }
    return map;
  }, [tiersData, borrowerAddresses]);

  useEffect(() => {
    if (loansData) {
      const formattedLoans = loansData.map((result, i) => {
        if (!result.result) return null;
        const decoded = result.result as any;
        return {
          id: BigInt(i),
          borrower: decoded[0],
          amountRequested: decoded[1],
          amountFunded: decoded[2],
          interestBps: decoded[3],
          durationSecs: decoded[4],
          fundingDeadline: decoded[5],
          status: decoded[6],
          startTimestamp: decoded[7],
          totalRepayment: decoded[8],
          investor: decoded[9],
          score: decoded[10],
          defaultTimestamp: decoded[11],
          collateralAmount: decoded[12],
          collateralClaimed: decoded[13],
        };
      }).filter((loan): loan is Loan => loan !== null);
      setLoans(formattedLoans.reverse());
    }
  }, [loansData]);

  const borrowerStats = useMemo(() => {
    const stats: { [key: string]: { completedLoans: number } } = {};
    loans.forEach((loan) => {
      const borrowerAddress = loan.borrower.toLowerCase();
      if (!stats[borrowerAddress]) {
        stats[borrowerAddress] = { completedLoans: 0 };
      }
      if (loan.status === 3 || loan.status === 4) { 
        stats[borrowerAddress].completedLoans += 1;
      }
    });
    return stats;
  }, [loans]);

  const filteredLoans = useMemo(() => {
    const currentTier = Number(selectedTier);
    return loans
      .filter((loan) => loan.status !== 5) 
      .filter((loan) => {
        if (!showMyLoansOnly || !userAddress) return true;
        const userAddr = userAddress.toLowerCase();
        return (
          loan.borrower.toLowerCase() === userAddr ||
          loan.investor.toLowerCase() === userAddr
        );
      })
      .filter((loan) => {
        if (currentTier === -1) return true;
        const borrowerAddr = loan.borrower.toLowerCase();
        const tier = borrowerTierMap.get(borrowerAddr);
        return tier !== undefined && tier === currentTier;
      })
      .filter((loan) => {
        const term = searchTerm.trim();
        if (!term) return true;
        const isNumericSearch = /^\d+$/.test(term);
        if (isNumericSearch) {
          return String(loan.id) === term;
        } else {
          return loan.borrower.toLowerCase().includes(term.toLowerCase());
        }
      });
  }, [loans, showMyLoansOnly, userAddress, searchTerm, selectedTier, borrowerTierMap]);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLoans = filteredLoans.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredLoans.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [showMyLoansOnly, searchTerm, selectedTier]);

  const isLoading = isLoadingCount || isLoadingLoansData;

  return (
    <div className="min-h-screen bg-background pt-20">
      <Header />
      
      <section className="bg-gradient-to-r from-background to-card border-b">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image src="/Logo.png" alt="LenDeFi Logo" width={40} height={40} className="rounded" />
              <h1 className="text-3xl font-bold ">LenDeFi</h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Decentralized P2P lending powered by Smart Contracts. Connect
              directly with investors and borrowers on the blockchain.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <StatsCards loans={loans} />
        
        <div className="flex flex-col items-center mb-8 gap-4">
          <div className="flex w-full max-w-4xl flex-col lg:flex-row items-center gap-4">
            <div className="w-full lg:flex-1">
              <Input
                type="text"
                placeholder="Search by ID or Borrower Address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-card border-border h-11"
              />
            </div>

            <div className="w-full lg:w-auto">
              <Tabs
                value={selectedTier}
                onValueChange={(value) => setSelectedTier(value)}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-4 h-11 bg-card border border-border">
                  {tierOptions.map(option => (
                    <TabsTrigger
                      key={option.value}
                      value={option.value.toString()}
                      className={`flex items-center justify-center gap-2 ${option.className}`}
                    >
                      {option.icon}
                      {option.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          {isConnected && (
            <div className="flex w-full max-w-4xl items-center justify-end gap-4">
                <div className="flex items-center space-x-2">
                    <Switch
                        id="my-loans-filter"
                        checked={showMyLoansOnly}
                        onCheckedChange={setShowMyLoansOnly}
                    />
                    <Label htmlFor="my-loans-filter">Show My Loans</Label>
                </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {isLoading ? (
            <p className="col-span-full text-center text-muted-foreground">
              Loading loans...
            </p>
          ) : currentLoans.length === 0 ? (
            <p className="col-span-full text-center text-muted-foreground">
              {showMyLoansOnly
                ? "You are not involved in any loans."
                : "No loans found matching the selected filters. Create the first one!"}
            </p>
          ) : (
            currentLoans.map((request) => (
              <LoanRequestCard
                key={request.id}
                request={request}
                completedLoans={
                  borrowerStats[request.borrower.toLowerCase()]?.completedLoans || 0
                }
              />
            ))
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex justify-center items-center gap-4">
            <Button onClick={handlePrevPage} disabled={currentPage === 1} variant="ghost">
              Previous
            </Button>
            <span className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <Button onClick={handleNextPage} disabled={currentPage === totalPages} variant="ghost">
              Next
            </Button>
          </div>
        )}

        <div className="text-center mt-12">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2">Need a Loan?</h3>
              <p className="text-muted-foreground mb-6">
                Join our platform and get access to competitive rates from
                verified investors
              </p>
              <RequestLoanDialog
                triggerButtonText="Request a Loan"
                triggerButtonSize="lg"
                triggerButtonClassName="bg-accent hover:bg-accent/90 text-accent-foreground"
              />
            </CardContent>
          </Card>
        </div>
      </main>

      <HowItWorks />
      <Footer />
    </div>
  );
}