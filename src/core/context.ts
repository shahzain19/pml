import fs from "fs";
import path from "path";

export function buildContext(topic: string) {
  const memory = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "pml.json"), "utf-8")
  );

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
