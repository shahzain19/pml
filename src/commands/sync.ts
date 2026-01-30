import { ui } from "../utils/ui.js";
import { scanFolders } from "../core/scan.js";
import { loadMemory, saveMemory } from "../core/config.js";

export function syncProject() {
  ui.header("PML Sync", "Synchronizing project structure");

  const spin = ui.spinner("Scanning folders…");

  try {
    const { memory, root } = loadMemory();
    memory.folders = scanFolders(root);
    saveMemory(memory, root);
  } catch (err) {
    ui.error((err as Error).message);
    process.exit(1);
  }

  spin.stop();
  ui.success("Project structure synced");
}
