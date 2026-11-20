"use client";

import { useEffect } from "react";
import { siteTools } from "@/lib/mcp-tools";

type ModelContext = {
  registerTool: (tool: unknown) => unknown;
  unregisterTool?: (name: string) => void;
};

// Exposes the site's read-only tools to in-browser agents through WebMCP.
export function WebMcp() {
  useEffect(() => {
    const mc = (navigator as Navigator & { modelContext?: ModelContext }).modelContext;
    if (!mc?.registerTool) return;
    const names: string[] = [];
    for (const t of siteTools) {
      try {
        mc.registerTool({
          name: t.name,
          description: t.description,
          inputSchema: t.inputSchema,
          execute: async () => ({ content: [{ type: "text", text: JSON.stringify(t.run()) }] }),
        });
        names.push(t.name);
      } catch {
        // Already registered (for example after a hot reload).
      }
    }
    return () => names.forEach((n) => mc.unregisterTool?.(n));
  }, []);
  return null;
}
