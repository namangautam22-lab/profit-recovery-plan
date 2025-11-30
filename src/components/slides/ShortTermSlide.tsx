import { Zap, Shield, DollarSign, Sparkles } from "lucide-react";

const ShortTermSlide = () => {
  return (
    <div className="bg-card rounded-lg p-12 shadow-medium min-h-[600px]">
      <h2 className="text-4xl font-bold text-foreground mb-4">
        Short-Term Recommendations
      </h2>
      <p className="text-lg text-secondary mb-8">0-3 Months: Fast Impact — Stop the Bleed</p>

      <div className="space-y-6">
        {/* Recommendation 1 */}
        <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-primary rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-3">1. Promo & Pricing Guardrails</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground/80">Set minimum contribution threshold (e.g., ₹20/trip minimum)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground/80">Remove percentage-based deep discounts</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground/80">Shift to capped flat discounts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground/80">Limit Pool ride promos to specific time bands</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendation 2 */}
        <div className="p-6 bg-gradient-to-r from-secondary/5 to-accent/5 border-l-4 border-secondary rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <Zap className="h-6 w-6 text-secondary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-3">2. Referral Tightening</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 bg-card rounded border border-secondary/30">
                  <p className="text-sm font-medium text-foreground mb-1">Validation</p>
                  <p className="text-xs text-foreground/70">Incentive only after 2 full-fare rides</p>
                </div>
                <div className="p-3 bg-card rounded border border-secondary/30">
                  <p className="text-sm font-medium text-foreground mb-1">Limits</p>
                  <p className="text-xs text-foreground/70">Monthly cap on referrals per user</p>
                </div>
                <div className="p-3 bg-card rounded border border-secondary/30">
                  <p className="text-sm font-medium text-foreground mb-1">Fraud Rules</p>
                  <p className="text-xs text-foreground/70">Device, payment, ride pattern checks</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendation 3 */}
        <div className="p-6 bg-gradient-to-r from-accent/5 to-primary/5 border-l-4 border-accent rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <DollarSign className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-3">3. Driver Incentive Reset</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-foreground/80">Link incentives to effective fare collected</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-foreground/80">Separate slabs for Pool vs Regular rides</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-foreground/80">Reduce guaranteed hourly models</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-foreground/80">Performance-based bonuses only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendation 4 */}
        <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-primary rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-3">4. Experience Fixes</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-card rounded">
                  <p className="font-medium text-foreground mb-2">Transparency</p>
                  <p className="text-sm text-foreground/70">Show detour time upfront in Pool rides</p>
                </div>
                <div className="p-4 bg-card rounded">
                  <p className="font-medium text-foreground mb-2">Routing</p>
                  <p className="text-sm text-foreground/70">Reduce pickup radius for Pool rides</p>
                </div>
                <div className="p-4 bg-card rounded">
                  <p className="font-medium text-foreground mb-2">Algorithm</p>
                  <p className="text-sm text-foreground/70">Improve Pool matching logic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact */}
      <div className="mt-8 p-6 bg-positive/10 rounded-lg border-2 border-positive">
        <h4 className="text-lg font-semibold text-foreground mb-3">Immediate Expected Impact</h4>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-positive"></div>
            <span className="text-foreground/90">Margin improvement: 40-50% recovery in contribution/trip</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-positive"></div>
            <span className="text-foreground/90">Churn reduction: 15-20% improvement in retention</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortTermSlide;
