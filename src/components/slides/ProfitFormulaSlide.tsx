import { Calculator } from "lucide-react";

const ProfitFormulaSlide = () => {
  return (
    <div className="bg-card rounded-lg p-12 shadow-medium min-h-[600px]">
      <h2 className="text-4xl font-bold text-foreground mb-8">
        Profit Formula (Correct & Expanded)
      </h2>

      <div className="space-y-8">
        <div className="bg-gradient-primary p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="h-6 w-6 text-primary-foreground" />
            <h3 className="text-2xl font-bold text-primary-foreground">Correct Profit Formula</h3>
          </div>
          <p className="text-3xl font-bold text-center text-primary-foreground">
            Profit = Revenue – Variable Costs – Fixed Costs
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-muted p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-primary mb-3">Revenue</h4>
            <p className="text-foreground/80 mb-3">
              = Total Trips × Net Fare
            </p>
            <p className="text-sm text-muted-foreground">
              (after discounts & taxes)
            </p>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-secondary mb-3">Variable Costs</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Driver payout</li>
              <li>• Discounts & promo subsidies</li>
              <li>• Referral payouts</li>
              <li>• Payment gateway charges</li>
              <li>• Customer support cost/trip</li>
              <li>• Insurance & safety fund</li>
              <li>• Fuel reimbursement</li>
              <li>• Incentive overlays</li>
            </ul>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-accent mb-3">Fixed Costs</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Employee salaries</li>
              <li>• Infra & cloud costs</li>
              <li>• Marketing overhead</li>
              <li>• Office & compliance</li>
              <li>• Tech/engineering amortized cost</li>
            </ul>
          </div>
        </div>

        <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-foreground mb-3">
            Per-Trip Contribution Margin
          </h4>
          <p className="text-foreground/80 mb-2">
            Contribution / Trip = Net Fare – (Driver payout + Discounts + Incentives + Other variable costs)
          </p>
          <div className="mt-4 p-4 bg-card rounded border border-accent">
            <p className="font-semibold text-foreground">Why this matters:</p>
            <p className="text-sm text-foreground/80 mt-2">
              A 30% profit drop is mathematically possible only by: collapse in contribution/trip, 
              significant shift to loss-making ride types, lower trip volumes, excessive variable costs, 
              or a mix of the above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitFormulaSlide;
