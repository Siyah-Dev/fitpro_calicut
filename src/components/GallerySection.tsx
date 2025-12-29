import { useState } from "react";
import { X } from "lucide-react";
import gymFunctional from "@/assets/gym-functional.png";
import gymEquipment1 from "@/assets/gym-equipment-1.png";
import gymEquipment2 from "@/assets/gym-equipment-2.png";
import gymCardio from "@/assets/gym-cardio.png";
import gymMachines from "@/assets/gym-machines.png";
import gymFloor from "@/assets/gym-floor.png";

const galleryImages = [
  { src: gymFloor, alt: "FITPRO Training Floor" },
  { src: gymEquipment1, alt: "Strength Equipment" },
  { src: gymFunctional, alt: "Functional Training Area" },
  { src: gymMachines, alt: "Weight Machines" },
  { src: gymCardio, alt: "Cardio Zone" },
  { src: gymEquipment2, alt: "Modern Gym Equipment" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="heading-lg text-foreground mt-2 mb-4">
            Take a <span className="text-gradient-gold">Virtual Tour</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our state-of-the-art facility with modern equipment 
            and motivating atmosphere.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-64 md:h-96" : "h-32 md:h-48"
                }`}
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-foreground font-medium">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery Image"
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
