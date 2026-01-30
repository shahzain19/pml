# PML — Project Memory Layer

> **Continuous project authority for humans + AI**

PML is a lightweight system that **remembers your project so you don’t have to** — and makes sure AI tools don’t forget either.

It watches your codebase, tracks decisions, enforces rules, and continuously feeds *correct context* to tools like **Cursor** and **GitHub Copilot**.

No dashboards.  
No tickets.  
No ClickUp clones.

Just **memory, authority, and flow**.

---

## Why PML Exists

Modern development is broken in a subtle way:

- AI can scaffold fast, but **forgets context**
- Rules live in your head, not the repo
- Decisions disappear after one prompt
- Folder structures slowly rot
- AI tools confidently violate constraints

You end up:
- Re-explaining the project
- Fighting hallucinations
- Writing longer prompts
- Losing trust in automation

**PML fixes this by becoming the project’s long-term memory.**

---

## What PML Does

### 🧠 Persistent Project Memory
Stores:
- Project identity
- Folder structure
- Rules & constraints
- Architectural decisions

All in a single file: `pml.json`

---

### 👁 Continuous Awareness (Daemon)
PML runs quietly in the background and:
- Watches file changes
- Detects structure drift
- Regenerates AI instructions automatically

It doesn’t interrupt — **unless something matters**.

---

### 🧭 Project Authority
PML doesn’t just observe. It enforces.

- New folders? → flagged
- Forbidden libraries? → violations
- AI drift? → corrected at the source

This turns your project from *suggestion-based* to **rule-based**.

---

### 🤖 AI-Native (but not AI-dependent)

PML generates and maintains:
- `.cursor/rules.md`
- `.github/copilot-instructions.md`

So your AI tools always receive:
- Correct structure
- Current rules
- Real decisions

No more “please remember…” prompts.

---

## Installation

npm install -g pml
or clone and run locally during development.

Quick Start
Initialize memory
pml init
Creates pml.json in your project.

Sync project structure
pml sync
Scans folders and updates memory.

Remember a rule
pml remember "Never use shadcn in this project"
Rules become enforceable constraints.

Explain context (for humans or AI)
pml explain auth
Outputs a clean, focused context snapshot.

Copy AI-ready context
pml context auth
Copies structured project context directly to clipboard.

Run the daemon
pml daemon
PML now watches your project continuously.

Example output:

● MODIFY src/core/context.ts
✓ Project structure synced
✓ Cursor rules updated
✓ Copilot instructions updated
Violations (The Important Part)
PML flags problems as they happen:

✗ VIOLATION
Rule: Undeclared folder
File: src/random/experiment
Future versions will support:

Rule approvals

Auto-fixes

Commit blocking

AI response validation

What PML Is Not
❌ A task manager

❌ A PM tool

❌ A Notion replacement

❌ A UI-heavy SaaS

PML lives inside your workflow, not on top of it.

Philosophy
Projects need memory.
AI needs authority.
Humans need flow.

PML sits between all three.

Status
Core CLI: ✅

Daemon: ✅

Cursor & Copilot sync: ✅

Structure violations: 🚧

Rule enforcement: 🚧

AI drift detection: 🚧

This project is early, opinionated, and moving fast.

License
MIT.
Use it. Break it. Improve it.

Final Note
If you’ve ever thought:

“Why does my AI forget everything I just explained?”

PML is for you.
