import { Building2, AlertCircle } from "lucide-react";

const ContextSlide = () => {
  return (
    <div className="bg-card rounded-lg p-12 shadow-medium min-h-[600px]">
      <h2 className="text-4xl font-bold text-foreground mb-8">
        Context & Problem Statement
      </h2>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Building2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Context</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Operating in Delhi, Mumbai, Bangalore, Kolkata</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Ride types: Pool, Regular, Premium</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Mix of driver-owned + company-owned vehicles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Growth lever: discounts, referrals, loyalty program, incentives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>App + website booking ecosystem</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-negative mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Problem Statement</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-negative mt-1">•</span>
                  <span className="font-semibold">Profits dipped by 30% in the last quarter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-negative mt-1">•</span>
                  <span>No similar dip in previous quarters (not seasonality)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-negative mt-1">•</span>
                  <span>CEO wants root cause + action plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-negative mt-1">•</span>
                  <span>Business needs short-term fixes + long-term structural solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-muted rounded-lg border-l-4 border-negative">
        <p className="text-lg font-semibold text-foreground">
          Critical Business Question: What caused the 30% profit decline and how do we fix it?
        </p>
      </div>
    </div>
  );
};

export default ContextSlide;
