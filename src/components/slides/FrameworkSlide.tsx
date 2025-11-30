import { CheckCircle2 } from "lucide-react";

const FrameworkSlide = () => {
  const steps = [
    {
      number: "1",
      title: "Validate the Profit Dip",
      description: "QoQ, YoY, seasonality, festive impact. Compare GMV vs Profit vs Trips vs CAC trends",
    },
    {
      number: "2",
      title: "Segment the Business",
      description: "City × Ride Type × User Type. Cluster profitability pockets vs loss pockets",
    },
    {
      number: "3",
      title: "Build a Profit Bridge",
      description: "Impact of ΔTrips, ΔAvg Fare, ΔDiscounts, ΔDriver Payout, ΔVariable Cost, ΔFixed Cost",
    },
    {
      number: "4",
      title: "Rider-Side Deep Dive",
      description: "MAU/WAU, Trips per rider, User cohorts, NPS, cancellations, app issues, promo dependency",
    },
    {
      number: "5",
      title: "Driver-Side Analysis",
      description: "Driver supply, Online hours, Utilization, Incentive costs, Cancellation & acceptance patterns",
    },
    {
      number: "6",
      title: "Promo, Pricing & Referral RCA",
      description: "Discount burn per city/segment, Cohort LTV vs CAC, Referral abuse patterns, Loyalty burn vs repeat impact",
    },
    {
      number: "7",
      title: "Operational & Experience Metrics",
      description: "ETAs, cancellations, reassignments, Support tickets, Payment failures, app reliability",
    },
  ];

  return (
    <div className="bg-card rounded-lg p-12 shadow-medium min-h-[600px]">
      <h2 className="text-4xl font-bold text-foreground mb-8">
        Analytical Framework / 7-Step RCA Process
      </h2>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex gap-4 p-5 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20 hover:border-primary/40 transition-all"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
              {step.number}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-foreground/70 text-sm">{step.description}</p>
            </div>
            <CheckCircle2 className="h-5 w-5 text-positive flex-shrink-0 mt-1" />
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
        <p className="text-foreground font-medium">
          This systematic approach ensures we identify the root cause with data-backed evidence
          and avoid symptom-level fixes.
        </p>
      </div>
    </div>
  );
};

export default FrameworkSlide;
