import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Instagram, Facebook, X } from "lucide-react";

// Import all 10 Bagatelle images
import bagatelle1 from "@/assets/bagatelle/bagatelle-1.jpg";
import bagatelle2 from "@/assets/bagatelle/bagatelle-2.jpg";
import bagatelle3 from "@/assets/bagatelle/bagatelle-3.jpg";
import bagatelle4 from "@/assets/bagatelle/bagatelle-4.jpg";
import bagatelle5 from "@/assets/bagatelle/bagatelle-5.jpg";
import bagatelle8 from "@/assets/bagatelle/bagatelle-8.jpg";
import conference1 from "@/assets/bagatelle/conference-1.jpg";
import conference2 from "@/assets/bagatelle/conference-2.jpg";
import conference3 from "@/assets/bagatelle/conference-3.jpg";
import conference4 from "@/assets/bagatelle/conference-4.jpg";

const bagatellePictures = [
  { src: bagatelle1, alt: "Flying Dodo Brewery Bagatelle - Exterior view" },
  { src: bagatelle2, alt: "Flying Dodo Brewery Bagatelle - Interior" },
  { src: bagatelle3, alt: "Flying Dodo Brewery Bagatelle - Brewing equipment" },
  { src: bagatelle4, alt: "Flying Dodo Brewery Bagatelle - Bar area" },
  { src: conference1, alt: "Flying Dodo Conference Room - Setup 1" },
  { src: conference2, alt: "Flying Dodo Conference Room - Setup 2" },
  { src: conference3, alt: "Flying Dodo Conference Room - Setup 3" },
  { src: conference4, alt: "Flying Dodo Conference Room - Setup 4" },
  { src: bagatelle5, alt: "Flying Dodo Brewery Bagatelle - Craft beer taps" },
  { src: bagatelle8, alt: "Flying Dodo Brewery Bagatelle - Seating area" },
];

export function PicturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="pictures" className="section-spacing texture-paper relative" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-caption text-primary mb-3 block">Behind The Scenes</span>
          <h2 className="text-headline mb-4">Pictures</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse inside our Bagatelle brewery and taproom
          </p>
        </motion.div>

        {/* Video embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="aspect-video rounded-sm overflow-hidden shadow-lg img-worn">
            <iframe
              src="https://www.youtube.com/embed/UbVmjgm5qd4"
              title="Flying Dodo Brewery with Lena"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Flying Dodo Brewery with Lena
          </p>
        </motion.div>

        {/* Photo grid - 10 Bagatelle images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {bagatellePictures.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              className="aspect-square overflow-hidden rounded-sm img-worn cursor-pointer group"
              style={{ transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <span className="text-sm text-muted-foreground">Follow us:</span>
          <a
            href="https://www.instagram.com/flyingdodobrewery"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/flyingdodo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
