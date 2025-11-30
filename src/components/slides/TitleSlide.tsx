const TitleSlide = () => {
  return (
    <div className="bg-gradient-primary rounded-lg p-16 shadow-medium min-h-[600px] flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-primary-foreground mb-6">
        Ride-Hailing Startup
      </h1>
      <div className="h-1 w-32 bg-secondary mb-8"></div>
      <h2 className="text-3xl font-semibold text-primary-foreground mb-4">
        30% Profit Dip
      </h2>
      <h3 className="text-2xl text-primary-foreground/90 mb-12">
        Root Cause Analysis & Product Recommendations
      </h3>
      <div className="mt-8 text-primary-foreground/80 text-lg">
        <p className="font-medium">Prepared by Naman Gautam</p>
        <p className="text-sm mt-2">Product Manager (Data-Driven)</p>
      </div>
    </div>
  );
};

export default TitleSlide;
