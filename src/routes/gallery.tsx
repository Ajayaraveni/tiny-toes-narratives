import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { gallery, images } from "@/lib/images";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery · TinyToes Photography" },
      { name: "description", content: "An editorial portfolio of newborn, maternity, milestone, cake smash and family photography by TinyToes Studio, Karimnagar." },
      { property: "og:title", content: "Portfolio · TinyToes Photography" },
      { property: "og:description", content: "An editorial of light, love and stillness." },
      { property: "og:image", content: images.newborn4.url },
    ],
  }),
  component: Gallery,
});

const cats = ["All", "Newborn", "Maternity", "Milestones", "Cake Smash", "Family"] as const;

function Gallery() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const filtered = cat === "All" ? gallery : gallery.filter((g) => g.category === cat);

  return (
    <>
      <section className="pt-40 md:pt-52 pb-12 bg-ivory text-center">
        <div className="container-luxe">
          <p className="eyebrow mb-8">The Portfolio</p>
          <h1 className="font-display text-5xl md:text-8xl leading-[1.05]">An editorial of <em className="text-rosegold-deep">light & love.</em></h1>
        </div>
      </section>

      <section className="py-8 bg-ivory sticky top-[72px] z-30 backdrop-blur bg-ivory/85 border-y border-border/50">
        <div className="container-luxe flex flex-wrap gap-2 md:gap-3 justify-center">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2.5 text-[0.7rem] tracking-[0.3em] uppercase transition-all border ${
                cat === c
                  ? "bg-ink text-ivory border-ink"
                  : "bg-transparent text-ink/70 border-border hover:border-rosegold hover:text-rosegold-deep"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
            <AnimatePresence mode="popLayout">
              {filtered.map((g, i) => (
                <motion.figure
                  key={g.url + cat}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, delay: (i % 3) * 0.06 }}
                  className="mb-4 md:mb-6 break-inside-avoid relative overflow-hidden group"
                >
                  <img src={g.url} alt={g.caption} className="w-full h-auto transition-transform duration-[1.6s] group-hover:scale-105" loading="lazy" />
                  <figcaption className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-ivory">
                    <p className="eyebrow !text-rosegold mb-2">{g.category}</p>
                    <p className="font-display text-2xl italic">{g.caption}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
