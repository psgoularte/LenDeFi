export type AiAnalysisResult = {
  riskScore: number;
  analysis: string;
};

export type Loan = {
  id: bigint;
  borrower: `0x${string}`;
  amountRequested: bigint;
  amountFunded: bigint;
  interestBps: bigint;
  durationSecs: bigint;
  fundingDeadline: bigint;
  status: number;
  startTimestamp: bigint;
  totalRepayment: bigint;
  investor: `0x${string}`;
  score: number;
  defaultTimestamp: bigint;
  collateralAmount: bigint;
  collateralClaimed: boolean;
};