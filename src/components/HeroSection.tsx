import { Star, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import gymFloor from "@/assets/gym-floor.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={gymFloor}
          alt="FITPRO Gym Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border mb-8 animate-fade-in-up">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-primary text-primary" />
              <span className="text-primary font-bold">4.8</span>
            </div>
            <span className="text-muted-foreground">|</span>
            <span className="text-foreground/90">106 Google Reviews</span>
          </div>

          {/* Headline */}
          <h1 className="heading-xl text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Transform Your Body.{" "}
            <span className="text-gradient-gold">Transform Your Life.</span>
          </h1>

          {/* Sub-headline */}
          <p className="body-lg text-muted-foreground mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Experience personalized training with certified trainers in Kozhikode's premier fitness center. 
            Modern equipment, expert guidance, and a motivating atmosphere await you.
          </p>

          {/* Features List */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {["Personalized Training", "Certified Trainers", "Premium Equipment"].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-foreground/90"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a href="tel:07947126210">
              <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </a>
            <a href="#contact">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto gap-2">
                <Users className="h-5 w-5" />
                Get Your Own Trainer
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
