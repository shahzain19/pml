import fs from "fs";
import path from "path";
import { ui } from "../utils/ui.js";

export function rememberRule(text: string) {
  ui.header("REMEMBER", "Persisting project rule");

  const spin = ui.spinner("Saving rule…");

  const filePath = path.join(process.cwd(), "pml.json");
  const memory = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  memory.rules.push(text);

  fs.writeFileSync(filePath, JSON.stringify(memory, null, 2));

  spin.stop();
  ui.success("Rule saved");
}
