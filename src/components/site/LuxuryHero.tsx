import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import camera from "@/assets/hero-camera-v2.jpg.asset.json";

/**
 * Premium editorial split-screen hero.
 * Left: typographic story panel. Right: vintage camera still life
 * representing the craft of storytelling rather than a client portfolio image.
 */
export function LuxuryHero() {
  const ease = [0.2, 0.7, 0.2, 1] as const;
  return (
    <section className="relative bg-ivory pt-24 md:pt-28 overflow-hidden">
      <div className="grid md:grid-cols-[1.05fr_1fr] min-h-[78vh] md:min-h-[82vh] items-stretch">
        {/* LEFT — Editorial copy */}
        <div className="relative flex items-center px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <span
            aria-hidden
            className="absolute -left-6 top-10 font-display italic text-[10rem] md:text-[14rem] text-rosegold/10 select-none leading-none"
          >
            T
          </span>

          <div className="relative max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="flex items-center gap-4 mb-10"
            >
              <span className="hairline w-12" />
              <p className="eyebrow">A Cinematic Studio · Karimnagar</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease, delay: 0.1 }}
              className="font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-[-0.015em]"
            >
              Every heartbeat
              <br />
              begins a{" "}
              <em className="text-rosegold-deep font-display italic">story.</em>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, ease, delay: 0.45 }}
              className="hairline w-32 origin-left my-10"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground font-light leading-[1.85] max-w-md"
            >
              Preserving life's most precious moments through newborn,
              maternity, milestone and family photography.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.7 }}
              className="mt-12 flex flex-wrap gap-4 items-center"
            >
              <a href="#story" className="btn-luxe group">
                Begin The Journey
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link to="/contact" className="btn-ghost">
                Book Your Session
              </Link>
            </motion.div>
          </div>
        </div>

        {/* RIGHT — Vintage camera still life */}
        <div className="relative h-[60vh] md:h-auto">
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease }}
            className="absolute inset-0 overflow-hidden"
          >
            <img
              src={camera.url}
              alt="Vintage twin-lens camera — TinyToes Photography Studio, Karimnagar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ivory/40 via-transparent to-transparent md:from-ivory/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
