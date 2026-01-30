import { validateSuggestion } from "../core/validate.js";
import { ui } from "../utils/ui.js";

export function check(text: string) {
  ui.header("CHECK", "Validating suggestion against memory");

  const spin = ui.spinner("Running validation…");

  const warnings = validateSuggestion(text);
  spin.stop();

  if (warnings.length === 0) {
    ui.success("No violations detected");
  } else {
    ui.warn(`${warnings.length} violation(s) detected`);
    warnings.forEach(w => ui.info("- " + w));
  }
}
