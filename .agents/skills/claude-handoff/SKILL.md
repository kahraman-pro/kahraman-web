---
name: claude-handoff
description: >-
  Use this skill when the user switches from Claude Code to Antigravity (AGY) after hitting a rate limit or asks to continue unfinished work from Claude ("claude'dan kalan işi devam ettir", "kaldığımız yerden devam et").
---

# Claude Code <-> AGY Handoff Skill

When the user switches from Claude Code to AGY mid-task:

1. **Read Working Style & Project Memory First:**
   - Read `/Users/musti/.claude/projects/-Users-musti-Documents-ALAZ-trading-journal-web/memory/musti-working-style.md`
   - Read `/Users/musti/.claude/projects/-Users-musti-Documents-ALAZ-trading-journal-web/memory/MEMORY.md`

2. **Find the Latest Claude Session Transcript (`.jsonl`):**
   - Run:
     ```bash
     ls -lt ~/.claude/projects/-Users-musti-Documents-ALAZ-trading-journal-web/*.jsonl | head -n 3
     ```
   - Extract the last 30 user/assistant text messages from the newest `.jsonl` file using `python3` or `jq` (ignoring large tool results) to see what Claude was doing right before the limit hit.

3. **Check Working Tree State:**
   - Run `git status --short` and `git diff --stat` to see uncommitted changes left by Claude.
   - Resume immediately from the exact step where Claude stopped without asking the user to re-explain.
