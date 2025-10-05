"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { useAccount, useReadContract, useReadContracts } from "wagmi";
import { Medal } from "lucide-react";
import { LoanMarketABI, LOAN_MARKET_ADDRESS } from "@/app/lib/contracts";
import type { Loan } from "@/app/lib/types";

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

  const tierOptions: Array<{
    value: Tier;
    label: string;
    boxClass?: string;
    textClass?: string;
    iconBg?: string;
    medalClass?: string;
    activeClass?: string;
  }> = [
  { value: -1, label: "All Loans", boxClass: "bg-card/0", textClass: "text-sm", activeClass: "group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground hover:bg-primary/10" },
    {
      value: 2,
      label: "Gold",
      boxClass:
        "bg-gradient-to-br from-yellow-400/8 to-amber-500/8 border-yellow-400/40 shadow-sm shadow-yellow-400/10",
      textClass: "text-yellow-400 font-semibold",
      iconBg: "bg-yellow-400/10",
      medalClass: "text-yellow-400",
    },
    {
      value: 1,
      label: "Silver",
      boxClass:
        "bg-gradient-to-br from-slate-400/8 to-slate-600/8 border-slate-400/40 shadow-sm shadow-slate-400/10",
      textClass: "text-slate-400 font-semibold",
      iconBg: "bg-slate-400/10",
      medalClass: "text-slate-400",
    },
    {
      value: 0,
      label: "Bronze",
      boxClass:
        "bg-gradient-to-br from-amber-600/8 to-orange-700/8 border-amber-600/40 shadow-sm shadow-amber-600/10",
      textClass: "text-amber-600 font-semibold",
      iconBg: "bg-amber-600/10",
      medalClass: "text-amber-600",
    },
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
      if (result.result) {
        const decoded = result.result as unknown as [
          `0x${string}`, bigint, bigint, bigint, bigint, bigint, number, bigint,
          bigint, `0x${string}`, number, bigint, bigint, boolean
        ];
        uniqueAddresses.add(decoded[0].toLowerCase());
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
        if (result.result !== undefined && borrowerAddresses[i]) {
          map.set(borrowerAddresses[i], Number(result.result));
        }
      });
    }
    return map;
  }, [tiersData, borrowerAddresses]);


  useEffect(() => {
    if (loansData) {
      const formattedLoans = loansData.map((result, i) => {
        if (!result.result) {
          return null; 
        }

        const decoded = result.result as unknown as [
          `0x${string}`, bigint, bigint, bigint, bigint, bigint, number, bigint,
          bigint, `0x${string}`, number, bigint, bigint, boolean
        ];
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
        if (!term) {
          return true;
        }
        const isNumericSearch = /^\d+$/.test(term);

        if (isNumericSearch) {
          return String(loan.id) === term;
        } else {
          const borrowerAddress = loan.borrower || '';
          return borrowerAddress.toLowerCase().includes(term.toLowerCase());
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
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-background to-card border-b">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image
                src="/Logo.png"
                alt="LenDeFi Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <h1 className="text-3xl font-bold">LenDeFi</h1>
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
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="w-full sm:w-265">
              <Input
                type="text"
                placeholder="Search by ID or Borrower Address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-card border-border"
              />
            </div>
            <Tabs
              value={selectedTier}
              onValueChange={(value) => setSelectedTier(value)}
              className="w-full sm:w-auto"
            >
              <TabsList className="flex flex-wrap items-center gap-2 sm:gap-3">
                {tierOptions.map(option => (
                  <TabsTrigger
                    key={option.value}
                    value={option.value.toString()}
                    className="p-0 group"
                  >
                    <div
                      className={`flex items-center gap-2 px-2 py-1 rounded-sm transition transform opacity-60 hover:opacity-100 hover:scale-[1.02] ${option.boxClass} ${option.activeClass ?? ''} group-data-[state=active]:opacity-100 group-data-[state=active]:scale-[1.02] group-data-[state=active]:shadow-lg`}
                    >
                      {option.medalClass && (
                        <div className={`flex items-center justify-center rounded-full p-1 ${option.iconBg}`}>
                          <Medal className={`h-4 w-4 ${option.medalClass}`} />
                        </div>
                      )}
                      <span className={`${option.textClass}`}>{option.label}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
        {/* Grupo Direito: Switch "My Loans" */}
          {isConnected && (
            <div className="flex items-right space-x-2 self-start md:self-center">
              <Switch
                id="my-loans-filter"
                checked={showMyLoansOnly}
                onCheckedChange={setShowMyLoansOnly}
              />
              <Label htmlFor="my-loans-filter">Show My Loans Only</Label>
            </div>
          )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-8">
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
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="bg-transparent text-white hover:text-neutral-700 hover:bg-transparent"
            >
              Previous
            </Button>
            <span className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="bg-transparent text-white hover:text-neutral-700 hover:bg-transparent"
            >
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