import fs from "fs";
import path from "path";
import { scanFolders } from "../core/scan.js";
import { ui } from "../utils/ui.js";

export function syncProject() {
  ui.header("PML Sync", "Synchronizing project structure");

  const spin = ui.spinner("Scanning folders…");

  const filePath = path.join(process.cwd(), "pml.json");
  const memory = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  memory.folders = scanFolders();

  fs.writeFileSync(filePath, JSON.stringify(memory, null, 2));

  spin.stop();
  ui.success("Project structure synced");
}
