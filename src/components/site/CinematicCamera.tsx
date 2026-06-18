import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * SVG-based cinematic vintage camera with scroll-driven rotation,
 * zoom, aperture opening and heartbeat pulse. No WebGL required —
 * keeps the experience smooth on every device while still feeling
 * like the signature WOW moment.
 */
export function CinematicCamera() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.6 });

  const rotateY = useTransform(p, [0, 0.4], [-18, 0]);
  const rotateX = useTransform(p, [0, 0.4], [8, 0]);
  const scale = useTransform(p, [0, 0.55, 1], [0.85, 1.6, 5.4]);
  const cameraOpacity = useTransform(p, [0.85, 1], [1, 0]);
  const apertureScale = useTransform(p, [0.55, 0.85], [1, 0.05]);
  const apertureRotate = useTransform(p, [0, 1], [0, 180]);
  const innerLight = useTransform(p, [0.6, 1], [0, 1]);
  const subtitleOpacity = useTransform(p, [0, 0.15, 0.4], [1, 0.6, 0]);
  const finaleOpacity = useTransform(p, [0.85, 1], [0, 1]);

  // Particles
  const [particles] = useState(() =>
    Array.from({ length: 36 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      d: 5 + Math.random() * 10,
      s: 1 + Math.random() * 3,
    }))
  );

  // Heartbeat pulse stronger near aperture stage
  const beat = useTransform(p, [0.55, 0.75], [1, 1.08]);

  // Disable scroll listeners on mobile fallback — section still shows the camera statically
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(max-width: 768px)");
    const on = () => setIsMobile(m.matches);
    on();
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);

  return (
    <section ref={ref} className="relative h-[400vh] bg-gradient-to-b from-ivory via-cream to-ivory">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((pt, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-rosegold/60 particle blur-[1px]"
              style={{
                left: `${pt.x}%`,
                top: `${pt.y}%`,
                width: pt.s,
                height: pt.s,
                animationDelay: `${pt.d}s`,
              }}
            />
          ))}
        </div>

        {/* Soft cinematic light */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,185,163,0.25),transparent_60%)]" />

        {/* Camera */}
        <motion.div
          style={
            isMobile
              ? undefined
              : {
                  rotateY,
                  rotateX,
                  scale,
                  opacity: cameraOpacity,
                  transformStyle: "preserve-3d",
                  transformPerspective: 1400,
                }
          }
          className="relative will-change-transform"
        >
          <motion.div style={isMobile ? undefined : { scale: beat }}>
            <Camera apertureScale={apertureScale} apertureRotate={apertureRotate} innerLight={innerLight} />
          </motion.div>
        </motion.div>

        {/* Headline overlay */}
        <motion.div
          style={{ opacity: subtitleOpacity }}
          className="absolute top-[18%] inset-x-0 text-center px-6 z-10"
        >
          <p className="eyebrow mb-6">A Cinematic Studio · Karimnagar</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] shimmer-text">
            Every heartbeat<br />begins a story.
          </h1>
          <p className="mt-8 max-w-xl mx-auto text-sm md:text-base text-muted-foreground tracking-wide font-light">
            Preserving life's most precious moments through newborn, maternity,
            milestone & family photography.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="#story" className="btn-luxe">Begin The Journey</a>
            <a href="/contact" className="btn-ghost">Book Your Session</a>
          </div>
        </motion.div>

        {/* Finale text inside lens */}
        <motion.div
          style={{ opacity: finaleOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="text-center max-w-2xl px-6">
            <p className="font-script text-4xl md:text-6xl text-rosegold-deep mb-4">
              and so it begins…
            </p>
            <p className="font-display text-3xl md:text-5xl text-ink">
              A story preserved in light.
            </p>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: subtitleOpacity }}
          className="absolute bottom-10 inset-x-0 flex flex-col items-center text-ink/60"
        >
          <span className="text-[0.65rem] tracking-[0.4em] uppercase mb-3">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-rosegold to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

function Camera({
  apertureScale,
  apertureRotate,
  innerLight,
}: {
  apertureScale: any;
  apertureRotate: any;
  innerLight: any;
}) {
  return (
    <div className="relative">
      <svg
        width="420"
        height="300"
        viewBox="0 0 420 300"
        className="drop-shadow-[0_30px_60px_rgba(46,42,38,0.35)]"
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3a3530" />
            <stop offset="0.5" stopColor="#1a1816" />
            <stop offset="1" stopColor="#0c0b0a" />
          </linearGradient>
          <linearGradient id="silverGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e9e5df" />
            <stop offset="0.5" stopColor="#b8b1a6" />
            <stop offset="1" stopColor="#6f6a62" />
          </linearGradient>
          <radialGradient id="lensGrad" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#2a2724" />
            <stop offset="0.7" stopColor="#0c0a08" />
            <stop offset="1" stopColor="#000" />
          </radialGradient>
          <radialGradient id="glowGrad" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#f7ead8" stopOpacity="1" />
            <stop offset="0.6" stopColor="#d8b9a3" stopOpacity="0.7" />
            <stop offset="1" stopColor="#d8b9a3" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Top viewfinder */}
        <rect x="180" y="40" width="60" height="28" rx="3" fill="url(#silverGrad)" />
        <rect x="186" y="46" width="48" height="16" rx="2" fill="#0c0b0a" />

        {/* Body */}
        <rect x="40" y="68" width="340" height="180" rx="14" fill="url(#bodyGrad)" />
        {/* Leather texture stripe */}
        <rect x="40" y="118" width="340" height="80" fill="#0a0908" opacity="0.4" />
        <rect x="40" y="118" width="340" height="80" fill="url(#bodyGrad)" opacity="0.5" />

        {/* Silver top trim */}
        <rect x="40" y="68" width="340" height="10" fill="url(#silverGrad)" />
        <rect x="40" y="238" width="340" height="10" fill="url(#silverGrad)" />

        {/* Brand plate */}
        <rect x="70" y="86" width="90" height="22" rx="2" fill="#1a1816" stroke="#6f6a62" strokeWidth="0.5" />
        <text x="115" y="101" textAnchor="middle" fontSize="9" fill="#d8b9a3" fontFamily="serif" letterSpacing="2">TINYTOES</text>

        {/* Shutter button */}
        <circle cx="330" cy="58" r="10" fill="url(#silverGrad)" />
        <circle cx="330" cy="58" r="6" fill="#8a3a2a" />

        {/* Dial */}
        <circle cx="80" cy="58" r="12" fill="url(#silverGrad)" />
        <circle cx="80" cy="58" r="3" fill="#0c0b0a" />

        {/* Lens outer */}
        <circle cx="210" cy="158" r="92" fill="url(#silverGrad)" />
        <circle cx="210" cy="158" r="86" fill="#1a1816" />
        <circle cx="210" cy="158" r="78" fill="url(#lensGrad)" />

        {/* Lens ridges */}
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i * 10 * Math.PI) / 180;
          const x1 = 210 + Math.cos(a) * 84;
          const y1 = 158 + Math.sin(a) * 84;
          const x2 = 210 + Math.cos(a) * 88;
          const y2 = 158 + Math.sin(a) * 88;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3a3530" strokeWidth="1" />;
        })}

        {/* Inner glow (becomes finale light) */}
        <motion.circle cx="210" cy="158" r="72" fill="url(#glowGrad)" style={{ opacity: innerLight }} />

        {/* Aperture blades */}
        <motion.g
          style={{ scale: apertureScale, rotate: apertureRotate, transformOrigin: "210px 158px" }}
        >
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45);
            return (
              <polygon
                key={i}
                points="210,158 280,128 280,188"
                fill="#0c0a08"
                stroke="#3a3530"
                strokeWidth="0.5"
                transform={`rotate(${angle} 210 158)`}
                opacity="0.95"
              />
            );
          })}
          <circle cx="210" cy="158" r="14" fill="#000" />
        </motion.g>

        {/* Lens highlight */}
        <ellipse cx="184" cy="132" rx="22" ry="10" fill="#fff" opacity="0.15" />
      </svg>
    </div>
  );
}
