import { Clock } from "lucide-react";

const WorkingHoursSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Opening Hours
            </span>
            <h2 className="heading-lg text-foreground mt-2">
              We're Here <span className="text-gradient-gold">For You</span>
            </h2>
          </div>

          {/* Hours Card */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Clock className="h-8 w-8 text-primary" />
            </div>

            <h3 className="text-2xl font-display text-foreground mb-2 tracking-wide">
              Monday – Sunday
            </h3>
            <p className="text-4xl md:text-5xl font-display text-primary mb-4">
              6:00 AM – 9:30 PM
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open All 7 Days
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingHoursSection;
