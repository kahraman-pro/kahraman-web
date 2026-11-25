import { site } from "@/content/site";

// The İzmir postmark: two rings, the place on the top arc, the time zone on the bottom arc, the
// monogram in the middle and wavy cancel lines trailing left. Decorative; the same facts are in the text.
export function Postmark({ className = "" }: { className?: string }) {
  const place = site.location.toLocaleUpperCase("tr-TR").replace(", ", " · ");
  return (
    <svg viewBox="0 0 210 140" aria-hidden="true" className={className}>
      <defs>
        <path id="pm-top" d="M101 70 A 44 44 0 0 1 189 70" />
        <path id="pm-bottom" d="M93 70 A 52 52 0 0 0 197 70" />
      </defs>
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <circle cx="145" cy="70" r="62" strokeWidth="3" />
        <circle cx="145" cy="70" r="33" strokeWidth="1.5" />
        {[46, 58, 70, 82, 94].map((y) => (
          <path key={y} strokeWidth="2.5" d={`M4 ${y} q 9 -7 18 0 t 18 0 t 18 0 t 18 0 t 18 0`} />
        ))}
      </g>
      <g fill="currentColor" fontFamily="var(--font-schibsted), sans-serif" fontWeight="600" letterSpacing="1.6">
        <text fontSize="11.5" textAnchor="middle">
          <textPath href="#pm-top" startOffset="50%">{place}</textPath>
        </text>
        <text fontSize="12.5" textAnchor="middle">
          <textPath href="#pm-bottom" startOffset="50%">{site.timezone}</textPath>
        </text>
      </g>
      <g transform="translate(127 58) scale(0.14)" fill="none" stroke="currentColor" strokeWidth="25">
        <path d="M12.5 174V12L77 104L140.5 12V174" />
        <path d="M140.5 118L250 12" />
        <path d="M178 82L262 174" />
      </g>
    </svg>
  );
}
