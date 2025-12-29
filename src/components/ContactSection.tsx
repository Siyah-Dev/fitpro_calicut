import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="heading-lg text-foreground mt-2 mb-4">
            Start Your <span className="text-gradient-gold">Fitness Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to transform your life? Visit us today or give us a call. 
            We're here to help you achieve your fitness goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">
                  Eranhipalam, Kozhikode, Kerala
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a
                  href="tel:07947126210"
                  className="text-primary hover:underline"
                >
                  079 4712 6210
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                <p className="text-muted-foreground">
                  Mon - Sun: 6:00 AM – 9:30 PM
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="tel:07947126210" className="flex-1">
                <Button variant="hero" size="xl" className="w-full gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </a>
              <a
                href="https://maps.google.com/?q=FITPRO+FITNESS+CLUB+Eranhipalam+Kozhikode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="heroOutline" size="xl" className="w-full gap-2">
                  <MapPin className="h-5 w-5" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card border border-border rounded-xl overflow-hidden h-80 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.117067899599!2d75.78447067575635!3d11.262840188930595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bf5c8cfffff%3A0x8af0f46c6c8a3f0a!2sEranhipalam%2C%20Kozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1703851234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FITPRO FITNESS CLUB Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
