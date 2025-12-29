import { PersonStanding, Dumbbell, Users, Apple } from "lucide-react";

const services = [
  {
    icon: PersonStanding,
    title: "Weight Management",
    description:
      "Customized programs to help you achieve and maintain your ideal weight through balanced training and nutrition.",
  },
  {
    icon: Dumbbell,
    title: "Strengthening Exercises",
    description:
      "Build muscle, increase power, and improve overall strength with our comprehensive resistance training programs.",
  },
  {
    icon: Users,
    title: "Personal Training",
    description:
      "Get your own dedicated trainer for personalized guidance, accountability, and faster results.",
  },
  {
    icon: Apple,
    title: "Nutritional Guidance",
    description:
      "Expert advice on diet and nutrition to complement your training and maximize your fitness outcomes.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="heading-lg text-foreground mt-2 mb-4">
            Comprehensive <span className="text-gradient-gold">Fitness Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From personalized training to nutritional guidance, we offer everything 
            you need to transform your health and fitness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-gold hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-display text-foreground mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
