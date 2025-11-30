import { UserCircle, DollarSign, Navigation, AlertTriangle } from "lucide-react";

const DriverSideSlide = () => {
  return (
    <div className="bg-card rounded-lg p-12 shadow-medium min-h-[600px]">
      <h2 className="text-4xl font-bold text-foreground mb-8">
        Driver-Side RCA
      </h2>

      <div className="space-y-6">
        {/* Key Findings Header */}
        <div className="bg-gradient-primary p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <UserCircle className="h-6 w-6 text-primary-foreground" />
            <h3 className="text-2xl font-semibold text-primary-foreground">Key Findings</h3>
          </div>
        </div>

        {/* Main Issues Grid */}
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-negative/10 border-l-4 border-negative rounded-lg">
            <div className="flex items-start gap-3 mb-4">
              <DollarSign className="h-5 w-5 text-negative mt-1" />
              <h4 className="text-lg font-semibold text-foreground">Inflated Payouts</h4>
            </div>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-negative mt-1">•</span>
                <span>Peak-hour guarantees inflated driver payouts significantly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-negative mt-1">•</span>
                <span>Incentives not linked to fare collection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-negative mt-1">•</span>
                <span>Margin distortion, especially on Pool rides</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-card rounded border border-negative/30">
              <p className="text-xs font-semibold text-foreground">Impact: ₹120 → ₹130 per trip (+8%)</p>
            </div>
          </div>

          <div className="p-6 bg-negative/10 border-l-4 border-negative rounded-lg">
            <div className="flex items-start gap-3 mb-4">
              <Navigation className="h-5 w-5 text-negative mt-1" />
              <h4 className="text-lg font-semibold text-foreground">Poor Utilization</h4>
            </div>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-negative mt-1">•</span>
                <span>Lower driver availability during off-peak hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-negative mt-1">•</span>
                <span>High ETAs leading to user churn</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-negative mt-1">•</span>
                <span>Inefficient supply distribution across cities</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-card rounded border border-negative/30">
              <p className="text-xs font-semibold text-foreground">Result: 15-20% increase in average ETAs</p>
            </div>
          </div>

          <div className="p-6 bg-negative/10 border-l-4 border-negative rounded-lg col-span-2">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-negative mt-1" />
              <h4 className="text-lg font-semibold text-foreground">High Cancellation Rates</h4>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-foreground/70 mb-2">Inefficient Pool Routing</p>
                <p className="text-foreground/90">Multiple pickups causing delays and driver frustration</p>
              </div>
              <div>
                <p className="text-sm text-foreground/70 mb-2">Long Pick-ups</p>
                <p className="text-foreground/90">Drivers rejecting rides with distant pickup locations</p>
              </div>
              <div>
                <p className="text-sm text-foreground/70 mb-2">Poor Utilization</p>
                <p className="text-foreground/90">Low earnings per hour despite high online time</p>
              </div>
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
            Driver incentive structure broke unit economics for Pool rides especially. 
            Misaligned incentives combined with poor routing led to margin collapse.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 bg-muted rounded-lg text-center">
            <p className="text-3xl font-bold text-negative mb-2">+8%</p>
            <p className="text-sm text-muted-foreground">Driver Payout Increase</p>
          </div>
          <div className="p-4 bg-muted rounded-lg text-center">
            <p className="text-3xl font-bold text-negative mb-2">+35%</p>
            <p className="text-sm text-muted-foreground">Cancellation Rate</p>
          </div>
          <div className="p-4 bg-muted rounded-lg text-center">
            <p className="text-3xl font-bold text-negative mb-2">-20%</p>
            <p className="text-sm text-muted-foreground">Off-Peak Availability</p>
          </div>
          <div className="p-4 bg-muted rounded-lg text-center">
            <p className="text-3xl font-bold text-negative mb-2">+18%</p>
            <p className="text-sm text-muted-foreground">Average ETA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverSideSlide;
