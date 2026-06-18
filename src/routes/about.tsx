import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mounika Konda · Founder, TinyToes Photography" },
      { name: "description", content: "Meet Mounika Konda — Certified Newborn Photographer, mother of two, and founder of TinyToes Photography Studio in Karimnagar." },
      { property: "og:title", content: "Meet Mounika · TinyToes Photography" },
      { property: "og:description", content: "Some journeys begin with a dream. Meet the heart behind TinyToes." },
      { property: "og:image", content: images.maternity1.url },
    ],
  }),
  component: About,
});

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1, ease: [0.2, 0.7, 0.2, 1] as const },
};

function About() {
  return (
    <>
      <section className="pt-40 md:pt-52 pb-20 bg-ivory">
        <div className="container-luxe text-center max-w-4xl mx-auto">
          <motion.p {...fade} className="eyebrow mb-8">The Story</motion.p>
          <motion.h1 {...fade} className="font-display text-5xl md:text-8xl leading-[1.05]">
            Meet <em className="text-rosegold-deep">Mounika.</em>
          </motion.h1>
          <motion.p {...fade} className="mt-8 font-script text-3xl md:text-4xl text-rosegold-deep">
            Some journeys begin with a dream.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-luxe grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fade} className="aspect-[3/4] overflow-hidden bg-cream">
            <img src={images.maternity1.url} alt="" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div {...fade}>
            <p className="eyebrow mb-6">More Than Photography</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-8">
              A love for babies, motherhood, and the beautiful stories every family carries.
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground font-light leading-relaxed">
              <p>I am Mounika Konda — a Certified Newborn Photographer, a proud mother of two wonderful children, and the founder of TinyToes Photography Studio.</p>
              <p>Like many women, I wanted to create something meaningful that reflected who I am and allowed me to build an identity of my own. What started as a passion slowly transformed into a purpose.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream">
        <div className="container-luxe max-w-3xl text-center">
          <motion.p {...fade} className="eyebrow mb-6">A Mother's Perspective</motion.p>
          <motion.blockquote {...fade} className="font-display text-3xl md:text-5xl italic leading-[1.2]">
            "The tiny fingers that wrap around yours today will grow.
            The little feet that fit in your hands today will take their own steps tomorrow.
            These precious moments are fleeting — but the memories can last forever."
          </motion.blockquote>
          <div className="hairline w-24 mx-auto my-10" />
          <motion.p {...fade} className="font-script text-3xl text-rosegold-deep">— Mounika</motion.p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container-luxe grid md:grid-cols-3 gap-px bg-border">
          {[
            { t: "Safety", d: "Newborns are carefully wrapped and supported. Every pose is composite-safe and gentle." },
            { t: "Comfort", d: "The studio is warmed, calm, and unhurried. Mothers and babies set the pace." },
            { t: "Care", d: "Every session is approached with the same love I give my own children." },
          ].map((v) => (
            <motion.div key={v.t} {...fade} className="bg-ivory p-10 md:p-14">
              <p className="font-script text-5xl text-rosegold-deep mb-4">{v.t}.</p>
              <p className="hairline w-12 mb-6" />
              <p className="text-muted-foreground font-light leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container-luxe grid md:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <motion.div {...fade}>
            <p className="eyebrow mb-6">The Heart Behind TinyToes</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-8">
              Not just pictures — <em className="text-rosegold-deep">preserved emotions.</em>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground font-light leading-relaxed">
              <p>At TinyToes, photography is about celebrating motherhood. About capturing the beginning of a family's most beautiful chapter.</p>
              <p>I feel honoured every time a family trusts me to document these once-in-a-lifetime moments, and I look forward to creating memories that will be cherished for generations.</p>
            </div>
          </motion.div>
          <motion.div {...fade} className="aspect-[4/5] overflow-hidden">
            <img src={images.newborn4.url} alt="" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-cream text-center">
        <div className="container-luxe">
          <p className="font-script text-5xl md:text-7xl text-rosegold-deep mb-4">With love,</p>
          <p className="font-display text-3xl md:text-4xl mb-2">Mounika Konda</p>
          <p className="eyebrow">Founder · Certified Newborn Photographer</p>
          <Link to="/contact" className="btn-luxe mt-10 inline-flex">Begin Your Story</Link>
        </div>
      </section>
    </>
  );
}
