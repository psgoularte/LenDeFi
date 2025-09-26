"use client";

import { useMemo } from "react";
import { formatUnits } from "viem";
import type { Loan } from "@/app/lib/types";
import { Card, CardContent } from "@/cache/components/ui/card";
import { Users, TrendingUp, DollarSign } from "lucide-react";

interface StatsCardsProps {
  loans: Loan[];
}

export function StatsCards({ loans }: StatsCardsProps) {
  const stats = useMemo(() => {
    if (!loans || loans.length === 0)
      return {
        activeRequests: 0,
        avgInterestRate: "0.0%",
        totalVolume: "0.00 ETH",
      };
    const openLoans = loans.filter(
      (loan) => loan.status >= 0 && loan.status < 4
    );
    const activeRequests = openLoans.length;
    let avgInterestRate = "0.0%";
    if (openLoans.length > 0) {
      const totalInterestBps = openLoans.reduce(
        (acc, loan) => acc + Number(loan.interestBps),
        0
      );
      avgInterestRate = `${(totalInterestBps / openLoans.length / 100).toFixed(
        1
      )}%`;
    }
    const proccesLoans = loans.filter(
      (loan) => loan.status >= 1 && loan.status < 5
    );
    const totalVolumeWei = proccesLoans.reduce(
      (acc, loan) => acc + loan.amountRequested,
      BigInt(0)
    );
    const totalVolume = `${parseFloat(formatUnits(totalVolumeWei, 18)).toFixed(
      2
    )} ETH`;
    return { activeRequests, avgInterestRate, totalVolume };
  }, [loans]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <Card>
        <CardContent className="p-4 flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Active Requests
            </p>
            <p className="text-2xl font-bold">{stats.activeRequests}</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Avg. Interest Rate
            </p>
            <p className="text-2xl font-bold">
              {stats.avgInterestRate}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <DollarSign className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Total Volume
            </p>
            <p className="text-2xl font-bold">{stats.totalVolume}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}