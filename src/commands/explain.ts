import fs from "fs";
import path from "path";
import { ui } from "../utils/ui.js";

export function explain(topic: string) {
  ui.header("EXPLAIN", "Filtered project context");

  const spin = ui.spinner("Building explanation…");

  const filePath = path.join(process.cwd(), "pml.json");
  const memory = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const output = {
    project: memory.project,
    stack: memory.stack,
    rules: memory.rules.filter((r: string) =>
      r.toLowerCase().includes(topic.toLowerCase())
    ),
    folders: memory.folders,
  };

  spin.stop();

  ui.info("=== CONTEXT START ===");
  console.log(JSON.stringify(output, null, 2));
  ui.info("=== CONTEXT END ===");
}
