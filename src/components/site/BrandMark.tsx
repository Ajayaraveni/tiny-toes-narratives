/**
 * TinyToes brand mark — clean transparent SVG logo.
 * Replaces the uploaded PNG (which had a visible white background)
 * with a premium, scalable inline mark that integrates naturally
 * over any nav background.
 */
export function BrandMark({ className = "", showWordmark = true }: { className?: string; showWordmark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="h-10 md:h-11 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="rg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E0C4AE" />
            <stop offset="1" stopColor="#B07A5E" />
          </linearGradient>
        </defs>
        {/* Larger foot */}
        <g fill="url(#rg)">
          <ellipse cx="22" cy="36" rx="10" ry="13" />
          <circle cx="13" cy="22" r="2.6" />
          <circle cx="17.5" cy="18" r="2.2" />
          <circle cx="22.5" cy="16.5" r="2" />
          <circle cx="27" cy="18" r="1.8" />
          <circle cx="31" cy="20.5" r="1.5" />
        </g>
        {/* Smaller foot */}
        <g fill="url(#rg)" opacity="0.85">
          <ellipse cx="46" cy="44" rx="7" ry="9" />
          <circle cx="40" cy="34.5" r="1.8" />
          <circle cx="43.5" cy="32" r="1.6" />
          <circle cx="47" cy="31" r="1.4" />
          <circle cx="50.5" cy="32" r="1.3" />
          <circle cx="53" cy="34" r="1.1" />
        </g>
      </svg>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className="font-script text-2xl md:text-[1.7rem] text-rosegold-deep"
            style={{ lineHeight: 1 }}
          >
            Tiny Toes
          </span>
          <span className="eyebrow !text-[0.55rem] mt-1.5 !tracking-[0.32em]">
            Photography Studio
          </span>
        </span>
      )}
    </span>
  );
}
