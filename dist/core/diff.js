import { execSync } from "child_process";
export function getGitDiff() {
    try {
        return execSync("git diff", { encoding: "utf-8" });
    }
    catch {
        return "";
    }
}
