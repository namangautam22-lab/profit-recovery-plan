import { Target, TrendingDown, AlertTriangle } from "lucide-react";

const RootCauseSlide = () => {
  return (
    <div className="bg-card rounded-lg p-12 shadow-medium min-h-[600px]">
      <h2 className="text-4xl font-bold text-foreground mb-8">
        Root Cause Summary
      </h2>

      {/* Hero Statement */}
      <div className="bg-gradient-primary p-10 rounded-lg shadow-lg mb-8">
        <div className="flex items-start gap-4 mb-6">
          <Target className="h-10 w-10 text-primary-foreground flex-shrink-0" />
          <div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">Primary Root Cause</h3>
            <p className="text-2xl text-primary-foreground leading-relaxed">
              Severe distortion in unit economics due to aggressive promos + misaligned driver incentives + mix shift to Pool rides
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Secondary Drivers */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <TrendingDown className="h-6 w-6 text-secondary" />
            <h3 className="text-xl font-semibold text-foreground">Secondary Drivers</h3>
          </div>

          <div className="p-5 bg-secondary/10 border-l-4 border-secondary rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">Lower Cohort Quality</h4>
            <p className="text-sm text-foreground/80">
              Promo-dependent users with poor retention and low LTV
            </p>
          </div>

          <div className="p-5 bg-secondary/10 border-l-4 border-secondary rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">Higher ETAs & Cancellations</h4>
            <p className="text-sm text-foreground/80">
              Poor driver utilization leading to supply-demand mismatch
            </p>
          </div>

          <div className="p-5 bg-secondary/10 border-l-4 border-secondary rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">Poor Reactivation & Retention Loops</h4>
            <p className="text-sm text-foreground/80">
              No effective mechanisms to bring back churned users organically
            </p>
          </div>
        </div>

        {/* Net Effect */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-accent" />
            <h3 className="text-xl font-semibold text-foreground">Net Effect</h3>
          </div>

          <div className="p-8 bg-gradient-to-br from-negative/20 to-negative/10 border-2 border-negative rounded-lg">
            <p className="text-lg font-semibold text-foreground mb-6">Contribution per Trip Collapse</p>
            
            <div className="flex items-center justify-between mb-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Q0</p>
                <p className="text-4xl font-bold text-positive">₹50</p>
              </div>
              <div className="text-3xl text-negative">→</div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Q1</p>
                <p className="text-4xl font-bold text-negative">₹15</p>
              </div>
            </div>

            <div className="pt-6 border-t border-negative/30">
              <p className="text-center text-3xl font-bold text-negative mb-2">-70%</p>
              <p className="text-center text-sm text-foreground/80">Margin Erosion</p>
            </div>
          </div>

          <div className="mt-6 p-6 bg-muted rounded-lg">
            <h4 className="font-semibold text-foreground mb-3">Despite Higher Volume</h4>
            <div className="flex items-center justify-between text-center">
              <div>
                <p className="text-2xl font-bold text-positive">+5%</p>
                <p className="text-xs text-muted-foreground mt-1">Trip Growth</p>
              </div>
              <div className="text-xl text-foreground">+</div>
              <div>
                <p className="text-2xl font-bold text-negative">-70%</p>
                <p className="text-xs text-muted-foreground mt-1">Margin</p>
              </div>
              <div className="text-xl text-foreground">=</div>
              <div>
                <p className="text-2xl font-bold text-negative">-30%</p>
                <p className="text-xs text-muted-foreground mt-1">Profit Drop</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
        <p className="text-center text-lg font-medium text-foreground">
          The profit decline is fundamentally a <span className="text-primary font-bold">unit economics problem</span>, 
          not a volume problem. Fixing margins is the priority.
        </p>
      </div>
    </div>
  );
};

export default RootCauseSlide;
