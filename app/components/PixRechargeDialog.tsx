"use client";

import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { Button } from "@/cache/components/ui/button";
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
import { Copy, Check, ExternalLink, Loader2 } from "lucide-react";
import { QRCodeSVG } from 'qrcode.react';

const FAKE_PIX_KEY = "00020126580014br.gov.bcb.pix0136a6f4-8a53-435a-9d2a-43f65b3d2b215204000053039865802BR5913John Doe6009Sao Paulo62070503***6304E7C1";

export function PixRechargeDialog() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [amountEth, setAmountEth] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);
  
  const [ethPriceBRL, setEthPriceBRL] = useState<number | null>(null);
  const [brlAmount, setBrlAmount] = useState<string>("");
  const [isPriceLoading, setIsPriceLoading] = useState(true);

  const { address: userAddress, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  
  useEffect(() => {
    if (open && step === 1) {
      const fetchEthPrice = async () => {
        setIsPriceLoading(true);
        try {
          const response = await fetch('/api/eth-price');
          if (!response.ok) throw new Error("Could not fetch price");
          const data = await response.json();
          setEthPriceBRL(data.brlPrice);
        } catch (error) {
          console.error("Failed to fetch ETH price:", error);
          setEthPriceBRL(null);
        } finally {
          setIsPriceLoading(false);
        }
      };
      fetchEthPrice();
    }
  }, [open, step]);

  useEffect(() => {
    const ethValue = parseFloat(amountEth);
    if (ethValue > 0 && ethPriceBRL) {
      const calculatedBRL = ethValue * ethPriceBRL;
      setBrlAmount(calculatedBRL.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    } else {
      setBrlAmount("");
    }
  }, [amountEth, ethPriceBRL]);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(FAKE_PIX_KEY);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const resetState = () => {
    setStep(1);
    setName("");
    setCpf("");
    setEmail("");
    setAmountEth("");
    setEmailCode("");
    setFeedbackMessage("");
    setIsSubmitting(false);
    setIsError(false);
    setTransactionHash(null);
    setEthPriceBRL(null);
    setBrlAmount("");
  };
  
  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen && !isConnected) {
      openConnectModal?.();
      return;
    }
    setOpen(isOpen);
    if (!isOpen) {
      resetState();
    }
  };

  const handleRequestEmailCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!name || !cpf || !email || !amountEth) return;

    setIsSubmitting(true);
    setFeedbackMessage("");
    setIsError(false);

    try {
      const response = await fetch('/api/pix-mock/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({ error: "Failed to send code" }));
        throw new Error(data.error);
      }
      setStep(1.5);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setFeedbackMessage(`Error: ${errorMessage}`);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfirmPayment = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setFeedbackMessage("");
    setIsError(false);

    try {
      const response = await fetch('/api/pix-mock/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: name,
          cpf: cpf,
          email: email,
          enderecoEthereum: userAddress,
          valorEth: amountEth,
          emailCode: emailCode,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to communicate with the server.");
      }
      setTransactionHash(data.transactionHash);
      setStep(3);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setFeedbackMessage(`Error: ${errorMessage}`);
      setIsError(true);
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="bg-black text-green-500 border-green-500 hover:bg-green-500 hover:text-black">
          PIX Recharge
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {step === 1 && (
          <>
            <DialogHeader>
              <DialogTitle>Recharge with PIX</DialogTitle>
              <DialogDescription>Enter your details and the amount you wish to recharge.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleRequestEmailCode}>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="pix-name">Full Name</Label>
                  <Input id="pix-name" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pix-cpf">CPF</Label>
                  <Input id="pix-cpf" type="text" placeholder="000.000.000-00" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pix-email">Email</Label>
                  <Input id="pix-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pix-amount">Amount (ETH)</Label>
                  <Input id="pix-amount" type="number" step="0.01" placeholder="e.g., 0.1" value={amountEth} onChange={(e) => setAmountEth(e.target.value)} required />
                </div>
                
                <div className="text-center text-sm text-muted-foreground h-5 flex items-center justify-center">
                  {isPriceLoading && <><Loader2 className="mr-2 h-4 w-4 animate-spin" /><span>Loading price...</span></>}
                  {!isPriceLoading && ethPriceBRL && brlAmount && (
                    <span>~ R$ <strong>{brlAmount}</strong></span>
                  )}
                  {!isPriceLoading && !ethPriceBRL && (
                    <span className="text-red-500">Could not load price.</span>
                  )}
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full" disabled={isSubmitting || isPriceLoading}>
                  {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending Code...</> : "Send Verification Code"}
                </Button>
              </DialogFooter>
              {feedbackMessage && isError && <p className="text-sm mt-3 text-center text-red-600">{feedbackMessage}</p>}
            </form>
          </>
        )}

        {step === 1.5 && (
          <>
            <DialogHeader>
              <DialogTitle>Verify Your Email</DialogTitle>
              <DialogDescription>
                We sent a 6-digit code to {email}. Please enter it below to continue.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="email-code">Verification Code</Label>
                <Input id="email-code" type="text" placeholder="123456" value={emailCode} onChange={(e) => setEmailCode(e.target.value)} required maxLength={6} />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setStep(2)} className="w-full" disabled={emailCode.length < 6}>
                Verify & Proceed to Payment
              </Button>
            </DialogFooter>
          </>
        )}

        {step === 2 && (
          <>
            <DialogHeader>
              <DialogTitle>Scan to Pay</DialogTitle>
              <DialogDescription>
                Scan the QR Code with your banking app to finalize the recharge of {amountEth} ETH.
              </DialogDescription>
              <p className="text-white-bold size-xl mt-6">R$ {brlAmount}</p>
            </DialogHeader>
            <div className="py-6 flex flex-col items-center gap-4">
              <div className="p-4 bg-white rounded-lg"><QRCodeSVG value={FAKE_PIX_KEY} size={192} /></div>
              <div className="w-full mt-6">
                <Label htmlFor="pix-key">PIX Copy & Paste Key</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Input id="pix-key" readOnly value={FAKE_PIX_KEY} className="font-mono text-xs" />
                  <Button variant="outline" size="icon" onClick={handleCopyToClipboard}>
                    {hasCopied ? <Check className="h-4 w-4 text-green-600"/> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleConfirmPayment} disabled={isSubmitting} className="w-full">
                {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</> : "I've Paid, Confirm Recharge"}
              </Button>
            </DialogFooter>
            {feedbackMessage && isError && <p className="text-sm mt-3 text-center text-red-600">{feedbackMessage}</p>}
          </>
        )}

        {step === 3 && (
          <>
            <DialogHeader>
              <DialogTitle className="text-green-500">Transaction Submitted!</DialogTitle>
              <DialogDescription>
                Your recharge has been submitted to the Sepolia network. Confirmation may take a few moments.
              </DialogDescription>
            </DialogHeader>
            <div className="my-4 space-y-2">
              <p className="text-sm text-muted-foreground">You can track the status of your transaction on the block explorer.</p>
              <Button variant="outline" className="w-full justify-center gap-2" asChild>
                <a href={`https://sepolia.etherscan.io/tx/${transactionHash}`} target="_blank" rel="noopener noreferrer">
                  View on Etherscan <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <DialogFooter>
              <Button onClick={() => handleOpenChange(false)} className="w-full">
                Close
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}