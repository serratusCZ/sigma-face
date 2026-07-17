# Sigma Face

Codex plugin for session wrapups and handoffs.

## What it does

- `session-wrapup`: short end-of-session summary for mostly complete topics
- `session-handoff`: detailed continuation note for work that must be resumed

## Generated output

- `work/session-end/`: timestamped notes
- `work/session-end/LATEST.md`: newest note pointer

## Development

From this directory:

```bash
node .codex/session-end.mjs wrapup
node .codex/session-end.mjs handoff
```

