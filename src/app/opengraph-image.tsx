import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// The share image used by every page that has no image of its own (1200 × 630).
export const alt = `${site.name}, software engineer and AI consultant`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col justify-between bg-[#fafaf4] p-20 text-[#141413]">
        <div tw="flex items-center">
          <svg width="96" height="64" viewBox="0 0 260 174">
            <g fill="none" stroke="#141413" strokeWidth="25" strokeLinejoin="miter" strokeMiterlimit="10">
              <path d="M12.5 174V12L77 104L140.5 12V174" />
              <path d="M140.5 118L250 12" />
              <path d="M178 82L262 174" />
            </g>
          </svg>
          <div tw="ml-8 flex h-16 border-l-2 border-[#14141333] pl-8 text-4xl items-center">{site.name}</div>
        </div>
        <div tw="flex flex-col">
          <div tw="text-[76px] leading-[1.05] tracking-tight" style={{ letterSpacing: "-0.04em" }}>
            Software and AI, built for how your team works.
          </div>
          <div tw="mt-8 flex text-3xl text-[#141413b3]">Software engineer and AI consultant · kahraman.pro</div>
        </div>
      </div>
    ),
    size,
  );
}
