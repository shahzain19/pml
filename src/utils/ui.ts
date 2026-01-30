// src/utils/ui.ts
import chalk from "chalk";
import boxen from "boxen";
import ora from "ora";
import path from "path";

export const ui = {
  header(title: string, subtitle?: string) {
    console.log(
      boxen(
        chalk.bold(title) +
          (subtitle ? "\n" + chalk.dim(subtitle) : ""),
        { padding: 1, borderStyle: "round" }
      )
    );
  },

  spinner(text: string) {
    return ora({ text }).start();
  },

  // ─────────────────────────────
  // Core daemon signals
  // ─────────────────────────────

  event(type: string, file: string) {
    const symbol =
      type === "add"
        ? chalk.green("＋")
        : type === "unlink"
        ? chalk.red("－")
        : chalk.blue("●");

    console.log(
      `${symbol} ${chalk.bold(type.toUpperCase())} ${chalk.dim(
        path.relative(process.cwd(), file)
      )}`
    );
  },

  success(text: string) {
    console.log(chalk.green("✓ " + text));
  },

  info(text: string) {
    console.log(chalk.gray("• " + text));
  },

  warn(text: string) {
    console.log(chalk.yellow("⚠ " + text));
  },

  error(title: string, details?: string) {
    console.log(chalk.red.bold("✗ " + title));
    if (details) {
      console.log(chalk.red("  " + details));
    }
  },

  violation(rule: string, file?: string) {
    console.log(chalk.red.bold("✗ VIOLATION"));
    console.log(chalk.red("  Rule: ") + chalk.white(rule));
    if (file) {
      console.log(
        chalk.red("  File: ") +
          chalk.dim(path.relative(process.cwd(), file))
      );
    }
  },
};
