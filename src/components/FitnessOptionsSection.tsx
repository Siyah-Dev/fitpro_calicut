import gymFunctional from "@/assets/gym-functional.png";
import gymCardio from "@/assets/gym-cardio.png";
import gymMachines from "@/assets/gym-machines.png";

const fitnessOptions = [
  {
    title: "Gym Training",
    description: "Full access to state-of-the-art equipment for complete body workouts.",
    image: gymMachines,
  },
  {
    title: "CrossFit",
    description: "High-intensity functional training to build strength and endurance.",
    image: gymFunctional,
  },
  {
    title: "Cardio Training",
    description: "Modern cardio equipment and programs for heart health and weight loss.",
    image: gymCardio,
  },
];

const FitnessOptionsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Training Programs
          </span>
          <h2 className="heading-lg text-foreground mt-2 mb-4">
            Choose Your <span className="text-gradient-gold">Fitness Path</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're into traditional gym training, CrossFit challenges, 
            or cardio sessions, we have the perfect program for you.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {fitnessOptions.map((option) => (
            <div
              key={option.title}
              className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer"
            >
              {/* Image */}
              <img
                src={option.image}
                alt={option.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-display text-foreground mb-2 tracking-wide">
                  {option.title}
                </h3>
                <p className="text-foreground/80 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {option.description}
                </p>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent rounded-xl transition-colors duration-300 group-hover:border-primary/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FitnessOptionsSection;
