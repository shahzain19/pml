#!/usr/bin/env node
import { Command } from "commander";
import { ui } from "./utils/ui.js";
import { daemon } from "./commands/daemon.js";
import { initProject } from "./commands/init.js";
import { rememberRule } from "./commands/remember.js";
import { explain } from "./commands/explain.js";
import { syncProject } from "./commands/sync.js";
import { check } from "./commands/check.js";
import { diffCheck } from "./commands/diffCheck.js";
import { context } from "./commands/context.js";
const program = new Command();
program
    .name("pml")
    .description("Project Memory Layer")
    .version("0.1.0");
program.action(() => {
    ui.header("PML", "Deterministic project context for humans + AI");
    ui.info("Use `pml context <topic>` to generate authoritative context");
});
program.command("init").action(initProject);
program.command("remember <text>").action(rememberRule);
program.command("sync").action(syncProject);
program.command("explain <topic>").action(explain);
program.command("diff-check").action(diffCheck);
program.command("context <topic>").action(context);
program.command("check").action(check);
program.command("daemon").action(daemon);
program.parse();
