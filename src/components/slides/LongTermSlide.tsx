import { BarChart3, Cpu, Award, Users } from "lucide-react";

const LongTermSlide = () => {
  return (
    <div className="bg-card rounded-lg p-12 shadow-medium min-h-[600px]">
      <h2 className="text-4xl font-bold text-foreground mb-4">
        Long-Term Recommendations
      </h2>
      <p className="text-lg text-secondary mb-8">3-18 Months: Structural Health</p>

      <div className="space-y-6">
        {/* Recommendation 1 */}
        <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <BarChart3 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-3">1. Profitability Control Tower</h3>
              <p className="text-foreground/70 mb-4">Real-time monitoring dashboard for all key metrics</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-card rounded border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2">Monitor</h4>
                  <ul className="space-y-1 text-sm text-foreground/80">
                    <li>• Margin per trip</li>
                    <li>• Promo burn rate</li>
                    <li>• Driver incentive burn</li>
                    <li>• City × ride type profitability</li>
                  </ul>
                </div>
                <div className="p-4 bg-card rounded border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2">Alert System</h4>
                  <p className="text-sm text-foreground/80">
                    Auto-alerts when contribution falls below threshold. 
                    Automated circuit breakers for unsustainable promo campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendation 2 */}
        <div className="p-6 bg-gradient-to-r from-secondary/10 to-secondary/5 border-l-4 border-secondary rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <Cpu className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-3">2. Smart Promo Engine</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-card rounded">
                  <h4 className="text-sm font-semibold text-foreground mb-2">LTV-Based Discounting</h4>
                  <p className="text-xs text-foreground/70">
                    Personalized offers based on predicted lifetime value
                  </p>
                </div>
                <div className="p-4 bg-card rounded">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Experimentation Framework</h4>
                  <p className="text-xs text-foreground/70">
                    A/B testing for all promo campaigns with ROI tracking
                  </p>
                </div>
                <div className="p-4 bg-card rounded">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Guardrails</h4>
                  <p className="text-xs text-foreground/70">
                    Hard limits on contribution thresholds and burn rates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendation 3 */}
        <div className="p-6 bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <Award className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-3">3. Loyalty Redesign</h3>
              <p className="text-foreground/70 mb-4">Move from discount-based to value-based rewards</p>
              <div className="grid grid-cols-4 gap-3">
                <div className="p-3 bg-card rounded text-center border border-accent/20">
                  <p className="text-sm font-medium text-foreground">Priority Support</p>
                </div>
                <div className="p-3 bg-card rounded text-center border border-accent/20">
                  <p className="text-sm font-medium text-foreground">Reduced Fees</p>
                </div>
                <div className="p-3 bg-card rounded text-center border border-accent/20">
                  <p className="text-sm font-medium text-foreground">Earnable Upgrades</p>
                </div>
                <div className="p-3 bg-card rounded text-center border border-accent/20">
                  <p className="text-sm font-medium text-foreground">Capped Free Rides</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-accent/5 rounded">
                <p className="text-sm text-foreground/80">
                  <span className="font-semibold">Goal:</span> Reward behavior, not just transactions. 
                  Build emotional loyalty beyond discounts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendation 4 */}
        <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <Users className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-3">4. Driver Ecosystem Improvements</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="p-4 bg-card rounded border border-primary/20">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Navigation Tools</h4>
                    <p className="text-xs text-foreground/70">Optimal routing, traffic predictions, hotspot suggestions</p>
                  </div>
                  <div className="p-4 bg-card rounded border border-primary/20">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Utilization Insights</h4>
                    <p className="text-xs text-foreground/70">Real-time earnings dashboard, peak hour alerts</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-card rounded border border-primary/20">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Driver Loyalty Program</h4>
                    <p className="text-xs text-foreground/70">Tier-based benefits, consistent performer rewards</p>
                  </div>
                  <div className="p-4 bg-card rounded border border-primary/20">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Sustainable Incentives</h4>
                    <p className="text-xs text-foreground/70">Predictable yet fair incentive design linked to performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Impact */}
      <div className="mt-8 p-6 bg-gradient-to-r from-positive/10 to-positive/5 rounded-lg border-2 border-positive">
        <h4 className="text-lg font-semibold text-foreground mb-3">Strategic Impact</h4>
        <p className="text-foreground/90">
          These initiatives create sustainable competitive advantages: better margins, higher retention, 
          healthier driver ecosystem, and data-driven decision making.
        </p>
      </div>
    </div>
  );
};

export default LongTermSlide;
