#!/usr/bin/env node
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";

const repoRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const configPath = join(repoRoot, ".codex", "session-end.config.json");
const config = JSON.parse(await readFile(configPath, "utf8"));

const mode = process.argv[2];
if (!mode || !config.hooks[`session-${mode}`]) {
  console.error("Usage: node .codex/session-end.mjs <wrapup|handoff>");
  process.exit(1);
}

const hook = config.hooks[`session-${mode}`];
const now = new Date();
const timestamp = now
  .toISOString()
  .replaceAll(":", "-")
  .replace(/\.\d{3}Z$/, "Z");
const outputPath = join(repoRoot, hook.outputPattern.replace("{{timestamp}}", timestamp));
const templatePath = join(repoRoot, hook.template);
const template = await readFile(templatePath, "utf8");

await mkdir(dirname(outputPath), { recursive: true });

const note = template
  .replaceAll("{{DATE}}", now.toISOString())
  .replaceAll("{{MODE}}", mode)
  .replaceAll("{{TIMESTAMP}}", timestamp)
  .replaceAll("{{TITLE}}", mode === "handoff" ? "会话交接" : "会话总结");

await writeFile(outputPath, note, "utf8");

const latestPath = join(repoRoot, config.latestFile);
const latestRelative = relative(dirname(latestPath), outputPath).replaceAll("\\", "/");
const latest = [
  "# Latest Session Note",
  "",
  `- mode: ${mode}`,
  `- file: [${latestRelative}](${latestRelative})`,
  `- generated_at: ${now.toISOString()}`,
  "",
  "Read this first in the next session.",
  "",
].join("\n");

await writeFile(latestPath, latest, "utf8");

console.log(outputPath);
