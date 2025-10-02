"use client";

import { useEffect, useState } from "react";
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
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
  triggerButtonVariant?: ButtonProps['variant'];
  triggerButtonSize?: ButtonProps['size'];
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
  const { isConnected } = useAccount();
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });
  
  const { openConnectModal } = useConnectModal();

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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request a New Loan</DialogTitle>
          <DialogDescription>
            Fill in the details below. You can add optional collateral to
            increase trust.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount (ETH)
              </Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                placeholder="e.g., 1.5"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="interest" className="text-right">
                Interest (%)
              </Label>
              <Input
                id="interest"
                type="number"
                placeholder="e.g., 5 for 5%"
                value={interestPercent}
                onChange={(e) => setInterestPercent(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="duration" className="text-right">
                Duration (Days)
              </Label>
              <Input
                id="duration"
                type="number"
                placeholder="e.g., 30"
                value={durationDays}
                onChange={(e) => setDurationDays(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="collateral" className="text-right">
                Collateral (ETH)
              </Label>
              <Input
                id="collateral"
                type="number"
                placeholder="Optional, e.g., 0.1"
                value={collateral}
                onChange={(e) => setCollateral(e.target.value)}
                className="col-span-3"
              />
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