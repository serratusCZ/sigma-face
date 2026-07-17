# Project Instructions

This repository is the marketplace root for the `sigma-face` Codex plugin.

Canonical plugin location:
- `plugins/sigma-face/`

Canonical session-end workflow:
- Use `plugins/sigma-face/.codex/session-end.config.json` as the source of truth.
- Generate notes with `node plugins/sigma-face/.codex/session-end.mjs <wrapup|handoff>`.
- The plugin-local latest pointer lives at `plugins/sigma-face/work/session-end/LATEST.md`.

Repository layout:
- `.agents/plugins/marketplace.json` defines the local marketplace entry.
- `plugins/sigma-face/` is the distributable plugin package.
- `work/` at the repo root is scratch space only.

Starting a fresh session:
- Read `plugins/sigma-face/work/session-end/LATEST.md` first if it exists.
- Then read the relevant note under `plugins/sigma-face/work/session-end/`.

