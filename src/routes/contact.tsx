import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { images } from "@/lib/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · TinyToes Photography Studio Karimnagar" },
      { name: "description", content: "Book your newborn, maternity, milestone or family session with TinyToes Photography Studio in Karimnagar. Call +91 63092 88181." },
      { property: "og:title", content: "Book a Session · TinyToes" },
      { property: "og:description", content: "Reach Mounika Konda to begin your story." },
      { property: "og:image", content: images.maternity1.url },
    ],
  }),
  component: Contact,
});

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] as const },
};

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 bg-ivory text-center">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow mb-8">Begin Your Story</p>
          <h1 className="font-display text-5xl md:text-8xl leading-[1.05]">Let's <em className="text-rosegold-deep">create together.</em></h1>
          <p className="mt-8 text-muted-foreground font-light text-lg max-w-xl mx-auto">
            We respond to every enquiry personally, usually within a few hours. Sessions are booked
            on a limited basis to honour every family.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20">
          <motion.form
            {...fade}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-cream p-8 md:p-14 border border-border/60"
          >
            <p className="eyebrow mb-8">The Enquiry</p>
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Your Name" name="name" required />
              <Field label="Phone" name="phone" required />
              <Field label="Email" name="email" type="email" className="md:col-span-2" />
              <Field label="Session of Interest" name="session" className="md:col-span-2" placeholder="Newborn · Maternity · Milestone · Cake Smash · Family" />
              <div className="md:col-span-2">
                <label className="eyebrow block mb-3">Tell us your story</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-ink/30 focus:border-rosegold-deep outline-none py-3 font-light text-base resize-none transition-colors"
                />
              </div>
            </div>
            <button type="submit" className="btn-luxe mt-10">{sent ? "Thank you — we'll be in touch" : "Send Enquiry"}</button>
          </motion.form>

          <motion.div {...fade} className="space-y-10">
            <div>
              <p className="eyebrow mb-4">The Studio</p>
              <p className="font-display text-2xl leading-snug">TinyToes Photography Studio</p>
              <p className="text-muted-foreground font-light mt-2 leading-relaxed">
                8-5-357/A, Raghavendra Nagar<br />
                Karimnagar, Telangana 505001<br />India
              </p>
            </div>
            <div className="hairline" />
            <div className="space-y-4">
              <a href="tel:+916309288181" className="flex items-center gap-4 group">
                <span className="w-11 h-11 border border-rosegold flex items-center justify-center group-hover:bg-rosegold transition-colors"><Phone className="w-4 h-4 text-rosegold-deep group-hover:text-ivory" /></span>
                <span><span className="eyebrow block">Call</span><span className="font-light">+91 63092 88181</span></span>
              </a>
              <a href="https://wa.me/916309288181?text=Hello%20TinyToes%20Photography%20Studio" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <span className="w-11 h-11 border border-rosegold flex items-center justify-center group-hover:bg-rosegold transition-colors"><MessageCircle className="w-4 h-4 text-rosegold-deep group-hover:text-ivory" /></span>
                <span><span className="eyebrow block">WhatsApp</span><span className="font-light">+91 63092 88181</span></span>
              </a>
              <a href="https://www.instagram.com/tinytoesphotographystudio/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <span className="w-11 h-11 border border-rosegold flex items-center justify-center group-hover:bg-rosegold transition-colors"><Instagram className="w-4 h-4 text-rosegold-deep group-hover:text-ivory" /></span>
                <span><span className="eyebrow block">Instagram</span><span className="font-light">@tinytoesphotographystudio</span></span>
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=TinyToes+Photography+Studio+8-5-357%2FA+Raghavendra+Nagar+Karimnagar+Telangana+505001" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <span className="w-11 h-11 border border-rosegold flex items-center justify-center group-hover:bg-rosegold transition-colors"><MapPin className="w-4 h-4 text-rosegold-deep group-hover:text-ivory" /></span>
                <span><span className="eyebrow block">Visit</span><span className="font-light">View on Google Maps</span></span>
              </a>
            </div>
            <div className="hairline" />
            <div>
              <p className="eyebrow mb-4">Studio Hours</p>
              <p className="font-light text-sm leading-relaxed text-muted-foreground">
                Mon – Sat · 10:00 — 19:00<br />Sunday · By appointment
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-ivory pb-24">
        <div className="container-luxe">
          <div className="aspect-[16/8] overflow-hidden border border-border">
            <iframe
              title="TinyToes Studio Location"
              src="https://www.google.com/maps?q=TinyToes+Photography+Studio,+8-5-357%2FA,+Raghavendra+Nagar,+Karimnagar,+Telangana+505001&output=embed"
              className="w-full h-full grayscale-[40%] contrast-[0.95]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, className = "", placeholder }: {
  label: string; name: string; type?: string; required?: boolean; className?: string; placeholder?: string;
}) {
  return (
    <div className={className}>
      <label className="eyebrow block mb-3">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-ink/30 focus:border-rosegold-deep outline-none py-3 font-light text-base transition-colors"
      />
    </div>
  );
}
