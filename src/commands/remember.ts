import { ui } from "../utils/ui.js";
import { loadMemory, saveMemory } from "../core/config.js";

export function rememberRule(text: string) {
  ui.header("REMEMBER", "Persisting project rule");

  const spin = ui.spinner("Saving rule…");

  try {
    const { memory, root } = loadMemory();
    memory.rules.push(text);
    saveMemory(memory, root);
  } catch (err) {
    ui.error((err as Error).message);
    process.exit(1);
  }

  spin.stop();
  ui.success("Rule saved");
}
