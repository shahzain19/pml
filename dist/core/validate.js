import fs from "fs";
import path from "path";
export function validateSuggestion(text) {
    const memory = JSON.parse(fs.readFileSync(path.join(process.cwd(), "pml.json"), "utf-8"));
    const warnings = [];
    // Rule violations
    for (const rule of memory.rules) {
        if (text.toLowerCase().includes(rule.toLowerCase().split(" ")[1])) {
            warnings.push(`Violates rule: "${rule}"`);
        }
    }
    // Folder hallucinations
    const mentionedPaths = text.match(/\/[a-zA-Z0-9\/_-]+/g) || [];
    for (const p of mentionedPaths) {
        if (!memory.folders[p]) {
            warnings.push(`Unknown path referenced: ${p}`);
        }
    }
    return warnings;
}
export function validateDiff(diff) {
    const memory = JSON.parse(fs.readFileSync(path.join(process.cwd(), "pml.json"), "utf-8"));
    const warnings = [];
    // Detect touched files
    const fileMatches = diff.match(/^\+\+\+ b\/(.+)$/gm) || [];
    for (const line of fileMatches) {
        const filePath = "/" + line.replace("+++ b/", "");
        const allowed = Object.keys(memory.folders).some(f => filePath.startsWith(f));
        if (!allowed) {
            warnings.push(`Illegal file modification: ${filePath}`);
        }
    }
    // Rule violations
    for (const rule of memory.rules) {
        if (diff.toLowerCase().includes(rule.toLowerCase())) {
            warnings.push(`Violates rule: "${rule}"`);
        }
    }
    return warnings;
}
