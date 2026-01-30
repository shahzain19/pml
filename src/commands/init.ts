import fs from "fs";
import path from "path";
import { ui } from "../utils/ui.js";

export function initProject() {
  ui.header("PML Init", "Project Memory Layer");

  const filePath = path.join(process.cwd(), "pml.json");

  if (fs.existsSync(filePath)) {
    ui.warn("pml.json already exists");
    return;
  }

  const memory = {
    project: {
      name: path.basename(process.cwd()),
      language: "TypeScript",
    },
    stack: {},
    rules: [],
    folders: {},
    decisions: [],
  };

  fs.writeFileSync(filePath, JSON.stringify(memory, null, 2));
  ui.success("Initialized pml.json");
}
