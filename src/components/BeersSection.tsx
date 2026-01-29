import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Beer as BeerIcon, Sparkles } from "lucide-react";
import { beers, breweryInfo } from "@/data/beers";

export function BeersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="beers" className="section-spacing bg-secondary/30 texture-grain relative" ref={ref}>
      {/* Decorative corner */}
      <div className="absolute top-8 left-8 opacity-20">
        <BeerIcon className="w-16 h-16 text-primary" />
      </div>

      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-caption text-primary mb-3 block">What We Brew</span>
          <h2 className="text-headline mb-4">Our Beers</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            {breweryInfo.philosophy}
          </p>
          <p className="text-body text-muted-foreground">
            {breweryInfo.batchSize} batches • {breweryInfo.style}
          </p>
        </motion.div>

        {/* Monthly brew highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-artisan p-6 mb-10 text-center bg-primary/5 border-primary/20"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm uppercase tracking-wider text-primary font-medium">Fresh Brews</span>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <p className="text-body text-foreground">{breweryInfo.monthlyBrewMessage}</p>
        </motion.div>

        {/* Beer grid */}
        <div className="grid gap-6 md:gap-8">
          {beers.map((beer, index) => (
            <motion.div
              key={beer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="card-artisan p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 relative"
              style={{ transform: `rotate(${index % 2 === 0 ? -0.3 : 0.3}deg)` }}
            >
              {/* New badge */}
              {beer.isNew && (
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs uppercase tracking-wider px-3 py-1 rounded-sm transform rotate-3">
                  New!
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                {/* Beer icon */}
                <div className="stamp w-14 h-14 flex-shrink-0 flex items-center justify-center">
                  <BeerIcon className="w-6 h-6 text-primary" />
                </div>

                {/* Beer details */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-medium">{beer.name}</h3>
                      <span className="text-xs uppercase tracking-wider text-primary/80 block mt-1">
                        {beer.style}
                      </span>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex gap-3 text-xs uppercase tracking-wide text-muted-foreground">
                      <span className="px-2 py-1 bg-secondary rounded">{beer.abv}% ABV</span>
                      {beer.ibu && <span className="px-2 py-1 bg-secondary rounded">{beer.ibu} IBU</span>}
                      {beer.plato && <span className="px-2 py-1 bg-secondary rounded hidden sm:block">{beer.plato}° Plato</span>}
                    </div>
                  </div>

                  <p className="text-body text-muted-foreground mb-3">{beer.description}</p>

                  {beer.foodPairing && (
                    <p className="text-sm text-primary/70 italic">
                      🍽️ {beer.foodPairing}
                    </p>
                  )}
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
          className="text-handwritten text-center text-muted-foreground mt-10"
          style={{ transform: "rotate(-1deg)" }}
        >
          The focus is always flavour ✨
        </motion.p>
      </div>
    </section>
  );
}
