import { CheckCircle } from "lucide-react";
import gymEquipment from "@/assets/gym-equipment-1.png";
import buildingImg from "@/assets/fitpro-building.png";

const features = [
  "Well-maintained, modern equipment",
  "Dedicated & certified trainers",
  "Friendly and motivating atmosphere",
  "Two-floor setup for complete training",
  "Convenient location in Eranhipalam",
  "Wheelchair accessible entrance & exit",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={buildingImg}
                  alt="FITPRO Building"
                  className="w-full h-48 md:h-64 object-cover rounded-lg shadow-card"
                />
              </div>
              <div className="pt-8">
                <img
                  src={gymEquipment}
                  alt="Gym Equipment"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-card"
                />
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg px-6 py-4 shadow-lg">
              <div className="text-center">
                <span className="text-3xl font-display text-primary">2</span>
                <p className="text-sm text-muted-foreground">Training Floors</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="heading-lg text-foreground mt-2 mb-6">
              Your Fitness Journey{" "}
              <span className="text-gradient-gold">Starts Here</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              FITPRO FITNESS CLUB is a health and wellness center in Kozhikode, Kerala, 
              providing personalized training, nutritional guidance, and diverse fitness 
              programs in a supportive and motivating environment.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our two-floor facility features a dedicated strength and training floor 
              alongside a functional and cardio floor, equipped with modern machines 
              to help you achieve your fitness goals.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
