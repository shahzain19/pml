import { getGitDiff } from "../core/diff.js";
import { validateDiff } from "../core/validate.js";
import { ui } from "../utils/ui.js";
export function diffCheck() {
    ui.header("DIFF CHECK", "Validating git changes");
    const spin = ui.spinner("Analyzing diff…");
    const diff = getGitDiff();
    if (!diff) {
        spin.stop();
        ui.warn("No git diff found");
        return;
    }
    const warnings = validateDiff(diff);
    spin.stop();
    if (warnings.length === 0) {
        ui.success("Diff is compliant with project memory");
    }
    else {
        ui.warn(`${warnings.length} violation(s) detected`);
        warnings.forEach(w => ui.info("- " + w));
    }
}
