import fs from "fs";
import path from "path";
import { IGNORE_DIRS } from "./ignore.js";
export function scanFolders(root = process.cwd()) {
    const result = {};
    function walk(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            if (!entry.isDirectory())
                continue;
            if (IGNORE_DIRS.includes(entry.name))
                continue;
            const fullPath = path.join(dir, entry.name);
            const relative = path.relative(root, fullPath).replace(/\\/g, "/");
            result[`/${relative}`] = "auto-detected";
            walk(fullPath);
        }
    }
    walk(root);
    return result;
}
