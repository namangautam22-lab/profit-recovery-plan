import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TitleSlide from "@/components/slides/TitleSlide";
import ContextSlide from "@/components/slides/ContextSlide";
import ProfitFormulaSlide from "@/components/slides/ProfitFormulaSlide";
import FrameworkSlide from "@/components/slides/FrameworkSlide";
import AssumptionsSlide from "@/components/slides/AssumptionsSlide";
import ProfitBridgeSlide from "@/components/slides/ProfitBridgeSlide";
import SegmentRCASlide from "@/components/slides/SegmentRCASlide";
import RiderBehaviorSlide from "@/components/slides/RiderBehaviorSlide";
import DriverSideSlide from "@/components/slides/DriverSideSlide";
import PromoRCASlide from "@/components/slides/PromoRCASlide";
import RootCauseSlide from "@/components/slides/RootCauseSlide";
import ShortTermSlide from "@/components/slides/ShortTermSlide";
import LongTermSlide from "@/components/slides/LongTermSlide";
import RoadmapSlide from "@/components/slides/RoadmapSlide";
import SummarySlide from "@/components/slides/SummarySlide";
import QASlide from "@/components/slides/QASlide";

const slides = [
  { id: 1, component: TitleSlide },
  { id: 2, component: ContextSlide },
  { id: 3, component: ProfitFormulaSlide },
  { id: 4, component: FrameworkSlide },
  { id: 5, component: AssumptionsSlide },
  { id: 6, component: ProfitBridgeSlide },
  { id: 7, component: SegmentRCASlide },
  { id: 8, component: RiderBehaviorSlide },
  { id: 9, component: DriverSideSlide },
  { id: 10, component: PromoRCASlide },
  { id: 11, component: RootCauseSlide },
  { id: 12, component: ShortTermSlide },
  { id: 13, component: LongTermSlide },
  { id: 14, component: RoadmapSlide },
  { id: 15, component: SummarySlide },
  { id: 16, component: QASlide },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const SlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col">
      {/* Slide Container */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-7xl">
          <SlideComponent />
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-card border-t border-border shadow-subtle">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={previousSlide}
            disabled={currentSlide === 0}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="max-w-7xl mx-auto px-8 pb-4 text-center text-sm text-muted-foreground">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>
    </div>
  );
};

export default Index;
