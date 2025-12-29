import { Award, Smile, Cog, UserCheck, Accessibility } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Certified & Supportive Trainers",
    description: "Our trainers are certified professionals dedicated to your success.",
  },
  {
    icon: Smile,
    title: "Excellent Ambience",
    description: "A motivating atmosphere that makes you want to come back every day.",
  },
  {
    icon: Cog,
    title: "Modern Machines & Equipment",
    description: "State-of-the-art equipment maintained to the highest standards.",
  },
  {
    icon: UserCheck,
    title: "For All Fitness Levels",
    description: "Whether you're a beginner or advanced, we have programs for you.",
  },
  {
    icon: Accessibility,
    title: "Wheelchair Accessible",
    description: "Accessible entrance and exit for all members.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="heading-lg text-foreground mt-2 mb-6">
              Why <span className="text-gradient-gold">FITPRO</span> Stands Out
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With over 100+ five-star reviews, FITPRO FITNESS CLUB has become 
              Kozhikode's trusted destination for fitness transformation. Here's 
              what sets us apart.
            </p>

            {/* Reasons List */}
            <div className="space-y-4">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <span className="text-5xl md:text-6xl font-display text-primary">4.8</span>
                  <p className="text-muted-foreground mt-2">Star Rating</p>
                </div>
                <div className="text-center">
                  <span className="text-5xl md:text-6xl font-display text-primary">106+</span>
                  <p className="text-muted-foreground mt-2">Reviews</p>
                </div>
                <div className="text-center">
                  <span className="text-5xl md:text-6xl font-display text-primary">2</span>
                  <p className="text-muted-foreground mt-2">Training Floors</p>
                </div>
                <div className="text-center">
                  <span className="text-5xl md:text-6xl font-display text-primary">7</span>
                  <p className="text-muted-foreground mt-2">Days Open</p>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-primary/20 rounded-2xl blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
