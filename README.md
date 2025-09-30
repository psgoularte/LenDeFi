````markdown
# LenDeFi

LenDeFi is a **P2P decentralized and collateralized lending platform** built on blockchain.  
It enables **borrowers** to request loans by locking crypto as collateral and **investors** to fund those requests directly, without intermediaries like banks.  

This project is built with **Next.js** and Web3 integrations. It combines a modern frontend with blockchain smart contracts to provide a transparent, secure, and scalable solution for decentralized finance.

---

## 🚀 Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn install && yarn dev
# or
pnpm install && pnpm dev
# or
bun install && bun dev
````

Open [https://lendefi.vercel.app/](https://lendefi.vercel.app/) with your browser to see the app.

You can start editing by modifying:

```
app/page.tsx
```

The page auto-updates as you edit.

---

## 📌 Features in This Repository

The codebase is divided into reusable React components, dialogs, and layouts. Below are the highlights:

### UI Components

* **`Header.tsx`** – Navigation bar with logo, wallet connect button, and quick access to loan dialogs.
* **`Footer.tsx`** – Footer with institutional links and GitHub reference.
* **`StatsCards.tsx`** – Dynamic statistics about the marketplace (total loans, average interest rate, total volume).
* **`HowItWorks.tsx`** – Step-by-step visual explanation of how LenDeFi works.

### Loan System

* **`LoanRequestCard.tsx`** – Displays loan requests available for funding, with borrower score, amount, and conditions.
* **`RequestLoanDialog.tsx`** – Modal that allows a borrower to create a new loan request by specifying amount, interest rate, duration, and collateral.
* **`ScoreStars.tsx`** – Reputation/rating system, used to visualize user trustworthiness.

### Payment Simulation

* **`PixRechargeDialog.tsx`** – Simulated integration with PIX (Brazilian instant payment system). Allows users to “recharge” ETH using a fake PIX key, demonstrating how local payment methods can onboard new users.

### Global Wrapper and Styling

* **`clientwrapper.tsx`** – Client-only wrapper for providers (e.g., Wagmi, RainbowKit, context). Ensures that Web3 wallet integrations work correctly in Next.js without SSR issues.
* **`globals.css`** – Global styles using Tailwind CSS with a dark + orange theme, smooth scroll behavior, and consistent design system.

---

## 🛠️ Architecture

The system follows a three-layer design:

1. **Frontend (Next.js + React)**

   * User-facing interface.
   * Handles wallet connection and transaction requests.
   * Built with modular components, Tailwind CSS, and dialogs for loan/PIX flows.

2. **Blockchain (Smart Contracts in Solidity)**

   * Core loan logic lives on-chain: interest calculation, collateral management, liquidation in case of default.
   * Ensures immutability, transparency, and security.

3. **Firestore (Firebase)**

   * Stores non-critical UI metadata (e.g., public loan history, cached stats).
   * Provides authentication for identifying users (borrowers/investors).

---

## 📊 Key Features

* Borrowers can **create collateralized loan requests** directly from the app.
* Investors can **fund loans** and earn yield without intermediaries.
* **Reputation system** ensures trustworthy interactions.
* **Oracles (simulated in MVP)** provide price feeds for liquidation logic.
* **Real-time stats** about the market.
* **PIX mock integration** demonstrates accessibility for Brazilian users.

---

## 📚 Learn More

To deepen your understanding:

* [Next.js Documentation](https://nextjs.org/docs) – features and API.
* [Learn Next.js](https://nextjs.org/learn) – interactive official tutorial.
* [Tailwind CSS Docs](https://tailwindcss.com/docs) – styling system.
* [Wagmi](https://wagmi.sh/) + [RainbowKit](https://www.rainbowkit.com/) – wallet and Web3 integration.
* [Solidity Docs](https://docs.soliditylang.org/) – smart contract development.

---

## 🌐 Deployment

The easiest way to deploy is with [Vercel](https://vercel.com/), the team behind Next.js.
Check the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for details.

---

## 📄 License

This project is licensed under the **MIT License** – free to use, modify, and distribute.

---

## 👥 Authors
* Mauricio Foletto de Freitas e Pedro Souza Goularte – desenvolvimento e concepção do projeto.

```

