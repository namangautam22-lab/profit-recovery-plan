import { XCircle, CheckCircle2, TrendingUp } from "lucide-react";

const SummarySlide = () => {
  return (
    <div className="bg-card rounded-lg p-12 shadow-medium min-h-[600px]">
      <h2 className="text-4xl font-bold text-foreground mb-8">
        Closing Summary
      </h2>

      <div className="space-y-8">
        {/* What went wrong */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <XCircle className="h-8 w-8 text-negative" />
            <h3 className="text-2xl font-bold text-foreground">What Went Wrong?</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-negative/10 rounded-lg border-l-4 border-negative">
              <h4 className="font-semibold text-foreground mb-3">Promo-First Growth Strategy</h4>
              <p className="text-foreground/80">
                Aggressive discounting attracted low-quality users with poor retention and minimal organic intent
              </p>
            </div>
            <div className="p-6 bg-negative/10 rounded-lg border-l-4 border-negative">
              <h4 className="font-semibold text-foreground mb-3">Misaligned Driver Incentives</h4>
              <p className="text-foreground/80">
                Guarantees and incentives not linked to fare collection led to severe margin collapse
              </p>
            </div>
            <div className="p-6 bg-negative/10 rounded-lg border-l-4 border-negative">
              <h4 className="font-semibold text-foreground mb-3">Poor Pool Experience</h4>
              <p className="text-foreground/80">
                Long detours, high ETAs, and frequent cancellations drove lower retention rates
              </p>
            </div>
            <div className="p-6 bg-negative/10 rounded-lg border-l-4 border-negative">
              <h4 className="font-semibold text-foreground mb-3">No Margin Guardrails</h4>
              <p className="text-foreground/80">
                Uncontrolled burn across promos, referrals, and loyalty with no profitability checks
              </p>
            </div>
          </div>
        </div>

        {/* What we fix */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="h-8 w-8 text-positive" />
            <h3 className="text-2xl font-bold text-foreground">What We Fix</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-positive/10 rounded-lg border-l-4 border-positive">
              <h4 className="font-semibold text-foreground mb-3">Build Guardrails</h4>
              <p className="text-foreground/80">
                Minimum contribution thresholds, capped discounts, fraud prevention, and real-time monitoring
              </p>
            </div>
            <div className="p-6 bg-positive/10 rounded-lg border-l-4 border-positive">
              <h4 className="font-semibold text-foreground mb-3">Improve Experience</h4>
              <p className="text-foreground/80">
                Better Pool routing, upfront detour disclosure, reduced pickup radius, and driver tools
              </p>
            </div>
            <div className="p-6 bg-positive/10 rounded-lg border-l-4 border-positive">
              <h4 className="font-semibold text-foreground mb-3">Clean Up Incentives</h4>
              <p className="text-foreground/80">
                Fare-linked driver incentives, separate Pool/Regular slabs, performance-based rewards
              </p>
            </div>
            <div className="p-6 bg-positive/10 rounded-lg border-l-4 border-positive">
              <h4 className="font-semibold text-foreground mb-3">Revamp Loyalty</h4>
              <p className="text-foreground/80">
                Move from discount-based to value-based rewards with emotional connection
              </p>
            </div>
          </div>
        </div>

        {/* Product Approach */}
        <div className="bg-gradient-primary p-8 rounded-lg">
          <div className="flex items-start gap-4">
            <TrendingUp className="h-10 w-10 text-primary-foreground flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Take a Profitability-First Product Approach
              </h3>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Balance growth with sustainable unit economics. Build systems that prevent margin erosion 
                while delivering exceptional rider and driver experiences. Focus on quality cohorts, 
                not just volume.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-6">
          <div className="p-6 bg-muted rounded-lg text-center">
            <p className="text-sm text-muted-foreground mb-2">Target Margin Recovery</p>
            <p className="text-4xl font-bold text-positive">40-50%</p>
            <p className="text-xs text-foreground/60 mt-2">In first 3 months</p>
          </div>
          <div className="p-6 bg-muted rounded-lg text-center">
            <p className="text-sm text-muted-foreground mb-2">Retention Improvement</p>
            <p className="text-4xl font-bold text-positive">15-20%</p>
            <p className="text-xs text-foreground/60 mt-2">Through experience fixes</p>
          </div>
          <div className="p-6 bg-muted rounded-lg text-center">
            <p className="text-sm text-muted-foreground mb-2">Long-term Target</p>
            <p className="text-4xl font-bold text-positive">30%+</p>
            <p className="text-xs text-foreground/60 mt-2">Contribution margin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarySlide;
