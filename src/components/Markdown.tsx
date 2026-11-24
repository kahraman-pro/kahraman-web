import Link from "next/link";
import type { ReactNode } from "react";

// Small, dependency-free markdown renderer for the app documents.
// Supports paragraphs (blank line between), "- " lists, **bold**, `code` and [text](url).
const linkClass = "cursor-pointer text-ink underline decoration-ink/25 underline-offset-[0.22em] transition-colors hover:text-pine hover:decoration-pine";

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`)/g;
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("[")) {
      const lm = tok.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (lm) {
        const [, label, href] = lm;
        if (href.startsWith("/")) nodes.push(<Link key={key++} href={href} className={linkClass}>{label}</Link>);
        else if (href.startsWith("mailto:")) nodes.push(<a key={key++} href={href} className={linkClass}>{label}</a>);
        else nodes.push(<a key={key++} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>{label}</a>);
      }
    } else if (tok.startsWith("**")) {
      nodes.push(<strong key={key++} className="font-semibold text-ink">{tok.slice(2, -2)}</strong>);
    } else {
      nodes.push(<code key={key++} className="rounded-md bg-mint-soft px-1.5 py-0.5 text-[0.88em]">{tok.slice(1, -1)}</code>);
    }
    last = m.index + tok.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function Markdown({ content }: { content: string }) {
  const blocks: ReactNode[] = [];
  let list: ReactNode[] | null = null;
  let para: string[] = [];

  const flushPara = () => {
    if (para.length) {
      blocks.push(<p key={`p-${blocks.length}`} className="mb-4 last:mb-0">{renderInline(para.join(" "))}</p>);
      para = [];
    }
  };
  const flushList = () => {
    if (list) {
      blocks.push(<ul key={`ul-${blocks.length}`} className="mb-4 flex list-none flex-col gap-2.5 p-0 last:mb-0">{list}</ul>);
      list = null;
    }
  };

  for (const line of content.split("\n")) {
    if (!line.trim()) {
      flushPara();
      flushList();
    } else if (/^[-*]\s/.test(line)) {
      flushPara();
      list ??= [];
      list.push(
        <li key={`li-${list.length}`} className="relative pl-6 before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-3 before:bg-pine/60 before:content-['']">
          {renderInline(line.replace(/^[-*]\s/, ""))}
        </li>,
      );
    } else {
      flushList();
      para.push(line.trim());
    }
  }
  flushPara();
  flushList();

  return <div className="max-w-[66ch] text-[1.02rem] leading-[1.72] text-ink/75">{blocks}</div>;
}
