import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Recycle, Sprout } from "lucide-react";

const projects = [
  {
    icon: Leaf,
    title: "Local Ingredients",
    description: "Our research focuses on finding and using local Mauritian ingredients to reduce our environmental footprint.",
  },
  {
    icon: Recycle,
    title: "Sustainability",
    description: "It's not sustainable for an island in the middle of the ocean to import everything. We're committed to recycling and growing our own.",
  },
  {
    icon: Sprout,
    title: "Community Effort",
    description: "This should not be an individual effort, but a national effort. We believe in collective responsibility.",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-spacing bg-card/50 texture-grain relative" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-caption text-primary mb-3 block">Our Mission</span>
          <h2 className="text-headline mb-4">Projects</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond brewing, we're committed to sustainability and building a better future for Mauritius.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
                <project.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="quote-artisan max-w-xl mx-auto mt-12 text-center"
        >
          <p className="text-lg italic text-foreground/80">
            We need to grow our own food and recycle the most we can. That's exactly our goal.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
