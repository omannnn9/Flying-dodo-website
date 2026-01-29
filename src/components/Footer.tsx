import logo from "@/assets/flying-dodo-logo-real.jpg";
import trueCraft from "@/assets/true-craft-badge.jpg";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 bg-card border-t border-border texture-grain relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container-wide">
        <div className="flex flex-col items-center text-center">
          {/* Logos */}
          <div className="flex items-center gap-6 mb-6">
            <img 
              src={logo} 
              alt="Flying Dodo" 
              className="w-20 md:w-24 h-auto opacity-80"
            />
            <img 
              src={trueCraft} 
              alt="True Craft" 
              className="w-12 md:w-14 h-auto opacity-60"
            />
          </div>
          
          {/* Brand name */}
          <h3 className="font-serif text-xl md:text-2xl font-medium mb-2">
            Flying Dodo Brewing Company
          </h3>
          <p className="text-caption text-muted-foreground mb-4">
            Mauritius' First Craft Brewery · Since 2011
          </p>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 text-sm">
            {["Our Beers", "Restaurants", "Stores", "Projects", "Pictures", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://www.instagram.com/flyingdodobrewery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/flyingdodo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Tagline */}
          <p 
            className="text-handwritten text-lg text-primary/70 mb-8"
            style={{ transform: "rotate(-1deg)" }}
          >
            Same like in people, it's what's inside that matters.
          </p>

          {/* Divider */}
          <div className="w-20 h-px bg-border mb-6" />

          {/* Legal */}
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>© {currentYear} Flying Dodo Brewing Company</p>
            <p className="text-xs opacity-70">
              1, Mall of Mauritius Bagatelle, Moka · +(230) 468 8810
            </p>
            <p className="text-xs opacity-60">
              Drink responsibly. Must be of legal drinking age.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
