"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@/cache/components/ui/button";
import Image from "next/image";
import { ChevronDown, AlertTriangle } from "lucide-react";

export const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button 
                    onClick={openConnectModal} 
                    type="button" 
                    size="lg" 
                    className="font-rainbowkit"
                  >
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button 
                    onClick={openChainModal} 
                    type="button" 
                    variant="destructive" 
                    size="lg"
                    className="font-rainbowkit"
                  >
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Wrong Network
                  </Button>
                );
              }
              
              return (
                <div className="flex gap-3">
                  <Button
                    onClick={openChainModal}
                    type="button"
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 font-rainbowkit"
                  >
                    {chain.hasIcon && chain.iconUrl && (
                      <Image
                        alt={chain.name ?? "Chain icon"}
                        src={chain.iconUrl}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    )}
                    <span>{chain.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>

                  <Button 
                    onClick={openAccountModal} 
                    type="button" 
                    size="lg"
                    className="font-rainbowkit"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};