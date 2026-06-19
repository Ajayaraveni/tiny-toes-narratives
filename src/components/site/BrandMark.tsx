import logo from "@/assets/tinytoes-logo-v3.png.asset.json";

/**
 * TinyToes brand mark — official transparent logo.
 * Sized larger to feel like a luxury brand mark rather than a small icon.
 */
export function BrandMark({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const h =
    size === "lg"
      ? "h-28 md:h-36"
      : size === "sm"
      ? "h-14 md:h-16"
      : "h-16 md:h-20";
  return (
    <img
      src={logo.url}
      alt="Tiny Toes Photography Studio"
      className={`${h} w-auto object-contain select-none ${className}`}
      draggable={false}
    />
  );
}
