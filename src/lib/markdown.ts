import { principles, results, site, steps } from "@/content/site";
import { getService, services } from "@/content/services";
import { getProject, projects } from "@/content/work";

// Markdown twins of the main pages, served when an agent sends Accept: text/markdown.

const contact = () =>
  [
    `- Email: ${site.email}`,
    site.bookingUrl ? `- Book a free 30 minute call: ${site.bookingUrl}` : "",
    `- Based in ${site.location} (${site.timezone}). Replies within one working day.`,
  ]
    .filter(Boolean)
    .join("\n");

const home = () => `# ${site.name}

> ${site.description}

${site.role}. I work alone with small and growing teams, so you talk to me directly and I do the work myself.

## Services
${services.map((s) => `- [${s.title.replace(/\.$/, "")}](${site.url}/services/${s.slug}): ${s.short}`).join("\n")}

## Selected work
${projects.map((p) => `- [${p.name}](${site.url}/work/${p.slug}): ${p.summary}`).join("\n")}

## How I work
${principles.map((p) => `- **${p.title}** ${p.text}`).join("\n")}

## Numbers from the work
${results.map((r) => `- **${r.value}** ${r.text} (${r.who})`).join("\n")}

## Process
${steps.map((s) => `1. **${s.title}** (${s.when}): ${s.text}`).join("\n")}

## Contact
${contact()}
`;

const about = () => `# About ${site.name}

${site.role} in ${site.location}. I have built software professionally since 2021: stores, backend services, integrations and platform migrations for 15 retail and corporate brands (about 3M monthly visits), and my own products, including SetupBook, a live AI product.

I am not tied to one language or framework. I pick the tools that fit the job, use AI every day to build faster, and check and test everything myself.

- LinkedIn: ${site.linkedin}
- GitHub: ${site.github}
- Upwork: ${site.upwork}

## Contact
${contact()}
`;

const contactPage = () => `# Contact

Send a short message with your project, your tools and your goal. I will tell you what I can do, how long it takes and what it may cost.

${contact()}
`;

const servicesIndex = () => `# Services

${services.map((s) => `## [${s.title}](${site.url}/services/${s.slug})\n${s.short}`).join("\n\n")}
`;

const workIndex = () => `# Work

${projects.map((p) => `## [${p.name}](${site.url}/work/${p.slug})\n${p.kind}, ${p.year}. ${p.summary}`).join("\n\n")}
`;

export function markdownFor(path: string[] = []): string | undefined {
  const [a, b] = path;
  if (!a) return home();
  if (path.length === 1) {
    if (a === "about") return about();
    if (a === "contact") return contactPage();
    if (a === "services") return servicesIndex();
    if (a === "work") return workIndex();
  }
  if (path.length === 2 && a === "services") {
    const s = getService(b);
    if (!s) return;
    return `# ${s.title}\n\n${s.intro}\n\n## ${s.painsTitle}\n${s.pains.map((p) => `- **${p.title}** ${p.text}`).join("\n")}\n\n## What I build\n${s.builds.map((p) => `- **${p.title}** ${p.text}`).join("\n")}\n\n## Contact\n${contact()}\n`;
  }
  if (path.length === 2 && a === "work") {
    const p = getProject(b);
    if (!p) return;
    return `# ${p.name}\n\n${p.kind}, ${p.year}\n\n${p.summary}\n\n## Challenge\n${p.challenge}\n\n## Approach\n${p.approach}\n\n## Outcome\n${p.outcome}\n\n${p.facts.map((f) => `- ${f.label}: ${f.value}`).join("\n")}\n`;
  }
}

