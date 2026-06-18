import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { images } from "@/lib/images";

/**
 * Premium editorial split-screen hero.
 * Left: typographic story panel. Right: full-bleed maternity photograph.
 * Replaces the previous 3D camera so the photography becomes the hero.
 */
export function LuxuryHero() {
  const ease = [0.2, 0.7, 0.2, 1] as const;
  return (
    <section className="relative min-h-screen bg-ivory pt-28 md:pt-32 overflow-hidden">
      <div className="grid md:grid-cols-[1.05fr_1fr] min-h-[calc(100vh-7rem)] items-stretch">
        {/* LEFT — Editorial copy */}
        <div className="relative flex items-center px-6 md:px-16 lg:px-24 py-16 md:py-24">
          {/* faint serif backdrop */}
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 flex items-center gap-6"
            >
              <p className="font-script text-3xl text-rosegold-deep">est. 2020</p>
              <span className="vline h-10" />
              <div>
                <p className="font-display text-xl text-ink">500+ Families</p>
                <p className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground mt-1">
                  Stories Preserved
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT — Photograph */}
        <div className="relative h-[60vh] md:h-auto">
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease }}
            className="absolute inset-0 overflow-hidden"
          >
            <img
              src={images.maternity3.url}
              alt="Editorial maternity portrait — TinyToes Photography Studio, Karimnagar"
              className="w-full h-full object-cover"
            />
            {/* subtle warm wash to ground typography on edge */}
            <div className="absolute inset-0 bg-gradient-to-r from-ivory/40 via-transparent to-transparent md:from-ivory/30" />
          </motion.div>

          {/* Floating editorial caption */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.8 }}
            className="absolute bottom-8 right-8 md:bottom-12 md:right-12 max-w-[14rem] bg-ivory/90 backdrop-blur-sm p-6 border-l border-rosegold"
          >
            <p className="eyebrow mb-2">№ 001</p>
            <p className="font-display italic text-lg leading-snug text-ink">
              "Held in light, before they were held in arms."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 text-ink/60 hover:text-rosegold-deep transition-colors z-10"
      >
        <span className="text-[0.6rem] tracking-[0.4em] uppercase">Scroll To Begin</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
