"use client";

import { useEffect, useState } from "react";
import { useAccount, useWriteContract, useWaitForTransactionReceipt, useReadContract } from "wagmi";
import { parseEther } from "viem";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { LoanMarketABI, LOAN_MARKET_ADDRESS } from "@/app/lib/contracts";
import { Button, type ButtonProps } from "@/cache/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/cache/components/ui/dialog";
import { Input } from "@/cache/components/ui/input";
import { Label } from "@/cache/components/ui/label";

interface RequestLoanDialogProps {
  triggerButtonText: string;
  triggerButtonVariant?: ButtonProps["variant"];
  triggerButtonSize?: ButtonProps["size"];
  triggerButtonClassName?: string;
}

export function RequestLoanDialog({
  triggerButtonText,
  triggerButtonVariant = "outline",
  triggerButtonSize = "lg",
  triggerButtonClassName = "",
}: RequestLoanDialogProps) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [interestPercent, setInterestPercent] = useState("");
  const [durationDays, setDurationDays] = useState("");
  const [collateral, setCollateral] = useState("");
  const { address, isConnected } = useAccount();
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });
  
  const { openConnectModal } = useConnectModal();

  const { data: tierData, isLoading: tierLoading } = useReadContract({
    abi: LoanMarketABI,
    address: LOAN_MARKET_ADDRESS,
    functionName: 'getBorrowerTier',
    args: [address as `0x${string}`],
    query: {
      enabled: isConnected && !!address && open, 
    }
  });

  const getTierInfo = (tier: unknown) => {
    switch (tier) {
      case 0:
        return { name: "Bronze", limit: "0.5 ETH" };
      case 1:
        return { name: "Silver", limit: "2 ETH" };
      case 2:
        return { name: "Gold", limit: "Unlimited" };
      default:
        return { name: "", limit: "" };
    }
  };
  const tierInfo = getTierInfo(tierData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected || !amount || !interestPercent || !durationDays) return;

    const interestAsNumber = parseFloat(interestPercent);
    const interestInBps = interestAsNumber * 100;
    const interestForContract = BigInt(interestInBps);

    const amountInWei = parseEther(amount);
    const durationInSeconds = BigInt(Number(durationDays) * 24 * 60 * 60);
    const deadline = BigInt(
      Math.floor(new Date().getTime() / 1000) + 30 * 24 * 60 * 60
    );
    const collateralInWei = collateral ? parseEther(collateral) : BigInt(0);

    writeContract({
      abi: LoanMarketABI,
      address: LOAN_MARKET_ADDRESS,
      functionName: "createLoan",
      args: [
        amountInWei,
        interestForContract,
        durationInSeconds,
        deadline,
        collateralInWei,
      ],
      value: collateralInWei,
    });
  };

  useEffect(() => {
    if (isSuccess && open) {
      const timer = setTimeout(() => {
        setOpen(false);
        setAmount("");
        setInterestPercent("");
        setDurationDays("");
        setCollateral("");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, open]);


  useEffect(() => {
    if (open && !isConnected && openConnectModal) {
      openConnectModal();
    }
  }, [open, isConnected, openConnectModal]);


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={triggerButtonVariant}
          size={triggerButtonSize}
          className={triggerButtonClassName}
        >
          {triggerButtonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Request a New Loan</DialogTitle>
          
          {tierLoading && (
            <p className="text-sm text-muted-foreground pt-2">Loading your profile...</p>
          )}
          {tierInfo.name && (
            <div className="text-sm font-semibold text-primary pt-2">
              Your Tier: {tierInfo.name} | Max Loan: {tierInfo.limit}
            </div>
          )}

          <DialogDescription className="pt-2">
            Fill in the details below. You can add optional collateral to
            increase trust.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 py-4">
            
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="amount">Amount (ETH)</Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                placeholder="e.g., 1.5"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="interest">Interest (%)</Label>
              <Input
                id="interest"
                type="number"
                placeholder="e.g., 5 for 5%"
                value={interestPercent}
                onChange={(e) => setInterestPercent(e.target.value)}
                required
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="duration">Duration (Days)</Label>
              <Input
                id="duration"
                type="number"
                placeholder="e.g., 30"
                value={durationDays}
                onChange={(e) => setDurationDays(e.target.value)}
                required
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="collateral">Collateral (ETH)</Label>
              <Input
                id="collateral"
                type="number"
                placeholder="Optional, e.g., 0.1"
                value={collateral}
                onChange={(e) => setCollateral(e.target.value)}
              />
              <p className="text-xs text-muted-foreground pt-1">
                To make your loan attractive, find a good balance. Higher collateral reduces risk for investors.
              </p>
            </div>
            
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isPending || isConfirming || !isConnected} className="w-full">
              {isPending
                ? "Waiting for signature..."
                : isConfirming
                ? "Confirming transaction..."
                : !isConnected
                ? "Please connect wallet"
                : "Submit Request"}
            </Button>
          </DialogFooter>
          {isSuccess && (
            <p className="text-sm text-green-600 mt-2 text-center">
              Loan request created successfully!
            </p>
          )}
          {error && (
            <p className="text-sm text-red-600 mt-2 text-center">
              Error: {(error as { shortMessage?: string }).shortMessage || error.message}
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}