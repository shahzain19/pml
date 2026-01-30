import { ui } from "../utils/ui.js";
import { loadMemory } from "../core/config.js";

export function explain(topic: string) {
  ui.header("EXPLAIN", "Filtered project context");

  const spin = ui.spinner("Building explanation…");

  try {
    const { memory } = loadMemory();

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
  } catch (err) {
    ui.error((err as Error).message);
  }
}
