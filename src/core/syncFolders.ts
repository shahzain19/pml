  import fs from "fs";
import path from "path";
import { scanFolders } from "./scan.js";

export function syncFolders() {
  const filePath = path.join(process.cwd(), "pml.json");
  const memory = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  memory.folders = scanFolders();

  fs.writeFileSync(filePath, JSON.stringify(memory, null, 2));
}
