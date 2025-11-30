import { MapPin, Car, Users } from "lucide-react";

const SegmentRCASlide = () => {
  return (
    <div className="bg-card rounded-lg p-12 shadow-medium min-h-[600px]">
      <h2 className="text-4xl font-bold text-foreground mb-8">
        Where the Dip Occurred (Segment RCA)
      </h2>

      <div className="space-y-8">
        {/* City Level */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">City-Level Analysis</h3>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-5 bg-gradient-to-br from-negative/20 to-negative/10 border-2 border-negative rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Bangalore</p>
              <p className="text-3xl font-bold text-negative">-45%</p>
              <p className="text-xs text-foreground/60 mt-2">Largest contributor</p>
            </div>
            <div className="p-5 bg-gradient-to-br from-negative/15 to-negative/5 border-2 border-negative/70 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Delhi</p>
              <p className="text-3xl font-bold text-negative">-35%</p>
              <p className="text-xs text-foreground/60 mt-2">Second highest</p>
            </div>
            <div className="p-5 bg-muted border border-border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Mumbai</p>
              <p className="text-3xl font-bold text-neutral">-2%</p>
              <p className="text-xs text-foreground/60 mt-2">Stable</p>
            </div>
            <div className="p-5 bg-muted border border-border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Kolkata</p>
              <p className="text-3xl font-bold text-neutral">+1%</p>
              <p className="text-xs text-foreground/60 mt-2">Stable</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
            <p className="text-sm font-semibold text-foreground">
              80% of profit decline concentrated in Bangalore & Delhi
            </p>
          </div>
        </div>

        {/* Ride Type */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Car className="h-6 w-6 text-secondary" />
            <h3 className="text-2xl font-semibold text-foreground">Ride-Type Analysis</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-6 bg-gradient-to-br from-negative/20 to-negative/10 border-2 border-negative rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Pool Rides</p>
              <p className="text-4xl font-bold text-negative mb-2">60%</p>
              <p className="text-sm text-foreground/70">of total profit dip</p>
              <div className="mt-3 pt-3 border-t border-negative/30">
                <p className="text-xs text-foreground/60">+25% volume growth but negative margins</p>
              </div>
            </div>
            <div className="p-6 bg-muted border border-border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Regular Rides</p>
              <p className="text-4xl font-bold text-neutral mb-2">-10%</p>
              <p className="text-sm text-foreground/70">demand decline</p>
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-xs text-foreground/60">Stable margins but lower volume</p>
              </div>
            </div>
            <div className="p-6 bg-muted border border-border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Premium Rides</p>
              <p className="text-4xl font-bold text-positive mb-2">Stable</p>
              <p className="text-sm text-foreground/70">minimal impact</p>
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-xs text-foreground/60">Maintained contribution</p>
              </div>
            </div>
          </div>
        </div>

        {/* User Level */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-6 w-6 text-accent" />
            <h3 className="text-2xl font-semibold text-foreground">User-Level Analysis</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-5 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-3">New Riders</p>
              <p className="text-foreground/80 text-sm">Acquired through heavy promos</p>
              <p className="mt-2 text-negative font-semibold">High promo-dependency</p>
            </div>
            <div className="p-5 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-3">Cohort Quality</p>
              <p className="text-foreground/80 text-sm">Low LTV cohorts dominate</p>
              <p className="mt-2 text-negative font-semibold">25-30% retention drop</p>
            </div>
            <div className="p-5 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-3">Ride Frequency</p>
              <p className="text-foreground/80 text-sm">Trips per rider per month</p>
              <p className="mt-2 text-negative font-semibold">Declined significantly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SegmentRCASlide;
