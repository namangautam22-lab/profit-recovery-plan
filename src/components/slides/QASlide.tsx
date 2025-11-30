import { MessageCircle } from "lucide-react";

const QASlide = () => {
  return (
    <div className="bg-gradient-primary rounded-lg p-16 shadow-medium min-h-[600px] flex flex-col items-center justify-center text-center">
      <MessageCircle className="h-24 w-24 text-primary-foreground mb-8 opacity-90" />
      <h1 className="text-6xl font-bold text-primary-foreground mb-6">
        Q&A
      </h1>
      <div className="h-1 w-32 bg-secondary mb-8"></div>
      <p className="text-2xl text-primary-foreground/90 max-w-2xl leading-relaxed">
        Open for questions and discussion
      </p>
      <div className="mt-12 text-primary-foreground/70 text-lg">
        <p>Prepared by Naman Gautam</p>
        <p className="text-sm mt-2">Product Manager (Data-Driven)</p>
      </div>
    </div>
  );
};

export default QASlide;
