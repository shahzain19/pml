import { ui } from "../utils/ui.js";
import { startWatcher } from "../core/daemon.js";
export function daemon() {
    ui.header("PML Daemon", "Continuous project authority");
    startWatcher();
}
