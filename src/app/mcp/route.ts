import { siteTools } from "@/lib/mcp-tools";
import { site } from "@/content/site";

// A small stateless MCP server (Streamable HTTP, JSON responses) exposing read-only facts about the site.
const PROTOCOL = "2025-06-18";
type Rpc = { jsonrpc: "2.0"; id?: string | number | null; method: string; params?: { name?: string } };

const ok = (id: Rpc["id"], result: unknown) => ({ jsonrpc: "2.0", id: id ?? null, result });
const err = (id: Rpc["id"], code: number, message: string) => ({ jsonrpc: "2.0", id: id ?? null, error: { code, message } });

function handle(msg: Rpc) {
  switch (msg.method) {
    case "initialize":
      return ok(msg.id, {
        protocolVersion: PROTOCOL,
        capabilities: { tools: {} },
        serverInfo: { name: "kahraman-pro", version: "1.0.0" },
      });
    case "ping":
      return ok(msg.id, {});
    case "tools/list":
      return ok(msg.id, { tools: siteTools.map(({ name, description, inputSchema }) => ({ name, description, inputSchema })) });
    case "tools/call": {
      const tool = siteTools.find((t) => t.name === msg.params?.name);
      if (!tool) return err(msg.id, -32602, "Unknown tool");
      return ok(msg.id, { content: [{ type: "text", text: JSON.stringify(tool.run(), null, 2) }] });
    }
    default:
      return err(msg.id, -32601, "Method not found");
  }
}

export async function POST(req: Request) {
  let body: Rpc | Rpc[];
  try {
    body = await req.json();
  } catch {
    return Response.json(err(null, -32700, "Parse error"), { status: 400 });
  }
  const msgs = Array.isArray(body) ? body : [body];
  const replies = msgs.filter((m) => m.id !== undefined).map(handle);
  if (!replies.length) return new Response(null, { status: 202 });
  return Response.json(Array.isArray(body) ? replies : replies[0]);
}

export function GET() {
  return new Response(`MCP endpoint for ${site.url}. Send JSON-RPC 2.0 requests with POST.`, { status: 405, headers: { Allow: "POST" } });
}
