"use client";

import { useState, useEffect, useRef } from "react";
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { parseEther, isAddress } from "viem";
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
import { ExternalLink, Loader2 } from "lucide-react";

const PLATFORM_WALLET_ADDRESS = "0x0fadE5b267b572dc1F002d1b9148976cCCE9C8C8";

export function PixWithdrawDialog() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [pixKey, setPixKey] = useState("");
  const [email, setEmail] = useState("");
  const [amountEth, setAmountEth] = useState("");
  const [emailCode, setEmailCode] = useState("");
  
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmittingApi, setIsSubmittingApi] = useState(false);
  
  const [ethPriceBRL, setEthPriceBRL] = useState<number | null>(null);
  const [brlAmount, setBrlAmount] = useState<string>("");
  const [isPriceLoading, setIsPriceLoading] = useState(true);

  const withdrawalDataRef = useRef<{ name: string; cpf: string; pixKey: string; amountEth: string; } | null>(null);

  const { address: userAddress, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  
  const { data: txHash, isPending: isTxPending, sendTransaction } = useSendTransaction();
  const { isLoading: isTxConfirming, isSuccess: isTxConfirmed } = useWaitForTransactionReceipt({ hash: txHash });

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

  useEffect(() => {
    if (isTxConfirmed && txHash && withdrawalDataRef.current) {
      const processWithdrawalApi = async () => {
        setIsSubmittingApi(true);
        try {
          const { name, cpf, pixKey, amountEth } = withdrawalDataRef.current!;
          const response = await fetch('/api/pix-mock/withdraw', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              nome: name,
              cpf: cpf,
              chavePix: pixKey,
              valorEth: amountEth,
              blockchainTxHash: txHash,
            }),
          });
          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.error || "Falha ao processar saque na API.");
          }
          setStep(4);
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
          setFeedbackMessage(`API Error: ${errorMessage}`);
          setIsError(true);
        } finally {
          setIsSubmittingApi(false);
        }
      };
      processWithdrawalApi();
    }
  }, [isTxConfirmed, txHash]);

  const resetState = () => {
    setStep(1);
    setName("");
    setCpf("");
    setPixKey("");
    setEmail("");
    setAmountEth("");
    setEmailCode("");
    setFeedbackMessage("");
    setIsError(false);
    setIsSubmittingApi(false);
    setEthPriceBRL(null);
    setBrlAmount("");
    withdrawalDataRef.current = null;
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
    if (isSubmittingApi) return;
    if (!name || !cpf || !pixKey || !email || !amountEth) return;

    setIsSubmittingApi(true);
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
      setIsSubmittingApi(false);
    }
  };

  const handleConfirmAndPay = () => {
    if (!isAddress(PLATFORM_WALLET_ADDRESS)) {
        setFeedbackMessage("Erro crítico: O endereço da carteira da plataforma não é válido. Contate o suporte.");
        setIsError(true);
        return;
    }

    if (!amountEth || isTxPending || isTxConfirming) return;

    withdrawalDataRef.current = { name, cpf, pixKey, amountEth };

    sendTransaction({
        to: PLATFORM_WALLET_ADDRESS,
        value: parseEther(amountEth),
    });
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="bg-black text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-black">
          PIX Withdraw
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {step === 1 && (
          <>
            <DialogHeader>
              <DialogTitle>Withdraw with PIX</DialogTitle>
              <DialogDescription>Enter your details and the amount you wish to withdraw.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleRequestEmailCode}>
              <div className="grid gap-4 py-4">
                <div className="space-y-2"><Label htmlFor="w-name">Full Name</Label><Input id="w-name" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} required /></div>
                <div className="space-y-2"><Label htmlFor="w-cpf">CPF</Label><Input id="w-cpf" placeholder="000.000.000-00" value={cpf} onChange={(e) => setCpf(e.target.value)} required /></div>
                <div className="space-y-2"><Label htmlFor="w-pix-key">PIX Key</Label><Input id="w-pix-key" placeholder="Email, CPF, phone or random key" value={pixKey} onChange={(e) => setPixKey(e.target.value)} required /></div>
                <div className="space-y-2"><Label htmlFor="w-email">Email</Label><Input id="w-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
                <div className="space-y-2">
                    <Label htmlFor="w-amount">Amount (ETH)</Label>
                    <Input id="w-amount" type="number" step="0.01" placeholder="e.g., 0.1" value={amountEth} onChange={(e) => setAmountEth(e.target.value)} required />
                </div>
                <div className="text-center text-sm text-muted-foreground h-5 flex items-center justify-center">
                  {amountEth && (
                      <>
                      {isPriceLoading && <><Loader2 className="mr-2 h-4 w-4 animate-spin" /><span>Loading price...</span></>}
                      {!isPriceLoading && ethPriceBRL && brlAmount && (
                          <span>~ You will receive R$ <strong>{brlAmount}</strong></span>
                      )}
                      {!isPriceLoading && !ethPriceBRL && (
                          <span className="text-red-500">Could not load price.</span>
                      )}
                      </>
                  )}
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full" disabled={isSubmittingApi || isPriceLoading}>
                  {isSubmittingApi ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending Code...</> : "Send Verification Code"}
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
              <DialogDescription>We sent a 6-digit code to {email}. Please enter it below to continue.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="w-email-code">Verification Code</Label><Input id="w-email-code" placeholder="123456" value={emailCode} onChange={(e) => setEmailCode(e.target.value)} required maxLength={6} /></div>
            </div>
            <DialogFooter>
              <Button onClick={() => setStep(2)} className="w-full" disabled={emailCode.length < 6}>
                Verify & Proceed to Confirmation
              </Button>
            </DialogFooter>
          </>
        )}
        
        {step === 2 && (
            <>
                <DialogHeader>
                    <DialogTitle>Confirm Withdrawal</DialogTitle>
                    <DialogDescription>
                        Review your details. You will send <strong>{amountEth} ETH</strong> to the platform to receive <strong>~ R$ {brlAmount}</strong> by PIX.
                    </DialogDescription>
                </DialogHeader>
                <div className="my-4 space-y-2 text-sm bg-muted p-3 rounded-md">
                    <p><strong>PIX Key:</strong> {pixKey}</p>
                    <p><strong>Recipient:</strong> {name}</p>
                    <p className="text-xs text-muted-foreground pt-2">Payment of {amountEth} ETH will be sent to:</p>
                    <p className="text-xs font-mono break-all">{PLATFORM_WALLET_ADDRESS}</p>
                </div>
                <DialogFooter>
                    <Button onClick={handleConfirmAndPay} disabled={isTxPending || isTxConfirming} className="w-full">
                        {isTxPending && <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Waiting for your wallet...</>}
                        {isTxConfirming && <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Processing transaction...</>}
                        {!isTxPending && !isTxConfirming && "Confirmar e Enviar ETH"}
                    </Button>
                </DialogFooter>
                {txHash && (
                    <div className="mt-4">
                        <Button variant="outline" className="w-full justify-center gap-2" asChild>
                            <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer">
                                See on Etherscan <ExternalLink className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                )}
                {feedbackMessage && isError && <p className="text-sm mt-3 text-center text-red-600">{feedbackMessage}</p>}
            </>
        )}

        {step === 4 && (
            <>
                <DialogHeader>
                    <DialogTitle className="text-green-500">Transaction Submitted!</DialogTitle>
                    <DialogDescription>
                        Your withdrawal has been processed. The PIX transfer of <strong>R$ {brlAmount}</strong> should arrive in your account shortly.
                    </DialogDescription>
                </DialogHeader>
                <div className="my-4 space-y-2">
                    <p className="text-sm text-muted-foreground">You can track the status of your ETH payment on the block explorer.</p>
                    <Button variant="outline" className="w-full justify-center gap-2" asChild>
                        <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer">
                            View Payment on Etherscan <ExternalLink className="h-4 w-4" />
                        </a>
                    </Button>
                </div>
                <DialogFooter>
                    <Button onClick={() => handleOpenChange(false)} className="w-full">Close</Button>
                </DialogFooter>
            </>
        )}
      </DialogContent>
    </Dialog>
  );
}