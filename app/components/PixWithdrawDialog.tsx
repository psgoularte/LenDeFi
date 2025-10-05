"use client";

import { useState, useEffect } from "react";
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { parseEther } from "viem";

import { Button } from "@/cache/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/cache/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/cache/components/ui/select";
import { Input } from "@/cache/components/ui/input";
import { Label } from "@/cache/components/ui/label";
import { ExternalLink, Loader2 } from "lucide-react";

const PLATFORM_WALLET_ADDRESS = process.env.NEXT_PUBLIC_PLATFORM_WALLET_ADDRESS;

if (!PLATFORM_WALLET_ADDRESS) {
    throw new Error("FATAL: NEXT_PUBLIC_PLATFORM_WALLET_ADDRESS is not defined in .env.local");
}

// 1. Componente agora aceita props para ser controlado externamente
export function PixWithdrawDialog({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  // 2. O estado 'open' interno foi removido daqui
  const [step, setStep] = useState(1);

  // --- Form Fields ---
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [amountEth, setAmountEth] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [pixKey, setPixKey] = useState("");
  const [pixKeyType, setPixKeyType] = useState("cpf");

  const { sendTransaction, data: hash, isPending, error: wagmiError } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  // --- UI Control States ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [withdrawalId, setWithdrawalId] = useState<string | null>(null);

  // --- Price and Quote States ---
  const [ethPriceBRL, setEthPriceBRL] = useState<number | null>(null);
  const [brlAmount, setBrlAmount] = useState<string>("");
  const [isPriceLoading, setIsPriceLoading] = useState(true);

  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  useEffect(() => {
    if (open) {
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
  }, [open]);

  useEffect(() => {
    const ethValue = parseFloat(amountEth);
    if (ethValue > 0 && ethPriceBRL) {
      const calculatedBRL = ethValue * ethPriceBRL;
      setBrlAmount(calculatedBRL.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    } else {
      setBrlAmount("");
    }
  }, [amountEth, ethPriceBRL]);

  const resetState = () => {
    setStep(1);
    setName("");
    setCpf("");
    setEmail("");
    setAmountEth("");
    setEmailCode("");
    setPixKey("");
    setPixKeyType("cpf");
    setFeedbackMessage("");
    setIsSubmitting(false);
    setIsError(false);
    setWithdrawalId(null);
    setBrlAmount("");
  };
  
  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen && !isConnected) {
      openConnectModal?.();
      return;
    }
    // Usa a função recebida via props
    onOpenChange(isOpen);
    if (!isOpen) {
      resetState();
    }
  };

  const handleRequestEmailCode = async (e: React.FormEvent) => {
    e.preventDefault();
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
      setStep(2);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setFeedbackMessage(`Error: ${errorMessage}`);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendEth = () => {
    if (!amountEth || isNaN(parseFloat(amountEth))) {
      setFeedbackMessage("Please enter a valid amount.");
      setIsError(true);
      return;
    }
    sendTransaction({
      to: PLATFORM_WALLET_ADDRESS as `0x${string}`,
      value: parseEther(amountEth),
    });
  };

  useEffect(() => {
    const submitWithdrawalRequest = async (txHash: `0x${string}`) => {
      setIsSubmitting(true);
      setFeedbackMessage("");
      setIsError(false);
      try {
        const response = await fetch('/api/pix-mock/withdraw', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nome: name,
            cpf: cpf,
            email: email,
            valorEth: amountEth,
            emailCode: emailCode,
            pixKey: pixKey,
            pixKeyType: pixKeyType,
            userTxHash: txHash,
          }),
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "Failed to submit request to server.");
        }
        setWithdrawalId(data.withdrawalId);
        setStep(4);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An unknown server error occurred.";
        setFeedbackMessage(errorMessage);
        setIsError(true);
      } finally {
        setIsSubmitting(false);
      }
    };
    
    if (isSuccess && hash) {
      submitWithdrawalRequest(hash);
    }
  }, [isSuccess, hash, name, cpf, email, amountEth, emailCode, pixKey, pixKeyType]);


  const isLoadingTransaction = isPending || isConfirming;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {/* 3. O DialogTrigger foi removido daqui */}
      <DialogContent className="sm:max-w-[425px]">
        {/* --- Step 1: Data Collection --- */}
        {step === 1 && (
          <>
            <DialogHeader>
              <DialogTitle>Withdraw ETH to PIX</DialogTitle>
              <DialogDescription>Enter your details and the amount you wish to withdraw to your PIX account.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleRequestEmailCode}>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="withdraw-name">Full Name</Label>
                  <Input id="withdraw-name" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="withdraw-cpf">CPF</Label>
                  <Input id="withdraw-cpf" placeholder="000.000.000-00" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="withdraw-email">Email</Label>
                  <Input id="withdraw-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="withdraw-amount">Withdrawal Amount (ETH)</Label>
                  <Input id="withdraw-amount" type="number" step="any" placeholder="e.g., 0.1" value={amountEth} onChange={(e) => setAmountEth(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label>PIX Key Type</Label>
                  <Select value={pixKeyType} onValueChange={setPixKeyType}>
                    <SelectTrigger id="pix-key-type"><SelectValue placeholder="Select key type" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cpf">CPF</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="telefone">Phone</SelectItem>
                      <SelectItem value="aleatoria">Random</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pix-key">PIX Key</Label>
                  <Input id="pix-key" placeholder="Your PIX key" value={pixKey} onChange={(e) => setPixKey(e.target.value)} required />
                </div>
                
                <div className="text-center text-sm text-muted-foreground h-5 flex items-center justify-center pt-2">
                  {isPriceLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading price...</>
                  : brlAmount ? <span>You will receive ~ R$ <strong>{brlAmount}</strong></span>
                  : !ethPriceBRL ? <span className="text-red-500">Price unavailable.</span> : null}
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full" disabled={isSubmitting || isPriceLoading || !name || !cpf || !email || !amountEth || !pixKey}>
                  {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending Code...</> : "Verify Email"}
                </Button>
              </DialogFooter>
              {feedbackMessage && isError && <p className="text-sm mt-3 text-center text-red-600">{feedbackMessage}</p>}
            </form>
          </>
        )}

        {/* --- Step 2: Email Verification --- */}
        {step === 2 && (
          <>
            <DialogHeader>
              <DialogTitle>Verify Your Email</DialogTitle>
              <DialogDescription>We sent a 6-digit code to <strong>{email}</strong>.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Label htmlFor="email-code">Verification Code</Label>
              <Input id="email-code" placeholder="123456" value={emailCode} onChange={(e) => setEmailCode(e.target.value)} required maxLength={6} />
            </div>
            <DialogFooter>
              <Button onClick={() => setStep(3)} className="w-full" disabled={emailCode.length < 6}>
                Proceed to Payment
              </Button>
            </DialogFooter>
          </>
        )}

        {/* --- Step 3: Wagmi Transaction Step --- */}
        {step === 3 && (
          <>
            <DialogHeader>
              <DialogTitle>Confirm Transaction</DialogTitle>
              <DialogDescription>
                You are about to send <strong>{amountEth} ETH</strong> to the platform. 
                Please confirm the transaction in your wallet.
              </DialogDescription>
            </DialogHeader>
            <div className="py-8 text-center">
              <Button 
                size="lg" 
                className="w-full" 
                onClick={handleSendEth} 
                disabled={isLoadingTransaction}
              >
                {isPending && <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Awaiting Wallet Confirmation...</>}
                {isConfirming && <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing Transaction...</>}
                {!isLoadingTransaction && `Send ${amountEth} ETH`}
              </Button>
            </div>
            <DialogFooter className="text-center">
                {wagmiError && (
                    <p className="text-sm text-red-500 w-full">
                        Error: {(wagmiError as any).shortMessage || wagmiError.message}
                    </p>
                )}
            </DialogFooter>
          </>
        )}

        {/* --- Step 4: Final Conclusion Screen --- */}
        {step === 4 && (
          <>
            <DialogHeader>
              <DialogTitle className="text-green-500">
                {isSubmitting ? "Submitting Request..." : "Withdrawal Request Received!"}
              </DialogTitle>
              <DialogDescription>
                {isSubmitting 
                  ? "Your transaction was confirmed on-chain. We are now registering your withdrawal request..." 
                  : "Your request has been received and the PIX will be processed shortly. Please save your withdrawal ID."}
              </DialogDescription>
            </DialogHeader>

            {isSubmitting ? (
              <div className="flex justify-center items-center py-8">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : (
              <div className="my-4 space-y-3">
                <div className="space-y-1">
                  <Label>Withdrawal ID</Label>
                  <p className="font-mono text-xs bg-muted p-2 rounded-md">{withdrawalId}</p>
                </div>
                <div className="space-y-1">
                  <Label>Your Transaction Hash</Label>
                  <Button variant="outline" className="w-full justify-center gap-2" asChild>
                    <a href={`https://sepolia.etherscan.io/tx/${hash}`} target="_blank" rel="noopener noreferrer">
                      View on Etherscan <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            )}
            
            {!isSubmitting && (
                <DialogFooter>
                    <Button onClick={() => onOpenChange(false)} className="w-full">
                        Close
                    </Button>
                </DialogFooter>
            )}
            {feedbackMessage && isError && <p className="text-sm mt-3 text-center text-red-600">{feedbackMessage}</p>}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}