import { loadMemory } from "./config.js";

export function buildContext(topic: string) {
  const { memory } = loadMemory();

  return `
PROJECT
${memory.project.name} — ${memory.project.language}

STACK
${JSON.stringify(memory.stack, null, 2)}

RULES
${memory.rules.join("\n")}

FOLDERS
${Object.keys(memory.folders).join("\n")}

TOPIC
${topic}
`.trim();
}
