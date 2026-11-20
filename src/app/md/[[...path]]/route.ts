import { markdownFor } from "@/lib/markdown";

// Reached through the Accept: text/markdown rewrite in next.config.ts.
export async function GET(_req: Request, { params }: { params: Promise<{ path?: string[] }> }) {
  const { path } = await params;
  const body = markdownFor(path);
  if (!body) return new Response("Not found", { status: 404 });
  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8", Vary: "Accept", "X-Markdown-Tokens": String(Math.ceil(body.length / 4)) },
  });
}
