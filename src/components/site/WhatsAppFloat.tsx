import icon from "@/assets/whatsapp-icon.png.asset.json";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/916309288181?text=Hello%20TinyToes%20Photography%20Studio,%20I%20would%20like%20to%20know%20more%20about%20your%20photography%20sessions."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 group"
    >
      <span className="absolute inset-2 rounded-full bg-[#25D366]/40 animate-ping" />
      <img
        src={icon.url}
        alt="WhatsApp"
        className="relative w-14 h-14 md:w-16 md:h-16 drop-shadow-[0_10px_25px_rgba(37,211,102,0.35)] transition-transform duration-300 group-hover:scale-110"
        draggable={false}
      />
    </a>
  );
}
