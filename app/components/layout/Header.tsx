"use client";

import { useState } from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@/cache/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/cache/components/ui/dropdown-menu";

import { RequestLoanDialog } from "../loan/RequestLoanDialog";
import { PixRechargeDialog } from "../PixRechargeDialog"; 
import { PixWithdrawDialog } from "../PixWithdrawDialog";
import { ArrowDown } from "lucide-react";

export function Header() {
  // Estados para controlar qual diálogo está aberto
  const [rechargeOpen, setRechargeOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);

  return (
    <>
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/Logo.png" alt="LenDeFi Logo" width={24} height={24} className="rounded" />
              <h1 className="text-xl font-bold">LenDeFi</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              
              <RequestLoanDialog
                triggerButtonText="Request Loan"
                triggerButtonSize="lg"
                triggerButtonClassName="bg-black text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-black"
              />

              {/* O Dropdown Menu que unifica as operações PIX */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" variant="outline" className="bg-black text-green-500 border-green-500 hover:bg-green-500 hover:text-black">
                    PIX Operations
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onSelect={() => setRechargeOpen(true)}>
                    Recharge with PIX
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setWithdrawOpen(true)}>
                    Withdraw to PIX
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <ConnectButton />
            </nav>
          </div>
        </div>
      </header>
      
      <PixRechargeDialog open={rechargeOpen} onOpenChange={setRechargeOpen} />
      <PixWithdrawDialog open={withdrawOpen} onOpenChange={setWithdrawOpen} />
    </>
  );
}