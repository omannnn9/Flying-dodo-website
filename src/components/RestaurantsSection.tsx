import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone } from "lucide-react";

export function RestaurantsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="restaurants" className="section-spacing texture-paper relative" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-caption text-primary mb-3 block">Where To Find Us</span>
          <h2 className="text-headline mb-4">Restaurants</h2>
        </motion.div>

        {/* Two column layout: Info + Map */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Restaurant Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-artisan p-6 md:p-8"
            style={{ transform: "rotate(-0.3deg)" }}
          >
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-6">
                Flying Dodo Brewpub
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p>1, Mall of Mauritius Bagatelle</p>
                    <p className="text-sm">Reduit 80832, Moka</p>
                    <p className="text-sm">Republic of Mauritius</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:+2304688810" className="hover:text-foreground transition-colors">
                    +(230) 468 8810
                  </a>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Open daily for lunch and dinner</span>
                </div>
              </div>

              <div className="divider-hand mx-auto lg:mx-0 my-6" />

              <p className="text-body text-foreground/80 mb-6">
                Experience our beers fresh from the tanks, paired with delicious food 
                in a casual, authentic atmosphere.
              </p>

              {/* TripAdvisor badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-sm">
                <span className="text-sm text-muted-foreground">★★★★☆</span>
                <span className="text-xs text-muted-foreground">4.0 on TripAdvisor</span>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-sm overflow-hidden shadow-lg img-worn h-[350px] lg:h-[400px]"
            style={{ transform: "rotate(0.3deg)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.425!2d57.4933!3d-20.2358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5af8d4a5d5d7%3A0x9e7c5e8a8e8e8e8e!2sFlying%20Dodo%20Brewing%20Company!5e0!3m2!1sen!2smu!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Flying Dodo Brewery Location - Bagatelle Mall, Mauritius"
              className="grayscale-[20%] contrast-[1.05]"
            />
          </motion.div>
        </div>

        {/* Handwritten note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-handwritten text-center text-primary/70 mt-10"
          style={{ transform: "rotate(1deg)" }}
        >
          Come taste what we've been brewing! 🍻
        </motion.p>
      </div>
    </section>
  );
}
