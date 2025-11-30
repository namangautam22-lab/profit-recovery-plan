import { Tag, Gift, AlertCircle } from "lucide-react";

const PromoRCASlide = () => {
  return (
    <div className="bg-card rounded-lg p-12 shadow-medium min-h-[600px]">
      <h2 className="text-4xl font-bold text-foreground mb-8">
        Promo, Pricing & Referral RCA
      </h2>

      <div className="space-y-6">
        {/* Promo Misalignment */}
        <div className="p-6 bg-negative/10 border-l-4 border-negative rounded-lg">
          <div className="flex items-start gap-3 mb-4">
            <Tag className="h-6 w-6 text-negative" />
            <h3 className="text-xl font-semibold text-foreground">Promo Misalignment</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Issue</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• "50% off 5 Pool rides" → massive burn</li>
                <li>• Promos applied to already thin-margin rides</li>
                <li>• No minimum contribution threshold</li>
                <li>• Blanket discounts across all segments</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Impact</h4>
              <div className="p-4 bg-card rounded border border-negative">
                <p className="text-2xl font-bold text-negative mb-1">₹20 → ₹40</p>
                <p className="text-xs text-muted-foreground">Avg promo cost per trip</p>
                <p className="text-sm text-foreground/80 mt-3">100% increase in promo burn</p>
              </div>
            </div>
          </div>
        </div>

        {/* Referral Issues */}
        <div className="p-6 bg-negative/10 border-l-4 border-negative rounded-lg">
          <div className="flex items-start gap-3 mb-4">
            <Gift className="h-6 w-6 text-negative" />
            <h3 className="text-xl font-semibold text-foreground">Referral Issues</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Fraud Indicators</h4>
              <div className="space-y-3">
                <div className="p-3 bg-card rounded">
                  <p className="text-sm font-medium text-foreground">Same Device, Different Accounts</p>
                  <p className="text-xs text-muted-foreground mt-1">Multiple accounts from single device</p>
                </div>
                <div className="p-3 bg-card rounded">
                  <p className="text-sm font-medium text-foreground">OTP Farming</p>
                  <p className="text-xs text-muted-foreground mt-1">Automated account creation patterns</p>
                </div>
                <div className="p-3 bg-card rounded">
                  <p className="text-sm font-medium text-foreground">Promo-Only Rides</p>
                  <p className="text-xs text-muted-foreground mt-1">Zero full-fare ride history</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">System Weakness</h4>
              <div className="p-4 bg-card rounded border-2 border-negative">
                <p className="text-lg font-semibold text-foreground mb-2">₹100 per referral</p>
                <p className="text-sm text-foreground/80 mb-4">High abuse risk with no validation</p>
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-negative font-semibold">30-40% suspected fraudulent referrals</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loyalty Program */}
        <div className="p-6 bg-negative/10 border-l-4 border-negative rounded-lg">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="h-6 w-6 text-negative" />
            <h3 className="text-xl font-semibold text-foreground">Loyalty Program Issues</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-card rounded">
              <p className="text-sm text-muted-foreground mb-2">Burn Rate</p>
              <p className="text-2xl font-bold text-negative">↑ High</p>
              <p className="text-xs text-foreground/70 mt-2">Increasing costs with no ROI</p>
            </div>
            <div className="p-4 bg-card rounded">
              <p className="text-sm text-muted-foreground mb-2">30-Day Retention</p>
              <p className="text-2xl font-bold text-neutral">No Change</p>
              <p className="text-xs text-foreground/70 mt-2">Loyalty program not driving retention</p>
            </div>
            <div className="p-4 bg-card rounded">
              <p className="text-sm text-muted-foreground mb-2">Reward Structure</p>
              <p className="text-2xl font-bold text-negative">Broken</p>
              <p className="text-xs text-foreground/70 mt-2">Too discount-heavy, low engagement</p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-6 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/30">
          <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-primary">▶</span>
            Conclusion
          </h4>
          <p className="text-lg text-foreground/90 leading-relaxed">
            Incentive stack overloaded → negative contribution rides surged. High cost, low yield across 
            promos, referrals, and loyalty programs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoRCASlide;
