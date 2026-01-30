import { ui } from "../utils/ui.js";
import { startWatcher } from "../core/daemon.js";
import { findProjectRoot } from "../core/config.js";

export function daemon() {
  ui.header("PML Daemon", "Continuous project authority");

  const root = findProjectRoot();
  if (!root) {
    ui.error("No pml.json found. Run `pml init` in the project root.");
    process.exit(1);
  }

  process.chdir(root);
  ui.info(`Watching root: ${root}`);
  startWatcher();
}
