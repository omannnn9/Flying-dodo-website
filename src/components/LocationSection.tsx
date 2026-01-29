import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, ExternalLink } from "lucide-react";

export function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="section-spacing bg-secondary/30 texture-grain relative" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-caption text-primary mb-3 block">Find Us</span>
          <h2 className="text-headline mb-4">Location</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-[4/3] rounded-sm overflow-hidden shadow-lg img-worn"
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7487.676953795391!2d57.49526600000001!3d-20.224032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5aed47f0ba3d%3A0x82535e2571a30d04!2sFlying%20Dodo%20Brewing%20Company!5e0!3m2!1sen!2smu!4v1769685302202!5m2!1sen!2smu" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="card-artisan p-8">
              <h3 className="font-serif text-xl font-medium mb-6">Flying Dodo Brewing Company</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground">1, Mall of Mauritius Bagatelle</p>
                    <p className="text-muted-foreground">Reduit 80832, Moka</p>
                    <p className="text-muted-foreground">Republic of Mauritius</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+2304688810" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +(230) 468 8810
                  </a>
                </div>
              </div>
            </div>

            {/* Media mentions */}
            <div className="card-artisan p-6">
              <span className="text-caption text-muted-foreground block mb-4">As seen on</span>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "BBC", url: "http://www.bbc.com/news/business-28837758" },
                  { name: "CGTN Africa", url: "https://africa.cgtn.com/the-flying-dodo-insights-from-a-beer-hunter/" },
                  { name: "TripAdvisor", url: "http://www.tripadvisor.com/Restaurant_Review-g1370031-d3863318-Reviews-Flying_Dodo_Brewing_Company-Moka.html" },
                  { name: "Air Mauritius", url: "https://www.airmauritius.com/plan/travel-inspirations/brilliant-minds-flying-dodo-brewing-company---a-mauritian-one-off" },
                ].map((media) => (
                  <a
                    key={media.name}
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-secondary/50 rounded-sm text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                  >
                    {media.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Handwritten note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-handwritten text-center text-primary/70 mt-12"
          style={{ transform: "rotate(-1deg)" }}
        >
          Come visit us in Mauritius! 🏝️
        </motion.p>
      </div>
    </section>
  );
}
