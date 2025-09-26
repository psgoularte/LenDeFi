import { Card, CardContent } from "@/cache/components/ui/card";
import { Users, TrendingUp, ShieldCheck } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="bg-card border-t">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How LenDeFi Works
          </h2>
          <div className="space-y-12">
            {/* --- ETAPA 1: CRIAÇÃO --- */}
            <div className="relative flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground">
                  <span className="font-bold text-lg">1</span>
                </div>
                <div className="absolute left-6 top-12 w-px h-full bg-border"></div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-primary">
                  Create Loan Request
                </h3>
                <p className="mt-2 text-muted-foreground">
                  The process begins when a borrower submits a loan request,
                  defining the amount, interest, and duration. An optional
                  collateral can be added to increase investor confidence.
                </p>
              </div>
            </div>

            {/* --- ETAPA 2: DECISÃO (FINANCIADO OU NÃO) --- */}
            <div className="relative flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground">
                  <span className="font-bold text-lg">2</span>
                </div>
                <div className="absolute left-6 top-12 w-px h-full bg-border"></div>
              </div>
              <div className="ml-6 w-full">
                <h3 className="text-xl font-bold text-primary">
                  Funding Period
                </h3>
                <p className="mt-2 text-muted-foreground">
                  The loan is now open for investors. Two paths are possible
                  from here:
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-background border border-border rounded-lg p-6">
                    <h4 className="font-semibold text-lg">
                      Path A: Not Funded
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      If the funding deadline passes without an investor, the
                      loan expires. The borrower can then call the{" "}
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">
                        cancelLoan
                      </code>{" "}
                      function to have their collateral fully refunded.
                    </p>
                  </div>
                  <div className="bg-background border-2 border-accent rounded-lg p-6">
                    <h4 className="font-semibold text-lg text-accent">
                      Path B: Funded
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      An investor funds the loan, changing its status to
                      Funded. The borrower can then withdraw the funds, making
                      the loan Active. This is the start of the happy path.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- ETAPA 3: RESULTADO (PAGO OU INADIMPLENTE) --- */}
            <div className="relative flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground">
                  <span className="font-bold text-lg">3</span>
                </div>
              </div>
              <div className="ml-6 w-full">
                <h3 className="text-xl font-bold text-primary">
                  Loan Outcome
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Once the loan is active and the duration ends, one of two
                  outcomes will occur:
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-background border-2 border-accent rounded-lg p-6">
                    <h4 className="font-semibold text-lg text-accent">
                      Outcome: Repaid
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      The borrower repays the loan plus interest. The
                      collateral is{" "}
                      <span className="font-bold">
                        automatically returned
                      </span>{" "}
                      in the same transaction. The investor can then withdraw
                      their principal and profit.
                    </p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-6">
                    <h4 className="font-semibold text-lg">
                      Outcome: Defaulted
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      The borrower fails to repay on time. The loan status
                      changes to Defaulted, allowing the investor to claim the
                      collateral as compensation for the loss (90% for the
                      investor, 10% for the platform).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Higher Returns</h4>
                  <p className="text-sm text-muted-foreground">
                    Earn competitive returns by cutting out traditional banking
                    intermediaries.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2">Flexible Security</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose your risk level. Invest in loans secured by
                    reputation or by optional collateral.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Global Access</h4>
                  <p className="text-sm text-muted-foreground">
                    Connect with borrowers and investors worldwide, 24/7,
                    without geographical restrictions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}