import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import breweryDetail from "@/assets/brewery-detail.jpg";

const milestones = [
  {
    year: "2015",
    title: "The Dream Begins",
    description: "What started as a passion project in a small garage grew into a vision for Mauritius's first craft brewery.",
  },
  {
    year: "2017",
    title: "First Brew",
    description: "Our flagship amber ale poured from the tanks—a moment of pure magic that validated years of experimentation.",
  },
  {
    year: "2020",
    title: "The Brewhouse Opens",
    description: "We opened our doors to the public, creating a space where brewing and community come together.",
  },
  {
    year: "Today",
    title: "Growing Together",
    description: "With a range of distinctive brews, we continue pushing boundaries while staying true to our roots.",
  },
];

export function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="section-spacing texture-grain relative">
      {/* Subtle vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-vignette)" }} />

      <div className="container-wide relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
        >
          <p className="text-caption text-muted-foreground mb-4">Our Journey</p>
          <h2 className="text-headline mb-6">
            The Story of
            <br />
            <span className="italic text-primary">Flying Dodo</span>
          </h2>
          <div className="divider-hand mx-auto" />
        </motion.div>

        {/* Image and Timeline Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Large Image with worn effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden rounded-sm img-worn corner-flourish"
          >
            <img
              src={breweryDetail}
              alt="Brewery copper equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
            
            {/* Overlay text */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-handwritten text-primary-foreground/90 text-2xl md:text-3xl" style={{ transform: "rotate(-2deg)" }}>
                Where craft meets passion
              </p>
            </div>
          </motion.div>

          {/* Timeline with hand-drawn line */}
          <div className="space-y-8 lg:space-y-10 relative">
            {/* Hand-drawn vertical line */}
            <div className="absolute left-[38px] top-4 bottom-4 w-px hidden lg:block">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path 
                  d="M0.5 0 Q 1 25%, 0.5 50% Q 0 75%, 0.5 100%" 
                  stroke="hsl(var(--border))" 
                  strokeWidth="1"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: 15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex gap-6 relative"
              >
                {/* Year with circle marker */}
                <div className="flex-shrink-0 w-20 relative">
                  <div className="absolute left-1/2 top-1 w-3 h-3 rounded-full bg-primary/60 -translate-x-1/2 hidden lg:block" />
                  <span className="text-subhead text-primary">{milestone.year}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 pl-4 lg:pl-6 border-l border-border lg:border-0">
                  <h3 className="font-serif text-xl font-medium mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Final flourish */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center pt-4"
            >
              <span className="text-handwritten text-muted-foreground text-lg">...and the story continues</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
