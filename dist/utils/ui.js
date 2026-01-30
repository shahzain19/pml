// src/utils/ui.ts
import chalk from "chalk";
import boxen from "boxen";
import ora from "ora";
import path from "path";
export const ui = {
    header(title, subtitle) {
        console.log(boxen(chalk.bold(title) +
            (subtitle ? "\n" + chalk.dim(subtitle) : ""), { padding: 1, borderStyle: "round" }));
    },
    spinner(text) {
        return ora({ text }).start();
    },
    // ─────────────────────────────
    // Core daemon signals
    // ─────────────────────────────
    event(type, file) {
        const symbol = type === "add"
            ? chalk.green("＋")
            : type === "unlink"
                ? chalk.red("－")
                : chalk.blue("●");
        console.log(`${symbol} ${chalk.bold(type.toUpperCase())} ${chalk.dim(path.relative(process.cwd(), file))}`);
    },
    success(text) {
        console.log(chalk.green("✓ " + text));
    },
    info(text) {
        console.log(chalk.gray("• " + text));
    },
    warn(text) {
        console.log(chalk.yellow("⚠ " + text));
    },
    error(title, details) {
        console.log(chalk.red.bold("✗ " + title));
        if (details) {
            console.log(chalk.red("  " + details));
        }
    },
    violation(rule, file) {
        console.log(chalk.red.bold("✗ VIOLATION"));
        console.log(chalk.red("  Rule: ") + chalk.white(rule));
        if (file) {
            console.log(chalk.red("  File: ") +
                chalk.dim(path.relative(process.cwd(), file)));
        }
    },
};
