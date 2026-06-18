import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import logo from "@/assets/tinytoes-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between py-4 md:py-5">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo.url} alt="TinyToes Photography" className="h-12 md:h-14 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[0.72rem] tracking-[0.32em] uppercase font-medium text-ink/80 hover:text-rosegold-deep transition-colors relative group"
              activeProps={{ className: "text-rosegold-deep" }}
            >
              {n.label}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-rosegold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://www.instagram.com/tinytoesphotographystudio/"
            target="_blank"
            rel="noreferrer"
            className="text-ink/70 hover:text-rosegold-deep transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <Link to="/contact" className="btn-luxe !py-3 !px-6">Book Session</Link>
        </div>

        <button
          className="lg:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ivory border-t border-border">
          <div className="container-luxe py-8 flex flex-col gap-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.3em] uppercase text-ink/80"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-luxe self-start">
              Book Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
