"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { useAccount, useReadContract, useReadContracts } from "wagmi";
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


export default function InvestmentRequestsPage() {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showMyLoansOnly, setShowMyLoansOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 9;
  const { isConnected, address: userAddress } = useAccount();

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

  useEffect(() => {
    if (loansData) {
      const formattedLoans = loansData.map((result, i) => {
        const decoded = result.result as unknown as [
          `0x${string}`, bigint, bigint, bigint, bigint, bigint, number, bigint,
          bigint, `0x${string}`, number, bigint, bigint, boolean
        ];
        return {
          id: i,
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
      });
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
      if (loan.status === 3 || loan.status === 4) { // Repaid or Defaulted
        stats[borrowerAddress].completedLoans += 1;
      }
    });
    return stats;
  }, [loans]);

  const filteredLoans = useMemo(() => {
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
  }, [loans, showMyLoansOnly, userAddress, searchTerm]);
  
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
  }, [showMyLoansOnly, searchTerm]);

  const isLoading = isLoadingCount || isLoadingLoansData;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
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
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="w-full md:w-4/5">
            <Input
              type="text"
              placeholder="Search by ID or Borrower Address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-card border-border"
            />
          </div>
          
          {/* O switch "Show My Loans Only" só é renderizado se a carteira estiver conectada */}
          {isConnected && (
            <div className="flex items-center space-x-2">
              <Switch
                id="my-loans-filter"
                checked={showMyLoansOnly}
                onCheckedChange={setShowMyLoansOnly}
              />
              <Label htmlFor="my-loans-filter">Show My Loans Only</Label>
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
                : "No loans found. Create the first one!"}
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