// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./clientwrapper";
import { Header } from "@/app/components/layout/Header"; // 1. Importe o Header

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LenDeFi",
  description: "DeFi Lending Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientWrapper>
          {/* 2. Adicione o componente Header aqui, dentro do ClientWrapper */}
          <Header />

          {/* 3. Adicione padding-top para compensar a altura do header fixo */}
          <main className="container mx-auto p-4 pt-10">
            {children}
          </main>
        </ClientWrapper>
      </body>
    </html>
  );
}