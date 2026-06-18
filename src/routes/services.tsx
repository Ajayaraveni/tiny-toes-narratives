import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { images } from "@/lib/images";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services · TinyToes Photography Studio" },
      { name: "description", content: "Newborn, maternity, milestone, cake smash and family photography sessions in Karimnagar by Mounika Konda." },
      { property: "og:title", content: "Photography Sessions · TinyToes" },
      { property: "og:description", content: "A studio for every chapter — newborn, maternity, milestones, cake smash, family." },
      { property: "og:image", content: images.newborn4.url },
    ],
  }),
  component: Services,
});

const services = [
  {
    key: "newborn", title: "Newborn Photography", img: images.newborn4.url,
    blurb: "Within the first fourteen days, when sleep is deepest and curls are tightest — we create heirloom portraits in wraps, baskets and props styled to perfection.",
    benefits: ["Certified safety handling", "Studio warmed to 28°C", "All wraps & props included", "20–30 fully retouched images"],
  },
  {
    key: "maternity", title: "Maternity Photography", img: images.maternity3.url,
    blurb: "Editorial portraiture honouring the radiance of motherhood. From flowing fabrics to traditional silks, every frame celebrates the woman you are becoming.",
    benefits: ["Curated couture gowns", "Hair & makeup on request", "Studio + outdoor options", "Couple portraits included"],
  },
  {
    key: "milestone", title: "Baby Milestone Sessions", img: images.newborn1.url,
    blurb: "3, 6, 9 and 12-month sessions designed around your baby's personality. Whimsical themes, custom sets, and joy captured one wonder at a time.",
    benefits: ["Themed concept sets", "Outfit wardrobe included", "Sibling shots welcome", "Curated milestone albums"],
  },
  {
    key: "cake", title: "Cake Smash Sessions", img: images.cakesmash1.url,
    blurb: "The first birthday, captured in colour, laughter and frosting. A bespoke themed set, custom cake design and unscripted joy that lasts a lifetime.",
    benefits: ["Custom themed backdrop", "Designer smash cake", "Outfit & headband styling", "Splash add-on available"],
  },
  {
    key: "family", title: "Family Portraits", img: images.family1.url,
    blurb: "Heirloom portraits that hold your story together. Multi-generation, sibling and family sessions designed for walls that deserve them.",
    benefits: ["Up to 6 family members", "Coordinated styling guide", "Studio or location", "Framed art print options"],
  },
];

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] as const },
};

function Services() {
  return (
    <>
      <section className="pt-40 md:pt-52 pb-20 bg-ivory text-center">
        <div className="container-luxe max-w-4xl mx-auto">
          <p className="eyebrow mb-8">Sessions & Experiences</p>
          <h1 className="font-display text-5xl md:text-8xl leading-[1.05]">A studio for <em className="text-rosegold-deep">every chapter.</em></h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            From the quiet anticipation of motherhood to the wild joy of a first birthday — each session is designed with intention.
          </p>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.key} className={`py-24 md:py-32 ${i % 2 ? "bg-cream" : "bg-ivory"}`}>
          <div className={`container-luxe grid md:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <motion.div {...fade} className="aspect-[4/5] overflow-hidden">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
            <motion.div {...fade}>
              <p className="eyebrow mb-6">0{i+1} · Collection</p>
              <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6">{s.title}</h2>
              <div className="hairline w-20 mb-6" />
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8 max-w-lg">{s.blurb}</p>
              <ul className="space-y-3 mb-10">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-rosegold-deep mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-luxe">Enquire Now</Link>
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
}
