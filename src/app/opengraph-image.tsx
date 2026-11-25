import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// The share image used by every page that has no image of its own (1200 × 630):
// the letterhead on a bond-white sheet, set in the site's own serif.
export const alt = `${site.name}, software engineer and AI consultant`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = "#1c2f6e";

export default async function OpengraphImage() {
  const serif = await readFile(join(process.cwd(), "src/app/fonts/YoungSerif-Regular.ttf"));
  return new ImageResponse(
    (
      <div tw="flex h-full w-full bg-[#eceff3] p-8">
        <div tw="flex h-full w-full flex-col items-center justify-between rounded-[8px] bg-[#fcfcfb] px-20 pb-16 pt-14" style={{ color: ink }}>
          <div tw="flex flex-col items-center">
            <svg width="72" height="48" viewBox="0 0 260 174">
              <g fill="none" stroke={ink} strokeWidth="25" strokeLinejoin="miter" strokeMiterlimit="10">
                <path d="M12.5 174V12L77 104L140.5 12V174" />
                <path d="M140.5 118L250 12" />
                <path d="M178 82L262 174" />
              </g>
            </svg>
            <div tw="mt-5 text-[34px]" style={{ fontFamily: "Young Serif" }}>{site.name}</div>
            <div tw="mt-6 h-[1px] w-44" style={{ backgroundColor: "rgba(28,47,110,0.25)" }} />
          </div>
          <div tw="flex text-center text-[72px] leading-[1.05]" style={{ fontFamily: "Young Serif", letterSpacing: "-0.02em" }}>
            Software and AI, built for how your team works.
          </div>
          <div tw="flex text-[26px]" style={{ color: "rgba(28,47,110,0.78)" }}>{site.role} · {site.location}</div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Young Serif", data: serif, style: "normal", weight: 400 }] },
  );
}
