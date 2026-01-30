import fs from "fs";
import path from "path";
import { PMLMemory } from "./memory.js";

const CONFIG_FILENAME = "pml.json";

export function findProjectRoot(startDir: string = process.cwd()): string | null {
  let currentDir = startDir;
  while (currentDir !== path.parse(currentDir).root) {
    if (fs.existsSync(path.join(currentDir, CONFIG_FILENAME))) {
      return currentDir;
    }
    currentDir = path.dirname(currentDir);
  }
  // Check root as well
  if (fs.existsSync(path.join(currentDir, CONFIG_FILENAME))) {
    return currentDir;
  }
  return null;
}

export function loadMemory(startDir: string = process.cwd()): { memory: PMLMemory; root: string } {
  const root = findProjectRoot(startDir);
  if (!root) {
    throw new Error("No pml.json found. Run `pml init` in the project root.");
  }

  const filePath = path.join(root, CONFIG_FILENAME);
  try {
    const memory = JSON.parse(fs.readFileSync(filePath, "utf-8")) as PMLMemory;
    return { memory, root };
  } catch (err) {
    throw new Error(`Failed to parse pml.json: ${(err as Error).message}`);
  }
}

export function saveMemory(memory: PMLMemory, root: string) {
  const filePath = path.join(root, CONFIG_FILENAME);
  fs.writeFileSync(filePath, JSON.stringify(memory, null, 2));
}
