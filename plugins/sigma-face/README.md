# Sigma Face

Codex plugin for session wrapups, handoffs, and spec-first workflows.

## What it does

- `session-wrapup`: short end-of-session summary for mostly complete topics
- `session-handoff`: detailed continuation note for work that must be resumed
- `specme`: create a spec before demo or prototype work starts

## Generated output

- `work/session-end/`: timestamped notes
- `work/session-end/LATEST.md`: newest note pointer

## Development

From this directory:

```bash
node .codex/session-end.mjs wrapup
node .codex/session-end.mjs handoff
```
