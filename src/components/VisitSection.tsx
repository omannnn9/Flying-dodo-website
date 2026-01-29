import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users, Sparkles } from "lucide-react";

const experiences = [
  {
    icon: Users,
    title: "Brewery Tours",
    description: "Walk through our brewing process, from grain to glass. Experience the craft firsthand with our passionate team.",
    note: "By appointment"
  },
  {
    icon: Calendar,
    title: "Private Events",
    description: "Host your special occasion in our atmospheric taproom. Intimate gatherings with exceptional local beer.",
    note: "10-50 guests"
  },
  {
    icon: Sparkles,
    title: "Tasting Sessions",
    description: "Guided tastings led by our brewers. Discover the nuances of craft beer in an authentic setting.",
    note: "Weekly"
  },
];

export function VisitSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="visit" className="section-spacing bg-card texture-paper relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="1" className="text-primary"/>
          <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
        </svg>
      </div>

      <div className="container-wide relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-caption text-muted-foreground mb-4">Visit Us</p>
          <h2 className="text-headline mb-6">
            Experience the
            <br />
            <span className="italic text-primary">Brewhouse</span>
          </h2>
          <div className="divider-hand mx-auto mb-8" />
          <p className="text-body-lg text-muted-foreground">
            Step behind the scenes and immerse yourself in the world of craft brewing. 
            Our doors are always open to those who share our passion.
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="card-artisan text-center p-8 hover:translate-y-[-2px] transition-transform duration-300"
              style={{ transform: index === 1 ? 'rotate(0.5deg)' : index === 2 ? 'rotate(-0.3deg)' : 'none' }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
                <exp.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">{exp.title}</h3>
              <p className="text-body text-muted-foreground mb-4">{exp.description}</p>
              
              {/* Handwritten note */}
              <p 
                className="text-handwritten text-primary/70 text-sm"
                style={{ transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)` }}
              >
                {exp.note}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14 md:mt-18"
        >
          <p className="text-body text-muted-foreground mb-5">
            Ready to visit? Get in touch to book your experience.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 hover:bg-primary/15 rounded-sm text-primary transition-colors duration-300 border border-primary/20"
          >
            <span className="text-sm font-medium tracking-widest uppercase">Contact Us</span>
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
