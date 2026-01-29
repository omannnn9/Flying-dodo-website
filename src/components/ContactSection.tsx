import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-spacing bg-secondary texture-paper relative overflow-hidden">
      {/* Decorative corner flourish */}
      <div className="absolute top-8 left-8 opacity-20 hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M55 5C55 30 30 55 5 55" stroke="currentColor" strokeWidth="1" className="text-primary"/>
          <path d="M50 10C50 30 30 50 10 50" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
        </svg>
      </div>

      <div className="container-wide relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-caption text-muted-foreground mb-4">Find Us</p>
          <h2 className="text-headline mb-6">
            Where to
            <br />
            <span className="italic text-primary">Find Us</span>
          </h2>
          <div className="divider-hand mx-auto" />
        </motion.div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto mb-8"
        >
          <div className="card-artisan p-6 text-center" style={{ transform: "rotate(-0.3deg)" }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <MapPin size={18} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg font-medium">Flying Dodo Brewing Company</h3>
            </div>
            <address className="not-italic text-body text-muted-foreground space-y-1">
              <p>1, Mall of Mauritius Bagatelle</p>
              <p>Reduit 80832, Moka</p>
              <p>Republic of Mauritius</p>
            </address>
          </div>
        </motion.div>

        {/* Map with Flying Dodo Pinned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-sm overflow-hidden shadow-lg img-worn max-w-4xl mx-auto"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.425!2d57.4933!3d-20.2358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5af8d4a5d5d7%3A0x9e7c5e8a8e8e8e8e!2sFlying%20Dodo%20Brewing%20Company!5e0!3m2!1sen!2smu!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Flying Dodo Brewery Location - Bagatelle Mall, Mauritius"
            className="grayscale-[20%] contrast-[1.05]"
          />
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-handwritten text-xl text-muted-foreground" style={{ transform: "rotate(-1deg)" }}>
            Come visit us at Bagatelle 🍻
          </p>
        </motion.div>
      </div>
    </section>
  );
}
