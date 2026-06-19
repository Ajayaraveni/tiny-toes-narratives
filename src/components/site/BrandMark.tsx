import logo from "@/assets/tinytoes-logo-v4.png.asset.json";

/**
 * TinyToes brand mark — transparent logo (white background removed).
 * No container, no box — appears as a true brand identity.
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
      ? "h-36 md:h-48"
      : size === "sm"
      ? "h-20 md:h-24"
      : "h-24 md:h-28";
  return (
    <img
      src={logo.url}
      alt="Tiny Toes Photography"
      className={`${h} w-auto object-contain select-none ${className}`}
      draggable={false}
    />
  );
}
