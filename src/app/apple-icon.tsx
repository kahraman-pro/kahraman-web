import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div tw="flex h-full w-full items-center justify-center bg-[#131513]">
        <svg width="118" height="79" viewBox="0 0 260 174">
          <g fill="none" stroke="#cfe3d9" strokeWidth="25" strokeLinejoin="miter" strokeMiterlimit="10">
            <path d="M12.5 174V12L77 104L140.5 12V174" />
            <path d="M140.5 118L250 12" />
            <path d="M178 82L262 174" />
          </g>
        </svg>
      </div>
    ),
    size,
  );
}
