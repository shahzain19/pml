import fs from "fs";
import path from "path";
export function generateCopilotRules() {
    const memory = JSON.parse(fs.readFileSync(path.join(process.cwd(), "pml.json"), "utf-8"));
    const content = `You are assisting on this project.

You MUST follow these rules:
${memory.rules.map((r) => "- " + r).join("\n")}

Respect the existing folder structure.
Ask before introducing new dependencies.
`;
    const dir = path.join(process.cwd(), ".github");
    if (!fs.existsSync(dir))
        fs.mkdirSync(dir);
    fs.writeFileSync(path.join(dir, "copilot-instructions.md"), content);
}
