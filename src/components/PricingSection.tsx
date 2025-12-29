import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Monthly",
    price: "2,500",
    duration: "/month",
    features: [
      "Full gym access",
      "All equipment usage",
      "Locker facility",
      "Basic fitness assessment",
    ],
    popular: false,
  },
  {
    name: "Quarterly",
    price: "6,500",
    duration: "/3 months",
    savings: "Save ₹1,000",
    features: [
      "Full gym access",
      "All equipment usage",
      "Locker facility",
      "Fitness assessment",
      "1 Personal training session",
      "Nutritional tips",
    ],
    popular: true,
  },
  {
    name: "Half Yearly",
    price: "12,000",
    duration: "/6 months",
    savings: "Save ₹3,000",
    features: [
      "Full gym access",
      "All equipment usage",
      "Locker facility",
      "Monthly fitness assessment",
      "2 Personal training sessions",
      "Diet consultation",
    ],
    popular: false,
  },
  {
    name: "Yearly",
    price: "20,000",
    duration: "/year",
    savings: "Save ₹10,000",
    features: [
      "Full gym access",
      "All equipment usage",
      "Locker facility",
      "Monthly fitness assessment",
      "4 Personal training sessions",
      "Complete diet plan",
      "Priority support",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Membership Plans
          </span>
          <h2 className="heading-lg text-foreground mt-2 mb-4">
            Choose Your <span className="text-gradient-gold">Perfect Plan</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Flexible membership options to suit your fitness goals and budget. 
            Start your transformation journey today.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card border rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-primary shadow-gold"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-display text-foreground tracking-wide text-center mt-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-center my-6">
                <span className="text-4xl font-display text-primary">₹{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.duration}</span>
                {plan.savings && (
                  <p className="text-green-500 text-sm font-semibold mt-1">
                    {plan.savings}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
                asChild
              >
                <a href="tel:07947126210">Get Started</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          All plans include access to both training floors. Personal training packages available separately.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
