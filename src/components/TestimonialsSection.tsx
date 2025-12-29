import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sreekanthan Kn",
    rating: 5,
    text: "Excellent and well maintained equipment, dedicated trainers, and a very convenient location. Highly recommend for anyone serious about fitness!",
  },
  {
    name: "Varsha",
    rating: 5,
    text: "Perfect for beginners. I achieved my ideal weight and strength with personal trainer guidance. Friendly environment and certified trainers make all the difference.",
  },
  {
    name: "Sri Ram",
    rating: 5,
    text: "More equipment, two floors – one for strength training and another for functional and cardio. Great variety and always clean!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="heading-lg text-foreground mt-2 mb-4">
            What Our <span className="text-gradient-gold">Members Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our members have to 
            say about their experience at FITPRO FITNESS CLUB.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Verified Member</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-primary text-primary" />
              <span className="font-bold text-primary">4.8</span>
            </div>
            <span className="text-muted-foreground">|</span>
            <span className="text-foreground/90">106 Reviews on Google</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
