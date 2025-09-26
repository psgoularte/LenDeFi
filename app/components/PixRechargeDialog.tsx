"use client";

import { useState } from "react";
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
import { Copy, Check } from "lucide-react";
import { QRCodeSVG } from 'qrcode.react';

const FAKE_PIX_KEY = "00020126580014br.gov.bcb.pix0136a6f4-8a53-435a-9d2a-43f65b3d2b215204000053039865802BR5913John Doe6009Sao Paulo62070503***6304E7C1";

export function PixRechargeDialog() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [amountEth, setAmountEth] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  const { address: userAddress, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(FAKE_PIX_KEY);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const resetState = () => {
    setStep(1);
    setName("");
    setCpf("");
    setAmountEth("");
    setFeedbackMessage("");
    setIsSubmitting(false);
    setIsError(false);
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

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && cpf && amountEth) {
      setStep(2);
    }
  };

  const handleConfirmPayment = async () => {
    setIsSubmitting(true);
    setFeedbackMessage("");
    setIsError(false);
    try {
      const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/api/pagamento`;
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: name,
          cpf: cpf, 
          enderecoEthereum: userAddress,
          valorEth: amountEth,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to communicate with the server.");
      }
      setFeedbackMessage(`✅ Request received! ETH will be sent to your wallet shortly. ID: ${data.transactionId}`);
      setTimeout(() => {
        handleOpenChange(false);
      }, 5000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setFeedbackMessage(`❌ Error: ${errorMessage}`);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button 
          size="lg" 
          variant="outline"
          className="bg-black text-green-500 border-green-500 hover:bg-green-500 hover:text-black"
        >
          PIX Recharge
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {step === 1 && (
          <>
            <DialogHeader>
              <DialogTitle>PIX Recharge</DialogTitle>
              <DialogDescription>Enter your details and the amount you wish to recharge.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleProceedToPayment}>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="pix-name">Name</Label>
                  <Input id="pix-name" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pix-cpf">CPF</Label>
                  <Input id="pix-cpf" type="text" placeholder="000.000.000-00" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pix-amount">Amount (ETH)</Label>
                  <Input id="pix-amount" type="number" step="0.01" placeholder="e.g., 0.1" value={amountEth} onChange={(e) => setAmountEth(e.target.value)} required />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full">
                  Generate PIX QR Code
                </Button>
              </DialogFooter>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <DialogHeader>
              <DialogTitle>Scan to Pay</DialogTitle>
              <DialogDescription>
                Scan the QR Code with your banking app to finalize the recharge of {amountEth} ETH.
              </DialogDescription>
            </DialogHeader>
            <div className="py-6 flex flex-col items-center gap-4">
                <div className="p-4 bg-white rounded-lg">
                  <QRCodeSVG value={FAKE_PIX_KEY} size={192} bgColor={"#ffffff"} fgColor={"#000000"} level={"L"} includeMargin={false}/>
                </div>
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
                {isSubmitting ? "Processing..." : "Confirm Payment"}
              </Button>
            </DialogFooter>
            {feedbackMessage && <p className={`text-sm mt-3 text-center ${isError ? 'text-red-600' : 'text-green-600'}`}>{feedbackMessage}</p>}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}