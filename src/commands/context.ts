import clipboard from "clipboardy";
import { buildContext } from "../core/context.js";
import { ui } from "../utils/ui.js";

export function context(topic: string) {
  ui.header("PROJECT CONTEXT", "Authoritative project memory");

  const spin = ui.spinner("Building context…");
  const output = buildContext(topic);
  clipboard.writeSync(output);
  spin.stop();

  ui.success("Context copied to clipboard");
  ui.info("Paste this into Cursor / ChatGPT before asking questions");
}