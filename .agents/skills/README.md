# ~/.agents/skills — the one skills folder

Every agent on this Mac reads its skills from here. The folder is the original; the
agents' own folders are symlinks to it:

| Link | Points to |
| --- | --- |
| `~/.claude/skills` | `~/.agents/skills` |
| `~/.gemini/config/skills` | `~/.agents/skills` |
| `~/.gemini/antigravity-cli/skills` | `~/.agents/skills` |
| `<repo>/.agents/skills` (per project) | `~/.agents/skills` |

So a skill installed once shows up in Claude Code, in Antigravity (IDE and terminal) and
in every project, and nothing has to be copied twice.

## A new project

```bash
mkdir -p <repo>/.agents && ln -s ~/.agents/skills <repo>/.agents/skills
echo '.agents/' >> <repo>/.git/info/exclude   # a local symlink, not part of the repo
```

## Adding a skill

```bash
npx skills@latest add <owner>/<repo> -g -s <skill-name> -a claude-code -y --copy
npx skills@latest list -g          # what is installed
npx skills@latest update -g        # pull newer versions
```

`-g` installs for the whole machine (this folder), `--copy` writes real files instead of a
second symlink, and `-a claude-code` is enough: the link above hands it to the other agents.
`~/.agents/.skill-lock.json` records where each one came from. Sources used so far:
`anthropics/skills`, `vercel-labs/skills`, `vercel-labs/agent-skills`,
`callstackincubator/agent-skills`, plus the Claude plugin skills (dart-flutter, impeccable,
paddle, the claude-for-legal set) copied in by hand.

## What is NOT here

Claude Code carries a handful of skills inside its own binary, so they are not files anyone
can copy or share with Antigravity: `dataviz`, `simplify`, `code-review`-as-slash-command,
`security-review`, `init`, `run`, `loop`, `schedule`, `update-config`, `keybindings-help`,
`fewer-permission-prompts`, `workflow-authoring`, `plugin-authoring`, `claude-in-chrome`.
They are Claude Code's own plumbing (its settings, its hooks, its workflows), so there is
nothing to miss on the Antigravity side. The portable twins of the useful ones are here:
`claude-api`, `code-review`, `codebase-design`, `no-ai-slop`, `frontend-design`,
`web-design-guidelines`, `impeccable`, `webapp-testing`, `skill-creator`.
