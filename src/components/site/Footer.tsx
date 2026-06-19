import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, MessageCircle } from "lucide-react";
import { BrandMark } from "@/components/site/BrandMark";

export function Footer() {
  return (
    <footer className="bg-cream border-t border-border/60 mt-20">
      <div className="container-luxe py-20">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <BrandMark size="lg" className="mb-6" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs font-light">
              Preserving life's most precious memories through newborn, maternity and family
              photography in Karimnagar.
            </p>
            <p className="font-script text-3xl text-rosegold-deep mt-6">Mounika Konda</p>
          </div>

          <div>
            <p className="eyebrow mb-5">Explore</p>
            <ul className="space-y-3 text-sm">
              {["Home","About","Services","Gallery","Contact"].map(l => (
                <li key={l}><Link to={"/" + (l === "Home" ? "" : l.toLowerCase())} className="hover:text-rosegold-deep transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Studio</p>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li>8-5-357/A</li>
              <li>Raghavendra Nagar</li>
              <li>Karimnagar</li>
              <li>Telangana 505001</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Connect</p>
            <ul className="space-y-3 text-sm">
              <li><a href="tel:+916309288181" className="flex items-center gap-2 hover:text-rosegold-deep"><Phone className="w-4 h-4" />+91 63092 88181</a></li>
              <li><a href="https://wa.me/916309288181" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-rosegold-deep"><MessageCircle className="w-4 h-4" />WhatsApp</a></li>
              <li><a href="https://www.instagram.com/tinytoesphotographystudio/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-rosegold-deep"><Instagram className="w-4 h-4" />Instagram</a></li>
              <li><a href="https://maps.google.com/?q=Raghavendra+Nagar+Karimnagar" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-rosegold-deep"><MapPin className="w-4 h-4" />Karimnagar</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground tracking-wider">
          <p>© {new Date().getFullYear()} TinyToes Photography Studio. All moments preserved.</p>
          <p className="font-script text-lg text-rosegold-deep">Every heartbeat begins a story.</p>
        </div>
      </div>
    </footer>
  );
}
