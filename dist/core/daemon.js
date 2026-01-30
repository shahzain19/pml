import chokidar from "chokidar";
import { syncFolders } from "./syncFolders.js";
import { generateCursorRules } from "./generators/cursor.js";
import { generateCopilotRules } from "./generators/copilot.js";
import { ui } from "../utils/ui.js";
export function startWatcher() {
    ui.info("Watching project files…");
    const watcher = chokidar.watch(["src", "package.json", "tsconfig.json"], {
        ignored: /node_modules/,
        ignoreInitial: true,
    });
    watcher.on("all", async (event, filePath) => {
        ui.event(event, filePath);
        try {
            syncFolders();
            ui.info("Project structure synced");
            generateCursorRules();
            ui.info("Cursor rules updated");
            generateCopilotRules();
            ui.info("Copilot instructions updated");
        }
        catch (err) {
            ui.error("Daemon failure", err.message);
        }
    });
}
