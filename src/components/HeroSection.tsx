import { motion } from "framer-motion";
import logo from "@/assets/flying-dodo-logo-real.jpg";
import trueCraft from "@/assets/true-craft-badge.jpg";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative texture-paper">
      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      
      <div className="container-narrow py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 mb-10">
            <motion.img 
              src={logo} 
              alt="Flying Dodo Brewing Company" 
              className="w-48 md:w-64 h-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.img 
              src={trueCraft} 
              alt="True Craft Beer" 
              className="w-24 md:w-32 h-auto opacity-90"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </div>

          {/* Title */}
          <motion.h1 
            className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Flying Dodo Brewing Company
          </motion.h1>

          {/* Philosophy Text - Preserved exactly from original */}
          <motion.div 
            className="max-w-3xl mx-auto space-y-6 text-body text-foreground/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-muted-foreground italic">
              We are busy brewing fantastic beers and don't have time or money to make a nicer website. To be honest, we used the marketing budget to buy a stash of Nelson Sauvin Hops from New Zealand...
            </p>
            
            <p className="text-handwritten text-xl md:text-2xl text-primary" style={{ transform: "rotate(-1deg)" }}>
              Besides, same like in people, it's what's inside that matters.
            </p>

            <p>
              We built the first craft brewery in the history of Mauritius in 2011. Before us there was.. well, no craft beer in Mauritius, and today it's a burgeoning sector.
            </p>
            
            <p>
              We brew 20 different beers per year with our hands, heart and sincere passion simply because we love creating beers. Our research department, basically our whole small brewery, is focused in finding local ingredients. It is not sustainable for an island in the middle of the ocean to import everything it needs. We need to grow our own food and recycle the most we can. That's exactly our goal. And it should not be an individual effort, but a national effort.
            </p>
            
            <p className="text-foreground/80">
              Flying Dodo is a <strong className="text-primary">True Craft Beer®</strong> because we brew small batches of 500L, we are a small company, beers are unpasteurized and unfiltered & we invent new recipes every month with the focus being flavour.
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div 
            className="divider-hand mx-auto my-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          />

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-caption text-muted-foreground">Explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-muted-foreground">
                <path d="M10 3v14m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
