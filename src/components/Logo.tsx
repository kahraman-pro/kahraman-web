// "MK" monogram: the right leg of the M is also the stem of the K.
// Square terminals, one stroke weight; the clip keeps every end flat.
export function LogoMark({ className = "", title }: { className?: string; title?: string }) {
  return (
    <svg className={className} viewBox="0 0 260 174" role={title ? "img" : undefined} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <defs>
        <clipPath id="mk-clip">
          <rect width="260" height="174" />
        </clipPath>
      </defs>
      <g clipPath="url(#mk-clip)" fill="none" stroke="currentColor" strokeWidth="25" strokeLinejoin="miter" strokeMiterlimit="10">
        <path d="M12.5 180V0L77 104L140.5 0V180" />
        <path d="M140.5 118L268 -8" />
        <path d="M178 82L272 186" />
      </g>
    </svg>
  );
}
