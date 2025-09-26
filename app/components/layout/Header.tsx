"use client";

import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { RequestLoanDialog } from "../loan/RequestLoanDialog";
import { PixRechargeDialog } from "../PixRechargeDialog";

export function Header() {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="LenDeFi Logo"
              width={24}
              height={24}
              className="rounded"
            />
            <h1 className="text-xl font-bold">LenDeFi</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            
            <RequestLoanDialog
              triggerButtonText="Request Loan"
              triggerButtonSize="lg"
              triggerButtonClassName="bg-black text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-black"
            />

            <PixRechargeDialog />
            
            <ConnectButton />
          </nav>
        </div>
      </div>
    </header>
  );
}