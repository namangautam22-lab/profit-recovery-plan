import { ArrowRight } from "lucide-react";

const ProfitBridgeSlide = () => {
  return (
    <div className="bg-card rounded-lg p-12 shadow-medium min-h-[600px]">
      <h2 className="text-4xl font-bold text-foreground mb-8">
        Profit Bridge (Q0 → Q1)
      </h2>

      <div className="space-y-8">
        {/* Visual Bridge */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 bg-positive/20 border-2 border-positive rounded-lg p-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">Q0 Contribution/Trip</p>
            <p className="text-4xl font-bold text-positive">₹50</p>
          </div>
          
          <ArrowRight className="h-12 w-12 text-muted-foreground flex-shrink-0" />
          
          <div className="flex-1 bg-negative/20 border-2 border-negative rounded-lg p-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">Q1 Contribution/Trip</p>
            <p className="text-4xl font-bold text-negative">₹15</p>
          </div>
        </div>

        <div className="text-center py-4">
          <p className="text-2xl font-bold text-negative">70% Margin Erosion</p>
          <p className="text-muted-foreground mt-2">Despite +5% increase in trips, profit dropped 30%</p>
        </div>

        {/* Breakdown */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-4">Revenue Side</h3>
            
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-foreground/80">Trips</span>
                <span className="font-semibold text-positive">↑ 10M → 10.5M</span>
              </div>
              <p className="text-sm text-muted-foreground">+5% growth</p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-foreground/80">Net Fare</span>
                <span className="font-semibold text-negative">↓ Due to discounts</span>
              </div>
              <p className="text-sm text-muted-foreground">Heavy promo impact</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-4">Cost Side</h3>
            
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-foreground/80">Discounts</span>
                <span className="font-semibold text-negative">↑↑ Doubled</span>
              </div>
              <p className="text-sm text-muted-foreground">₹20 → ₹40 per trip</p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-foreground/80">Driver Incentives</span>
                <span className="font-semibold text-negative">↑ Increased</span>
              </div>
              <p className="text-sm text-muted-foreground">₹120 → ₹130 per trip</p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-foreground/80">Fixed Costs</span>
                <span className="font-semibold text-neutral">→ Stable</span>
              </div>
              <p className="text-sm text-muted-foreground">Negligible change</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-6 bg-gradient-to-r from-negative/10 to-negative/5 rounded-lg border-l-4 border-negative">
          <h4 className="font-semibold text-foreground mb-2">Key Insight</h4>
          <p className="text-foreground/80">
            Even with higher trips, profit dropped 30% due to severe margin collapse. 
            The variable costs per trip increased dramatically while revenue per trip declined.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfitBridgeSlide;
