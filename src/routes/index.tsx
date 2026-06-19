import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, MessageCircle, Quote, Star } from "lucide-react";
import { LuxuryHero } from "@/components/site/LuxuryHero";
import { images, gallery } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TinyToes Photography Studio · Karimnagar Newborn & Maternity" },
      { name: "description", content: "Luxury newborn, maternity, milestone, cake smash and family photography in Karimnagar by Mounika Konda. Preserving life's most precious memories." },
      { property: "og:title", content: "TinyToes Photography Studio" },
      { property: "og:description", content: "Every heartbeat begins a story. Premium newborn & maternity photography in Karimnagar." },
      { property: "og:image", content: images.maternity3.url },
    ],
  }),
  component: Home,
});

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.2, 0.7, 0.2, 1] as const },
};

function Home() {
  return (
    <>
      <LuxuryHero />

      {/* MATERNITY STORYTELLING */}
      <section id="story" className="py-20 md:py-28 bg-ivory">
        <div className="container-luxe grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="aspect-[3/4] overflow-hidden bg-cream relative">
              <img src={images.maternity3.url} alt="Maternity portrait" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>
          <motion.div {...fadeUp}>
            <p className="eyebrow mb-6">Chapter One · Anticipation</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.1] mb-8">
              Before we held you<br />in our arms…<br /><em className="text-rosegold-deep">we held you in our hearts.</em>
            </h2>
            <div className="hairline w-24 mb-8" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-lg">
              Nine months of anticipation. Countless dreams. Endless love.
              Maternity is the quiet, sacred prologue to every story we tell.
            </p>
            <Link to="/services" className="btn-ghost mt-10">
              View Maternity Sessions <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* NEWBORN REVEAL */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-ivory to-cream overflow-hidden">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <p className="eyebrow mb-6">Chapter Two · Arrival</p>
            <h2 className="font-display text-4xl md:text-7xl leading-[1.05]">
              Then came the moment<br />that changed <em className="text-rosegold-deep">everything.</em>
            </h2>
          </motion.div>

          <motion.div {...fadeUp} className="relative max-w-5xl mx-auto">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={images.newborn1.url} alt="Newborn reveal" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -top-10 left-6 md:-left-10 font-script text-5xl md:text-7xl text-rosegold-deep">hello, little one.</div>
          </motion.div>
        </div>
      </section>

      {/* TINY FINGERS COLLAGE */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="eyebrow mb-6">Chapter Three · Wonder</p>
            <h2 className="font-display text-4xl md:text-7xl leading-[1.05]">
              Tiny fingers. Tiny toes.<br /><em className="text-rosegold-deep">Memories that last forever.</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <motion.div {...fadeUp} className="col-span-12 md:col-span-5 aspect-[4/5] overflow-hidden">
              <img src={images.newborn2.url} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.4s]" />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 1, delay: 0.1 }} className="col-span-12 md:col-span-7 aspect-[4/3] overflow-hidden">
              <img src={images.newborn4.url} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.4s]" />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 1, delay: 0.15 }} className="col-span-12 md:col-span-7 aspect-[3/2] overflow-hidden">
              <img src={images.cakesmash1.url} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.4s]" />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 1, delay: 0.2 }} className="col-span-12 md:col-span-5 aspect-square overflow-hidden">
              <img src={images.family1.url} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.4s]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="text-center mb-20">
            <p className="eyebrow mb-6">The Collections</p>
            <h2 className="font-display text-4xl md:text-6xl">A studio for every chapter</h2>
            <p className="hairline w-32 mx-auto mt-8" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { title: "Newborn", img: images.newborn2.url, blurb: "Sacred first portraits, lovingly wrapped — within the first 14 days." },
              { title: "Maternity", img: images.maternity1.url, blurb: "Editorial portraiture honoring the radiance of motherhood." },
              { title: "Milestones", img: images.newborn1.url, blurb: "3, 6, 9 month sessions celebrating each new wonder." },
              { title: "Cake Smash", img: images.cakesmash1.url, blurb: "The first birthday, captured in colour, laughter and frosting." },
              { title: "Family", img: images.family1.url, blurb: "Heirloom portraits that hold your story together." },
              { title: "Bespoke", img: images.maternity3.url, blurb: "Custom concept sessions designed with you, frame by frame." },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ duration: 0.9, delay: i * 0.05 }}
                className="group relative aspect-[4/5] overflow-hidden bg-ivory"
              >
                <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-ivory">
                  <p className="eyebrow !text-rosegold mb-3">0{i+1}</p>
                  <h3 className="font-display text-3xl md:text-4xl text-ivory mb-3">{s.title}</h3>
                  <p className="text-sm font-light opacity-0 group-hover:opacity-90 transition-opacity duration-700 max-w-xs">{s.blurb}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/services" className="btn-luxe">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-luxe grid md:grid-cols-[1fr_1.3fr] gap-16 md:gap-24 items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="aspect-[3/4] bg-cream border border-border relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-6 border border-rosegold/50" />
              <div className="text-center px-8">
                <div className="w-24 h-24 rounded-full bg-gradient-rosegold mx-auto mb-8 flex items-center justify-center text-ivory font-display text-4xl shadow-luxe">MK</div>
                <p className="font-script text-4xl text-rosegold-deep mb-2">Mounika</p>
                <p className="eyebrow">Founder · Photographer</p>
                <p className="hairline w-12 mx-auto my-6" />
                <p className="text-xs text-muted-foreground tracking-widest uppercase">Portrait coming soon</p>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeUp}>
            <p className="eyebrow mb-6">The Heart Behind TinyToes</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.1] mb-8">
              Some journeys begin<br /><em className="text-rosegold-deep">with a dream.</em>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light mb-6 max-w-xl">
              I am Mounika Konda — a Certified Newborn Photographer, a proud mother of two,
              and the founder of TinyToes. As a mother, I understand how quickly time passes.
              The tiny fingers that wrap around yours today will grow.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light mb-10 max-w-xl">
              Every baby who enters my studio is cared for with the same love, patience and
              attention I give my own children. Safety, comfort and gentle handling are always
              my highest priorities.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/about" className="btn-luxe">Read My Story</Link>
              <p className="font-script text-3xl text-rosegold-deep">— with love, Mounika</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="text-center mb-20">
            <p className="eyebrow mb-6">Whispered with gratitude</p>
            <h2 className="font-display text-4xl md:text-6xl">Words from our families</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Priya & Arjun", role: "Newborn Session", quote: "Mounika handled our 8-day-old with such tenderness. We cried looking at the photos. Every detail — from the wraps to the lighting — was perfection." },
              { name: "Sneha R.", role: "Maternity Session", quote: "I felt like a queen. The studio is calming, the props are beautiful, and Mounika has a rare gift for making you feel comfortable in your own skin." },
              { name: "The Reddy Family", role: "First Birthday Cake Smash", quote: "Joy in every frame. Our daughter's cake smash turned into a piece of art we'll cherish forever. Booking again for siblings." },
            ].map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.9, delay: i * 0.1 }}
                className="bg-ivory p-10 border border-border/60 relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-rosegold/40" />
                <div className="flex gap-1 mb-6 text-rosegold-deep">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="font-display italic text-xl leading-relaxed mb-8">"{t.quote}"</p>
                <p className="hairline w-12 mb-4" />
                <p className="font-medium text-sm">{t.name}</p>
                <p className="eyebrow !text-[0.6rem] mt-1">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL GALLERY PREVIEW */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <p className="eyebrow mb-6">The Portfolio</p>
              <h2 className="font-display text-4xl md:text-6xl max-w-xl leading-tight">An editorial of light, love and stillness.</h2>
            </div>
            <Link to="/gallery" className="btn-ghost shrink-0">Explore Full Gallery <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
            {gallery.map((g, i) => (
              <motion.figure
                key={i}
                {...fadeUp}
                transition={{ duration: 0.9, delay: (i % 3) * 0.05 }}
                className="mb-4 md:mb-6 break-inside-avoid relative overflow-hidden group"
              >
                <img src={g.url} alt={g.caption} className="w-full h-auto transition-transform duration-[1.6s] group-hover:scale-105" loading="lazy" />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-ivory">
                  <p className="eyebrow !text-rosegold mb-2">{g.category}</p>
                  <p className="font-display text-2xl italic">{g.caption}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative py-40 md:py-56 bg-ink text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={images.maternity3.url} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
        <div className="container-luxe relative text-center">
          <motion.div {...fadeUp}>
            <p className="font-script text-4xl md:text-5xl text-rosegold mb-8">a gentle reminder…</p>
            <h2 className="font-display text-4xl md:text-7xl leading-[1.05] text-ivory">
              The days are long.<br />The years are short.<br />
              <em className="text-rosegold">Preserve the memories that matter most.</em>
            </h2>
            <div className="hairline w-32 mx-auto my-12" />
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-luxe !bg-ivory !text-ink !border-ivory hover:!bg-transparent hover:!text-ivory">Book Your Session</Link>
              <a href="https://wa.me/916309288181" target="_blank" rel="noreferrer" className="btn-ghost !text-ivory !border-rosegold"><MessageCircle className="w-4 h-4" />Chat On WhatsApp</a>
              <a href="https://www.instagram.com/tinytoesphotographystudio/" target="_blank" rel="noreferrer" className="btn-ghost !text-ivory !border-rosegold"><Instagram className="w-4 h-4" />Follow On Instagram</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
