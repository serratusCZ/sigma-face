# sigma-face

Marketplace root for a Codex plugin that captures session wrapups and handoffs.

## Layout

- `plugins/sigma-face/`: installable plugin package
- `work/session-end/`: local session notes while developing in this repo
- `.agents/plugins/marketplace.json`: local marketplace entry for the plugin

## Local install loop

1. Add the marketplace root:
   - `codex plugin marketplace add .agents/plugins`
2. Install the plugin:
   - `codex plugin add sigma-face@sigma-face-marketplace`
3. Start a new Codex thread after reinstalling so the plugin is picked up.

## Development target

- Edit the distributable plugin under `plugins/sigma-face/`.
- Generate notes with `node plugins/sigma-face/.codex/session-end.mjs wrapup` or `handoff`.
