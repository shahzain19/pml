import fs from "fs";
import path from "path";

export function generateCursorRules() {
  const memory = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "pml.json"), "utf-8")
  );

  const content = `# Project Rules (Authoritative)

This project is governed by PML.

Rules:
${memory.rules.map((r: string) => "- " + r).join("\n")}

Folders:
${Object.keys(memory.folders).map(f => "- " + f).join("\n")}
`;

  const dir = path.join(process.cwd(), ".cursor");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  fs.writeFileSync(path.join(dir, "rules.md"), content);
}
