import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { storeRegions, brewpubLocation } from "@/data/stores";
import { cn } from "@/lib/utils";

export function StoresSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedRegion, setExpandedRegion] = useState<string | null>("centre");

  const toggleRegion = (regionId: string) => {
    setExpandedRegion(expandedRegion === regionId ? null : regionId);
  };

  return (
    <section id="stores" className="section-spacing bg-background texture-paper relative" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-caption text-primary mb-3 block">Where to Find Us</span>
          <h2 className="text-headline mb-4">Stores & Locations</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Find Flying Dodo beers at these retailers across Mauritius, or visit our brewery taproom for the freshest experience.
          </p>
        </motion.div>

        {/* Main Brewpub Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-artisan p-6 md:p-8 mb-10 bg-primary/5 border-primary/20"
        >
          <div className="flex items-start gap-4">
            <div className="stamp w-12 h-12 flex-shrink-0 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-primary mb-1 block">Main Brewery & Taproom</span>
              <h3 className="font-serif text-xl font-medium mb-2">{brewpubLocation.name}</h3>
              <p className="text-body text-muted-foreground mb-1">{brewpubLocation.address}</p>
              <p className="text-body text-muted-foreground mb-1">{brewpubLocation.city}</p>
              <p className="text-body text-muted-foreground mb-3">{brewpubLocation.country}</p>
              <a 
                href={`tel:${brewpubLocation.phone.replace(/\s/g, '')}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {brewpubLocation.phone}
              </a>
              <p className="text-sm text-muted-foreground mt-3 italic">{brewpubLocation.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Regional Store Accordions */}
        <div className="space-y-4">
          {storeRegions.map((region, index) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="card-artisan overflow-hidden"
              style={{ transform: `rotate(${index % 2 === 0 ? -0.2 : 0.2}deg)` }}
            >
              <button
                onClick={() => toggleRegion(region.id)}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-widest text-primary font-medium bg-primary/10 px-3 py-1 rounded-sm">
                    {region.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {region.stores.length} location{region.stores.length !== 1 ? 's' : ''}
                  </span>
                </div>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-muted-foreground transition-transform duration-200",
                    expandedRegion === region.id && "rotate-180"
                  )} 
                />
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-300",
                expandedRegion === region.id ? "max-h-96" : "max-h-0"
              )}>
                <div className="px-5 pb-5 space-y-2 border-t border-border/50 pt-4">
                  {region.stores.map((store) => (
                    <div 
                      key={store.id}
                      className="flex items-center gap-3 py-2 px-3 rounded-sm hover:bg-secondary/20 transition-colors"
                    >
                      <MapPin className="w-4 h-4 text-primary/60 flex-shrink-0" />
                      <div>
                        <span className="text-body text-foreground">{store.name}</span>
                        {store.area && (
                          <span className="text-xs text-muted-foreground ml-2">({store.area})</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Handwritten note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-handwritten text-center text-primary/70 mt-10"
          style={{ transform: "rotate(1deg)" }}
        >
          Support local, drink fresh 🍺
        </motion.p>
      </div>
    </section>
  );
}
