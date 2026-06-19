import logo from "@/assets/tinytoes-logo-v2.png.asset.json";

/**
 * TinyToes brand mark — uses the official uploaded logo.
 * mix-blend-multiply removes the logo's white background visually
 * against the site's ivory / cream surfaces, keeping perfect brand fidelity.
 */
export function BrandMark({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const h = size === "lg" ? "h-20 md:h-24" : size === "sm" ? "h-10" : "h-12 md:h-14";
  return (
    <img
      src={logo.url}
      alt="Tiny Toes Photography Studio"
      className={`${h} w-auto object-contain mix-blend-multiply select-none ${className}`}
      draggable={false}
    />
  );
}
