import { siteTools } from "@/lib/mcp-tools";
import { site } from "@/content/site";

export const dynamic = "force-static";

// MCP Server Card (SEP-1649).
export function GET() {
  return Response.json(
    {
      name: "kahraman-pro",
      title: `${site.name}, software and AI consulting`,
      description: "Read-only facts about Mustafa Kahraman's services, projects and how to book a call.",
      version: "1.0.0",
      protocolVersion: "2025-06-18",
      websiteUrl: site.url,
      endpoint: `${site.url}/mcp`,
      transport: { type: "streamable-http", url: `${site.url}/mcp` },
      capabilities: { tools: { listChanged: false } },
      authentication: { required: false },
      tools: siteTools.map(({ name, description }) => ({ name, description })),
    },
    { headers: { "Access-Control-Allow-Origin": "*" } },
  );
}
