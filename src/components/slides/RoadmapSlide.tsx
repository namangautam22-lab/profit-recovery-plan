import { Calendar, Target, Rocket } from "lucide-react";

const RoadmapSlide = () => {
  return (
    <div className="bg-card rounded-lg p-12 shadow-medium min-h-[600px]">
      <h2 className="text-4xl font-bold text-foreground mb-8">
        Product Roadmap
      </h2>

      <div className="space-y-8">
        {/* Phase 1 */}
        <div className="relative pl-8 border-l-4 border-primary">
          <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Target className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="pb-8">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-2xl font-bold text-foreground">Phase 1: Stabilize</h3>
              <span className="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                0-3 months
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">Promo Guardrails</h4>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>• Minimum contribution threshold</li>
                  <li>• Capped flat discounts</li>
                  <li>• Time-band restrictions</li>
                </ul>
              </div>
              <div className="p-5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">Driver Incentive Correction</h4>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>• Fare-linked incentives</li>
                  <li>• Separate Pool/Regular slabs</li>
                  <li>• Reduce guarantees</li>
                </ul>
              </div>
              <div className="p-5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">Pool Experience Fixes</h4>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>• Show detour time upfront</li>
                  <li>• Reduce pickup radius</li>
                  <li>• Improve routing algorithm</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-positive/10 rounded border-l-4 border-positive">
              <p className="text-sm font-semibold text-foreground">
                ✓ Target: Recover 40-50% of lost margin within 3 months
              </p>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="relative pl-8 border-l-4 border-secondary">
          <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <Calendar className="h-5 w-5 text-secondary-foreground" />
          </div>
          <div className="pb-8">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-2xl font-bold text-foreground">Phase 2: Optimize</h3>
              <span className="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-semibold">
                3-9 months
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-5 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg border border-secondary/20">
                <h4 className="font-semibold text-foreground mb-2">Dynamic Pricing Engine</h4>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>• Real-time contribution checks</li>
                  <li>• Demand-based pricing</li>
                  <li>• Automated guardrails</li>
                </ul>
              </div>
              <div className="p-5 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg border border-secondary/20">
                <h4 className="font-semibold text-foreground mb-2">Personalized Promo System</h4>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>• LTV-based targeting</li>
                  <li>• A/B testing framework</li>
                  <li>• ROI optimization</li>
                </ul>
              </div>
              <div className="p-5 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg border border-secondary/20">
                <h4 className="font-semibold text-foreground mb-2">City-Level Credit Controls</h4>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>• Profitability dashboard</li>
                  <li>• Budget allocation system</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-positive/10 rounded border-l-4 border-positive">
              <p className="text-sm font-semibold text-foreground">
                ✓ Target: Achieve sustainable 30%+ contribution margins across all ride types
              </p>
            </div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="relative pl-8 border-l-4 border-accent">
          <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <Rocket className="h-5 w-5 text-accent-foreground" />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-2xl font-bold text-foreground">Phase 3: Grow</h3>
              <span className="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                9-18 months
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-5 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-foreground mb-2">Scalable Loyalty Ecosystem</h4>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>• Value-based rewards</li>
                  <li>• Tiered benefits</li>
                  <li>• Emotional connection</li>
                </ul>
              </div>
              <div className="p-5 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-foreground mb-2">Driver Engagement Suite</h4>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>• Navigation tools</li>
                  <li>• Earnings insights</li>
                  <li>• Loyalty program</li>
                </ul>
              </div>
              <div className="p-5 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-foreground mb-2">LTV-Driven Acquisition</h4>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>• Quality over volume</li>
                  <li>• Predictive targeting</li>
                  <li>• CAC:LTV optimization</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-positive/10 rounded border-l-4 border-positive">
              <p className="text-sm font-semibold text-foreground">
                ✓ Target: Return to profitable growth with healthy unit economics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSlide;
