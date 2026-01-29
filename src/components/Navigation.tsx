import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/flying-dodo-logo-real.jpg";

const navItems = [
  { label: "Our Beers", href: "#beers" },
  { label: "Restaurants", href: "#restaurants" },
  { label: "Stores", href: "#stores" },
  { label: "Projects", href: "#projects" },
  { label: "Pictures", href: "#pictures" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hasScrolled 
            ? "bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="container-wide flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("#")}
            className="flex items-center gap-3 group"
          >
            <img 
              src={logo} 
              alt="Flying Dodo" 
              className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="font-serif text-base md:text-lg font-medium tracking-tight text-foreground">
                Flying Dodo
              </span>
              <span className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground hidden sm:block">
                Brewing Company
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline py-1"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background texture-paper md:hidden"
          >
            {/* Decorative element */}
            <div className="absolute top-1/4 right-8 opacity-10">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
                <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
              </svg>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.1, duration: 0.25 }}
              className="flex flex-col items-center justify-center h-full gap-6"
            >
              {/* Logo in mobile menu */}
              <img src={logo} alt="" className="w-24 h-auto mb-4 opacity-70" />

              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.25 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-headline text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Handwritten tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="text-handwritten text-muted-foreground mt-6"
                style={{ transform: "rotate(-2deg)" }}
              >
                True Craft Since 2011
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
