import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const AssumptionsSlide = () => {
  const assumptions = [
    { label: "Total trips", change: "+5%", type: "positive", icon: TrendingUp },
    { label: "Pool rides", change: "+25%", type: "positive", icon: TrendingUp },
    { label: "Regular rides", change: "-10%", type: "negative", icon: TrendingDown },
    { label: "Avg promo cost per trip", change: "₹20 → ₹40", type: "negative", icon: TrendingUp },
    { label: "Avg driver payout", change: "₹120 → ₹130", type: "negative", icon: TrendingUp },
    { label: "Fixed costs", change: "Stable", type: "neutral", icon: Minus },
  ];

  return (
    <div className="bg-card rounded-lg p-12 shadow-medium min-h-[600px]">
      <h2 className="text-4xl font-bold text-foreground mb-8">
        Key Assumptions Used for RCA
      </h2>
      <p className="text-lg text-muted-foreground mb-8">
        Data Simulation (Quarter-over-Quarter)
      </p>

      <div className="grid grid-cols-2 gap-6">
        {assumptions.map((item, index) => {
          const Icon = item.icon;
          const colorClass =
            item.type === "positive"
              ? "border-positive bg-positive/5"
              : item.type === "negative"
              ? "border-negative bg-negative/5"
              : "border-neutral bg-neutral/5";
          
          const iconColorClass =
            item.type === "positive"
              ? "text-positive"
              : item.type === "negative"
              ? "text-negative"
              : "text-neutral";

          return (
            <div
              key={index}
              className={`p-6 rounded-lg border-l-4 ${colorClass} transition-all hover:shadow-md`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                  <p className="text-2xl font-bold text-foreground">{item.change}</p>
                </div>
                <Icon className={`h-8 w-8 ${iconColorClass}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">
        <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
          <h3 className="text-lg font-semibold text-foreground mb-2">Geographic Impact</h3>
          <p className="text-foreground/80">
            80% of profit dip concentrated in Delhi + Bangalore
          </p>
        </div>
        <div className="p-6 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg border border-secondary/20">
          <h3 className="text-lg font-semibold text-foreground mb-2">Time Period</h3>
          <p className="text-foreground/80">
            Q0 (Baseline) → Q1 (Current Quarter)
          </p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-muted rounded-lg">
        <p className="text-sm text-foreground/70">
          <span className="font-semibold">Note:</span> These assumptions are based on available data patterns 
          and will be validated through detailed segment analysis in subsequent slides.
        </p>
      </div>
    </div>
  );
};

export default AssumptionsSlide;
