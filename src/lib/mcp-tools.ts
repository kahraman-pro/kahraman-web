import { services } from "@/content/services";
import { site } from "@/content/site";
import { projects } from "@/content/work";

// The tools shared by the MCP endpoint (/mcp) and the in-browser WebMCP registration.
export type SiteTool = {
  name: string;
  description: string;
  inputSchema: { type: "object"; properties: Record<string, unknown>; required?: string[] };
  run: () => unknown;
};

export const siteTools: SiteTool[] = [
  {
    name: "get_contact_info",
    description: "How to reach Mustafa Kahraman: email, booking link for a free 30 minute call, location and reply time.",
    inputSchema: { type: "object", properties: {} },
    run: () => ({
      email: site.email,
      bookingUrl: site.bookingUrl ?? null,
      location: `${site.location} (${site.timezone})`,
      replyTime: "Within one working day",
    }),
  },
  {
    name: "list_services",
    description: "The consulting services offered: custom software, AI agents, AI consulting, integrations and rescue work.",
    inputSchema: { type: "object", properties: {} },
    run: () => services.map((s) => ({ title: s.title, summary: s.short, url: `${site.url}/services/${s.slug}` })),
  },
  {
    name: "list_projects",
    description: "Selected projects and case studies.",
    inputSchema: { type: "object", properties: {} },
    run: () => projects.map((p) => ({ name: p.name, kind: p.kind, summary: p.summary, url: `${site.url}/work/${p.slug}` })),
  },
];
