import { Users, TrendingDown, AlertTriangle } from "lucide-react";

const RiderBehaviorSlide = () => {
  return (
    <div className="bg-card rounded-lg p-12 shadow-medium min-h-[600px]">
      <h2 className="text-4xl font-bold text-foreground mb-8">
        Rider Behavior RCA
      </h2>

      <div className="space-y-6">
        {/* Key Findings Header */}
        <div className="bg-gradient-primary p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <Users className="h-6 w-6 text-primary-foreground" />
            <h3 className="text-2xl font-semibold text-primary-foreground">Key Findings</h3>
          </div>
        </div>

        {/* Main Issues */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-5 bg-negative/10 border-l-4 border-negative rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                <TrendingDown className="h-5 w-5 text-negative mt-1" />
                <h4 className="text-lg font-semibold text-foreground">Discount-Only Riders Surged</h4>
              </div>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• Massive influx of promo-dependent users</li>
                <li>• Low organic ride intent</li>
                <li>• High churn after promo expiry</li>
              </ul>
            </div>

            <div className="p-5 bg-negative/10 border-l-4 border-negative rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                <TrendingDown className="h-5 w-5 text-negative mt-1" />
                <h4 className="text-lg font-semibold text-foreground">Poor Retention</h4>
              </div>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• Newly acquired users: 25-30% retention drop</li>
                <li>• Trips per rider per month declined</li>
                <li>• Lower revenue quality</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-5 bg-negative/10 border-l-4 border-negative rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="h-5 w-5 text-negative mt-1" />
                <h4 className="text-lg font-semibold text-foreground">Poor Pool Experience</h4>
              </div>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• Longer detours causing frustration</li>
                <li>• High ETA variability</li>
                <li>• Increased cancellation pain</li>
              </ul>
            </div>

            <div className="p-5 bg-negative/10 border-l-4 border-negative rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="h-5 w-5 text-negative mt-1" />
                <h4 className="text-lg font-semibold text-foreground">Support Ticket Spikes</h4>
              </div>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• "Driver cancelled" complaints</li>
                <li>• "Route mismatch" issues</li>
                <li>• "Promo not applied" disputes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/30">
          <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-primary">▶</span>
            Conclusion
          </h4>
          <p className="text-lg text-foreground/90 leading-relaxed">
            Promo-first users → poor retention → poor frequency → lower revenue quality
          </p>
        </div>

        {/* Data Visualization */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-muted rounded-lg text-center">
            <p className="text-3xl font-bold text-negative mb-2">-30%</p>
            <p className="text-sm text-muted-foreground">Retention Drop</p>
          </div>
          <div className="p-4 bg-muted rounded-lg text-center">
            <p className="text-3xl font-bold text-negative mb-2">-25%</p>
            <p className="text-sm text-muted-foreground">Trips per Rider</p>
          </div>
          <div className="p-4 bg-muted rounded-lg text-center">
            <p className="text-3xl font-bold text-negative mb-2">+60%</p>
            <p className="text-sm text-muted-foreground">Support Tickets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderBehaviorSlide;
