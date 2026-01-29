import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import beerImage from "@/assets/beer-pour.jpg";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-spacing bg-secondary texture-paper relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
          <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
        </svg>
      </div>

      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-caption text-muted-foreground mb-4">About Us</p>
            <h2 className="text-headline mb-6">
              A Brewery Rooted in
              <br />
              <span className="italic text-primary">Mauritian Tradition</span>
            </h2>
            
            <div className="divider-hand mb-8" />
            
            <div className="space-y-6 text-body text-muted-foreground">
              <p>
                Flying Dodo is more than a brewery—it's a celebration of Mauritius. 
                Named after our island's legendary bird, we embrace the spirit of 
                uniqueness and authenticity in every batch we craft.
              </p>
              <p className="quote-artisan">
                Our beers are born from the perfect marriage of traditional European 
                brewing techniques and the vibrant character of our tropical home.
              </p>
              <p>
                We believe great beer should never be rushed. That's why we take 
                our time, nurturing each brew until it reaches its full potential.
              </p>
            </div>

            {/* Handwritten signature */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-handwritten text-primary/80 mt-8"
              style={{ transform: "rotate(-1deg)" }}
            >
              — Brewed with heart & hops
            </motion.p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm img-worn border-hand">
              <img
                src={beerImage}
                alt="Craft beer being poured"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative stamp element */}
            <motion.div
              initial={{ opacity: 0, rotate: -20 }}
              animate={isInView ? { opacity: 1, rotate: -12 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 stamp bg-background"
            >
              <span className="stamp-text text-xs">Craft<br/>Brewed</span>
            </motion.div>

            {/* Corner flourish */}
            <div className="absolute -top-4 -right-4 w-12 h-12 opacity-30">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 44C4 24 24 4 44 4" stroke="currentColor" strokeWidth="1" className="text-primary"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
