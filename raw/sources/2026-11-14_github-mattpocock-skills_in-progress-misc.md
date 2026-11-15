# mattpocock/skills — pastas in-progress e misc

Fonte: https://github.com/mattpocock/skills (branch main), baixado em 2026-11-14 via raw.githubusercontent.com. Conteúdo literal, em inglês, concatenado sem edição; cada bloco começa com o caminho do arquivo.

=================== skills/in-progress/README.md ===================

# In Progress

Beta. These skills are public on purpose: try them and tell me what breaks. They're excluded from the plugin and the top-level README until they graduate to a stable bucket, they get no docs pages, and they can change or disappear without warning.

The plugin won't give you these. Install one directly:

```bash
npx skills@latest add mattpocock/skills --skill=<name>
```

- **[loop-me](./loop-me/SKILL.md)**: Grill yourself into implementable workflow specs over multiple sessions, using the current directory as a stateful workspace. User-invoked.
- **[writing-beats](./writing-beats/SKILL.md)**: Shape an article as a journey of beats, choose-your-own-adventure style. Pick a starting beat, write only that beat, then pivot to the next, until the article reaches a natural end.
- **[writing-fragments](./writing-fragments/SKILL.md)**: Grilling session that mines you for fragments (heterogeneous nuggets of writing) and appends them to a single document as raw material for a future article.
- **[writing-shape](./writing-shape/SKILL.md)**: Take a markdown file of raw material and shape it into an article paragraph by paragraph, arguing format choices at each step.
- **[claude-handoff](./claude-handoff/SKILL.md)**: Hand the current conversation off to a fresh background agent that picks up the work immediately, seeded with a handoff summary via `claude --bg`. User-invoked.
- **[setup-ts-deep-modules](./setup-ts-deep-modules/SKILL.md)**: Wire dependency-cruiser into a TypeScript repo so each package is a deep module: implementation hidden in subfolders, reachable only through its entry-point files, tests exercising it through those. User-invoked.
- **[software-factory](./software-factory/SKILL.md)**: Shared language for designing a software factory: the tasks it runs and the services it plugs into. Call it alongside a grilling session. User-invoked.

=================== skills/misc/README.md ===================

# Misc

Tools I keep around but rarely use, not promoted in the plugin.

- **[git-guardrails-claude-code](./git-guardrails-claude-code/SKILL.md)**: Set up Claude Code hooks to block dangerous git commands (push, reset --hard, clean, etc.) before they execute.
- **[migrate-to-shoehorn](./migrate-to-shoehorn/SKILL.md)**: Migrate test files from `as` type assertions to @total-typescript/shoehorn.
- **[scaffold-exercises](./scaffold-exercises/SKILL.md)**: Create exercise directory structures with sections, problems, solutions, and explainers.
- **[setup-pre-commit](./setup-pre-commit/SKILL.md)**: Set up Husky pre-commit hooks with lint-staged, Prettier, type checking, and tests.

=================== skills/in-progress/chief-of-staff/SKILL.md ===================

---
name: chief-of-staff
description: Pursue a long-running goal in a single session by co-ordinating subagents.
disable-model-invocation: true
---

You are a chief of staff, co-ordinating subagents and schedules to pursue a long-running goal. This session will run for a long time, accruing tribal knowledge and helping you make long-term strategic decisions.

You are the Directly Responsible Individual for this goal. You are empowered to think much longer-term than you're used to. You must think on two tracks simultaneously:

- Tactical: how do I complete the immediate task?
- Strategic: how do I modify the environment to improve the outcomes of the _next_ task?

## Schedules

Harness-permitting, you will suggest recurring schedules which can help in achieving the goal.

## Subagents

All work should be done in subagents. Protect your context window.

Use background agents so you can stay in active dialogue with the user. Start every subagent with a fresh context window.

Communication to and from subagents should be sparse. Communicate primarily through **context pointers**: research notes, previous commits, wiki pages, and others. Don't duplicate information already available via pointers.

## Wiki

Keep your memory in a **wiki**: a folder of interlinked markdown pages that outlives this session. Tribal knowledge that lives only in your context is lost at compaction; the wiki is how it reaches the next session. Look for a shared wiki first, one the user or other agents already keep, and write your pages into it, following its conventions where they differ from the ones below. Only if there is none, agree a location with the user before the first write.

- `index.md` lists every page with a link and a one-line summary, grouped by category.
- Each other page covers one thing: a decision, a recurring problem, a subsystem, a user preference. Link related pages to each other.
- Sources (issues, PRs, transcripts, subagent reports) are never copied in or edited. Pages cite them.

Three operations keep it alive:

- **Ingest.** When you learn something durable (a decision, a user correction, a subagent's finding), update every page it touches and the index, not only a new page.
- **Query.** Before a decision, read `index.md` and the pages it points to. If the answer you build is worth keeping, file it as a page.
- **Lint.** Periodically look for contradictions, orphan pages, missing links and claims newer sources have overtaken. Suggest this as a schedule.

### Write history, not the present

The wiki is a historical record. It never claims to describe how things are now, because it cannot keep up with the code.

- Date every claim: "On 2026-10-13, Matt decided..."
- When a claim concerns code, cite the commit it was true at, with its repo: "As of `mattpocock/skills@abc1234`, `retro` loads `writing-for-agents` in step 1."
- Never write "currently", "now" or "is" about code without a date or commit beside it.
- When something changes, add a new dated claim and mark the old one superseded. Don't rewrite the old one.

## Procedures

Some procedures you run live in other skills, installed beside this one. To run one, read its `SKILL.md` at the path below, relative to this skill's directory, and follow it.

- **Retro** (`../retro/SKILL.md`): run a retro on about one in five of your subagents' sessions, including those an `implement-spec` run dispatches. Pick first the ones where something went wrong. In place of retro's last step, decide yourself which candidates are worth pursuing, then pursue them.
- **Large chunks of work**: write a spec with `../to-spec/SKILL.md`, break it into tickets with `../to-tickets/SKILL.md`, publish both to the issue tracker, then implement them with `../implement-spec/SKILL.md`.

## Strategic View

As part of any and all work, FIRST consider how the environment the agents operate in might be improved. Agents thrive in the **pit of success**:

- API's and functions which are extremely constrained and limited
- Lint rules which force correctness
- CODING_STANDARDS.md files which let code reviewers enforce best practices

They also need relevant **data sources** to succeed:

- Logs from critical running processes, like dev servers (or production logs)
- Access to test environment databases
- Access to the browser (when necessary) for clicking around and taking screenshots

Finally, create environments (and codebases) that obey the **"no workarounds"** rule:

- No one-off workarounds, or hacks that bypass established processes
- Any deviations from conventions must be fixed proactively, before feature work is done

Be relentless in improving the environment. Use every user message as an excuse to search for these improvements.

=================== skills/in-progress/claude-handoff/SKILL.md ===================

---
name: claude-handoff
description: Hand the current conversation off to a fresh background agent that picks up the work immediately.
argument-hint: "What will the next session be used for?"
disable-model-invocation: true
---

Write a handoff summary of the current conversation so a fresh agent can continue the work. Save it to the temporary directory of the user's OS, then launch a background agent seeded with it as its prompt: `claude --bg --name "<descriptive name>" -- "$(cat <summary file>)"`. Passing the file keeps the shell from running backticks or expanding `$` in the summary. It starts in the current working directory and returns immediately; the user manages it with `claude agents`.

Always pass `-n`/`--name` with a descriptive name (e.g. `--name "Fix login bug"`); it sets the display name shown in the job list, session picker, and terminal title.

Include a "suggested skills" section in the summary, naming which skills the next agent should call the Skill tool for.

Do not duplicate content already captured in other artifacts (specs, plans, ADRs, issues, commits, diffs). Reference them by path or URL instead.

Redact any sensitive information, such as API keys, passwords, or personally identifiable information, since the summary becomes the agent's prompt.

If the user passed arguments, treat them as a description of what the next session will focus on and tailor the summary accordingly.

=================== skills/in-progress/loop-me/SKILL.md ===================

---
name: loop-me
description: Grill me about specs for the workflows I want to build, within this workspace.
disable-model-invocation: true
argument-hint: "A workflow to design, or nothing to go find one"
---

Run a stateful `/grilling` session whose only output is **workflow** specs. Use the grilling discipline (relentless, a round of questions at a time, a recommended answer attached to each) aimed at the vocabulary and goal below. Create, edit, and delete specs as the grilling resolves things.

## The loop lens

A **loop** is a recurring pattern in the user's life: their career, their week, their morning, a single repeated activity. Picturing a life as loops within loops reveals how predictable its activities really are, which is what makes them worth **delegating**. Use the lens to find loops worth specifying, and propose ones the user hasn't noticed.

A **workflow** is the spec of one loop, made real. You run a workflow on a loop: the loop is its running instantiation. Workflows live in `workflows/*.md` and are the source of truth.

## Vocabulary

A shared language, reached for only when a workflow calls for it: never a checklist. **Mandate nothing structural**: a workflow needs no AI, no checkpoint, and no schedule unless the grilling shows it does.

- **Trigger**: what fires each run, an **event** (a new email, a new issue) or a **schedule** (every morning). Event-triggering is usually the more efficient.
- **Checkpoint**: a human-in-the-loop point where the user is asked to verify or decide. Some workflows have none and run autonomously; some use no AI at all.
- **Push right**: defer the checkpoint as far as it will go. Do maximal work before involving the human, so they are asked once, late, with everything prepared.
- **Brief**: what a checkpoint presents, a tight, decision-ready summary (what was produced, why, and a link down to the asset itself), never the raw output. The user reads a brief, not a draft. Speed of review is imperative.

## Definition of done

A workflow spec is done when an implementer agent could build it without asking a single question. Grill until then; nothing is done while a question remains.

## The workspace

- `workflows/*.md`: one spec per workflow.
- `NOTES.md`: raw notes on the user's world, the tools they use, the channels they process, and their own terminology for both. When it is empty or thin, interview them about their world before specifying anything. Sharpen fuzzy terms into canonical ones as they surface, and record them here.

=================== skills/in-progress/setup-ts-deep-modules/SKILL.md ===================

---
name: setup-ts-deep-modules
description: Wire dependency-cruiser into a TypeScript repo so each package is a deep module, with implementation hidden in subfolders and reachable only through its entry-point files. User-invoked.
disable-model-invocation: true
---

# Setup TS Deep Modules

Make every package in this repo a **deep module**: a lot of behaviour behind a small interface. A package's public surface is its **entry points** (the files at the package root), and everything in its subfolders is hidden. This skill installs [dependency-cruiser](https://github.com/sverweij/dependency-cruiser) and the rules that make the entry points the only way in, then proves the rules bite.

For the vocabulary (deep module, interface, seam, depth), call the Skill tool with "codebase-design" and use its language throughout.

## The shape this enforces

```
src/packages/
  <name>/
    index.ts        ← an entry point (public). Import this from outside.
    client.ts       ← another entry point. Packages may expose SEVERAL.
    lib/            ← implementation: hidden from outside, free to import each other.
    tests/          ← co-located tests + fixtures (a subfolder, so private).
```

The public surface is the package's **root files**, not one designated `index.ts`. By convention implementation lives in `lib/` and tests in `tests/`, giving every package the same two-folder shape. The rule itself is general, though: *anything* in *any* subfolder is private, so you never extend the config to add a folder.

Four rules, all `error`:

1. **Entry-point boundary**: code outside a package (app code or another package) may import only that package's entry points (its root files), never anything in its subfolders.
2. **Intra-package freedom**: a package's own files import each other freely.
3. **Tests through the entry points**: files under `<pkg>/tests/` may import any package's entry points and their own `tests/` fixtures, but never any package's subfolder internals (not even their own). Integration tests across packages are fine; deep imports are not.
4. **No cycles**: no dependency cycles.

**Entry points, not a barrel.** Because the public surface is *every* root file, a package can expose several small entry points (`index.ts`, `client.ts`, `server.ts`) instead of funnelling everything through one giant `index.ts`. Barrel files that re-export a whole subtree are discouraged; keep entry points small and hide implementation in subfolders.

Layering (which packages may depend on which) is a *different* concern and is left as a commented stub in the config for this repo to fill in.

## Steps

### 1. Detect the environment

- **Package manager**: `pnpm-lock.yaml` → pnpm, `yarn.lock` → yarn, `bun.lockb` → bun, else npm. Use it for every command below (`pnpm`/`yarn`/`npm run`/`bunx`).
- **Packages root**: if `src/` exists use `src/packages`, else `packages`. Confirm the choice with the user if the repo already has a different obvious convention.
- **Existing config**: check for a `.dependency-cruiser.*` file. If one exists, do **not** overwrite it: merge the four rules and the options in, and tell the user what you added.

**Done when:** package manager, packages root, and existing-config status are all known.

### 2. Install dependency-cruiser

Install `dependency-cruiser` as a devDependency with the detected package manager.

**Done when:** `dependency-cruiser` is in `devDependencies`.

### 3. Write the config

Copy [`dependency-cruiser.config.cjs`](./dependency-cruiser.config.cjs) to the repo root as `.dependency-cruiser.cjs`. Set `PACKAGES_ROOT` to the root detected in step 1. The rules are path-depth based and extension-agnostic, so nothing else needs adapting.

**Done when:** `.dependency-cruiser.cjs` exists with the correct `PACKAGES_ROOT`, and the four forbidden rules are present.

### 4. Wire it into the checks

- Add a `lint:boundaries` script: `depcruise <packages-root>` (or `depcruise src`).
- Fold it into the repo's umbrella check command, the one that already runs typecheck (e.g. a `check` / `ci` / `validate` script). Do **not** touch `tsconfig` or add path aliases.
- If there is no umbrella script, add `lint:boundaries` and tell the user to include it in CI.

**Done when:** `lint:boundaries` exists and runs as part of the same command as typecheck.

### 5. Scaffold the example package

Create a committed `<packages-root>/example/` as a copy-me template:

- `index.ts` is an entry point. Export one function that delegates to an internal file (so the package is visibly *deep*, not a pass-through).
- `lib/impl.ts`: an internal file in a **subfolder**, imported by `index.ts`, not reachable from outside.
- `tests/example.test.ts` imports **only** `../index` (an entry point) and asserts against the public function.

Tell the user this is a starter template to copy or delete.

**Done when:** the example package exists, exposes its behaviour through a root entry point, and hides `impl` in a subfolder.

### 6. Prove the rules bite

This is the completion criterion for the whole skill: a config that doesn't fail on a violation is worthless.

1. Run `lint:boundaries`. It must **pass** on the clean example.
2. Temporarily add a deep import to `tests/example.test.ts` (e.g. `import { thing } from "../lib/impl"`). Run `lint:boundaries` again; it must **fail** with `tests-through-entrypoints`.
3. Revert the deep import. Run once more, and it must **pass**.

**Done when:** you have observed a pass, then a fail on the deep import, then a pass again. If step 2 does not fail, the rules are not wired correctly, so fix before finishing.

### 7. Document the convention

Write a `README.md` **in the packages folder** (`<packages-root>/README.md`, next to the packages it governs) covering: the `src/packages/<name>/` layout (entry points at the root, `lib/` for implementation, `tests/` for tests), "import only through a package's entry points (its root files)", and how to run `lint:boundaries`. **Discourage barrel files** explicitly: expose several small entry points instead of re-exporting a whole subtree through one index. Keep it to the copy-me snippet plus the four rules in one paragraph each.

Then add a **context pointer** to it from the repo's agent-instructions file (`CLAUDE.md` if present, else `AGENTS.md`, creating `AGENTS.md` if neither exists). One line is enough, e.g. `Packages are deep modules: see [src/packages/README.md](./src/packages/README.md) before adding or importing one.` This is what makes an agent discover the boundary rule instead of tripping over it.

**Done when:** `<packages-root>/README.md` exists and discourages barrels, and the repo's `CLAUDE.md`/`AGENTS.md` links to it.

## Notes

- The config's `$1` back-references (dependency-cruiser's group matching) are what let a package reach its own internals while outsiders can't. Don't flatten them into separate per-package rules.
- Public vs private is decided by **depth**: a package's root files are entry points; anything in a subfolder is private. The conventional subfolders are `lib/` (implementation) and `tests/`, but the rule doesn't hardcode them: any subfolder is private, so a new folder never needs a config change. Adding an entry point is just adding a root file (no barrel).
- Packages are **flat**: one tier of immediate children under the root. A package's internals may nest as deep as you like; a package may not contain another package.
- Use `.cjs` (not `.js`) so the config's `module.exports` works even in `"type": "module"` repos.

=================== skills/in-progress/software-factory/SKILL.md ===================

---
name: software-factory
description: Shared language for designing a software factory: the tasks it runs and the services it plugs into.
disable-model-invocation: true
---

A **software factory** is a system of agents that turns tickets, PRs and schedules into merged code, deployed on remote infrastructure the user chooses. This skill is the language for designing one. Use these terms, and only these, when discussing or whiteboarding a factory; when the user reaches for a word under _Avoid_, name the canonical term.

## Tasks and runs

**Task**:
A kind of work the factory performs, defined once and run many times: review, explore, implement, ratchet. A task may work on a ticket, a PR, or the codebase as a whole.
_Avoid_: job, workflow, action, as names for the task. A CI vendor's workflow file and its jobs are where a task is wired up, not the task.

**Trigger**:
The event that starts a run: a change in the ticket tracker or git host, a clock in the orchestrator, or another run.

**Run**:
One execution of a task on one runner, from its trigger to its finish, treated as a black box. A run triggers further runs either directly, through logic in the orchestrator, or by changing the ticket tracker or git host. A run never waits for a human: it ends, and the human's later change to the ticket tracker or git host triggers a new run.
_Avoid_: session

**Runner**:
The disposable machine a run executes on. Nothing on it survives the run, even when the machine itself is long-lived: a run's only memory of earlier runs is the ticket tracker, the git host and the orchestrator.
_Avoid_: server, host, box, compute, sandbox

## Services

**Ticket tracker**:
Where tickets live, and the factory's human interface: humans schedule work by filing tickets, talk to agents in their comments, and their changes to tickets trigger runs.
_Avoid_: issue tracker, ticket manager, project board

**Ticket source**:
Anything outside the factory that creates tickets in the ticket tracker: a feedback button, a monitor, an error tracker, an inbox.
_Avoid_: data source, trigger source, intake

**Git host**:
Where branches, PRs and reviews live.
_Avoid_: code host, forge, repo

**Orchestrator**:
The component that receives triggers, starts runs on runners, and records which runs are queued, in flight or finished.
_Avoid_: dispatcher, scheduler, control plane

**Observability platform**:
Where runners send logs, traces and status, so a human can see what happened inside each run. Optional: the product filling the runner or orchestrator slot often shows enough on its own. A run never decides on it until something writes it into the ticket tracker or git host.
_Avoid_: observability, logs, monitoring, dashboard

## Designing a factory

A design has two halves: the **services**, each a slot filled with a product, and the **tasks** whose runs move work through them.

Start from the user's problem, not the factory: untriaged tickets, PRs waiting for automated review, a stricter automated check to migrate to, bugs nobody reads. When the user names a problem or doesn't know what to build, read [EXAMPLE-TASKS.md](EXAMPLE-TASKS.md) for the tasks that solve common ones.

### Start slow

Every trigger is an accelerator. Accelerators without brakes make a slop cannon. There are three brakes:

- **Automated checks**: deterministic gates (types, lint, tests) that every run must pass.
- **Automated review**: a separate run that reads the diff cold against the codebase's standards and the ticket, when there is one.
- **Human review**: a human reads the PR before it merges; what it catches becomes new automated checks and sharper automated review.

Add one automated trigger at a time, throttled at first (one bug report in ten, a clock once a day), with human review on every PR. Open the throttle as the brakes earn trust, and cap every loop of runs at a few tries before a human.

### Fill every slot

Each service is a slot. One product can fill several slots, and one server can host several services. Three designs, side by side:

| Service                | All on GitHub                   | Linear tickets                 | Own tracker              |
| ---------------------- | ------------------------------- | ------------------------------ | ------------------------ |
| Ticket tracker         | GitHub Issues                   | Linear                         | own app                  |
| Ticket source          | feedback button                 | feedback button, monitor       | feedback button, monitor |
| Git host               | GitHub                          | GitHub                         | GitHub                   |
| Orchestrator           | GitHub Actions                  | own server + database          | own app                  |
| Runner                 | Actions runner                  | Actions, E2B, Daytona or a VPS | own app, or sandboxes    |
| Observability platform | none: Actions run pages suffice | an LLM tracing platform        | own app                  |

When the user is choosing a product for a slot, read that slot's survey to get oriented, then research the current options yourself; each survey groups the options by type and lists the questions that decide the slot:

- [TICKET-TRACKERS.md](TICKET-TRACKERS.md)
- [GIT-HOSTS.md](GIT-HOSTS.md)
- [RUNNERS.md](RUNNERS.md)
- [OBSERVABILITY-PLATFORMS.md](OBSERVABILITY-PLATFORMS.md)

Buy the services and build the tasks: the tasks carry the user's design, the services are generic. Favour an off-the-shelf ticket tracker: it is robust, people already know it, and outside users are easy to let in.

### Question every task

For each task, answer:

1. What triggers it?
2. What does it do, and which services does it read and write?
3. What does it trigger next?
4. Where does a human re-enter?
5. What stops two runs doing the same work?

For each ticket source, answer: what stops it filing the same ticket twice?

A design is finished when every slot names a product (or, for the observability platform, a deliberate none) and every task and ticket source has an answer to every question.

=================== skills/in-progress/software-factory/EXAMPLE-TASKS.md ===================

# Example tasks

Tasks grouped by the problem they solve. Each names the trigger that starts its runs, what a run does, and what it triggers next. Most factories start as one of these and grow by chaining the next.

## Untriaged tickets pile up

**Explore task**
- Trigger: a ticket is created, or a human labels it.
- Does: checks the ticket's claims against the codebase, reproducing them where it can, sorts it into a category (easy call, needs a human, not a bug), and leaves its findings on the ticket for the implementer. It never pushes.
- Triggers: an implementer run for easy calls. Anything else ends with the ticket labelled as waiting for a human.

## Ready tickets wait for someone to build them

**Implementer task**
- Trigger: a ticket is labelled ready, by a human or an explore run.
- Does: builds the ticket until the automated checks pass, and opens a draft PR.
- Triggers: an automated review run.

## PRs wait for review

**Automated review task**
- Trigger: a PR opens with no automated review yet, or a human labels it.
- Does: reviews the diff against the codebase's standards and the ticket it came from.
- Triggers: a rework run on a fail. On a pass it ends, and the PR waits for human review before a human merges it.

## Failed automated reviews sit unfixed

**Rework task**
- Trigger: an automated review run fails a PR.
- Does: fixes only what the automated review named, and pushes.
- Triggers: an automated review run. After a set number of fails, it ends with the PR labelled as waiting for a human.

## Specs are too big for one run

**Decompose task**
- Trigger: a spec ticket is labelled.
- Does: splits the spec into tickets, each recording which tickets it depends on.
- Triggers: an implementer run.

The implementer run here picks the next ticket whose dependencies are all closed, and triggers itself again until no ticket is left.

## Migrating to a stricter automated check

A new lint rule (or a stricter type setting) is switched on, but only some files pass it. The rule enforces on the passing files, and the failing ones sit on an exception list.

**Ratchet task**
- Trigger: a daily clock.
- Does: takes one file off the exception list, fixes it until the stricter check passes, and opens a PR.
- Triggers: an automated review run. Once the exception list is empty, the ratchet run has nothing to take and the migration is done.

One small PR a day keeps human review cheap, and the check only ever gets stricter.

## Users report bugs nobody reads

A feedback button in the app is a ticket source: it files each report as a ticket with the explore label already on it. The explore run does the rest.

## Production problems are found late

A monitor (slow queries, error rates) is a ticket source. It files a ticket per problem, and comments on the open ticket instead when it sees the same problem again. After a fix merges, it reopens the ticket if the problem persists.

## The factory's own runs fail

**Fix task**
- Trigger: the orchestrator reports a failed run.
- Does: files the failing log as a ticket, and attempts a fix as a PR when the failure is fixable.
- Triggers: an automated review run. A failure in a fix run's own work triggers nothing, so fixes never chain. Because the fix changes the factory itself, it always gets human review.

## The codebase drifts

**Architecture task**
- Trigger: a nightly clock.
- Does: scans recent changes for refactoring candidates and files them as one ticket.
- Triggers: nothing. A human picks a candidate and labels it, which starts the usual chain.

## The same mistakes keep coming back

**Retro task**
- Trigger: a PR merges, throttled to one merged PR in ten.
- Does: reads the PR, its ticket, its automated reviews and its run logs, and proposes changes to the factory's own instructions as a PR.
- Triggers: an automated review run.

=================== skills/in-progress/software-factory/RUNNERS.md ===================

# Runners

> Surveyed 2026-10, and not guaranteed to be up to date. Use it to get oriented, then research the current options yourself: products, prices, limits and betas change fast.

A runner is **disposable**: every run starts on a fresh machine and leaves nothing behind. Five types fill the slot. They differ mostly in who owns the agent loop and who owns the machine:

| Type | Agent loop | Machine | Also fills |
| --- | --- | --- | --- |
| CI runner | yours, inside the CI job | CI vendor's, or yours | orchestrator, observability platform |
| MicroVM API | yours, in the orchestrator or on the runner | provider's | nothing |
| Bundled agent platform | vendor's | vendor's | part of orchestrator, observability platform |
| Bring-your-own worker | vendor's | yours | part of orchestrator, observability platform |
| Own VPS or containers | yours | yours | nothing |

Runner choice is per run: a cheap CI runner for review runs and a microVM for implementer runs is a normal design.

## CI runners

A fresh VM or pod per CI job, started by the git host's own workflow engine; the agent CLI is one step in the job. The orchestrator starts a run with a workflow trigger (issue, PR, schedule, manual dispatch), and a concurrency group keeps two runs off the same ticket. Hosted runners are disposable by construction; self-hosted runners get there through an ephemeral mode, one pod per job, deleted after. Cost is per minute.

**Pick it when** the git host is GitHub or GitLab and every trigger is a git host event or a clock: the workflow file is the orchestrator and the run page is the observability platform, so one product fills three slots.

Starting points:
- [GitHub Actions](https://docs.github.com/en/actions/reference/limits): the default for an all-GitHub factory; [pricing](https://docs.github.com/en/billing/reference/actions-runner-pricing).
- [Claude Code GitHub Action](https://code.claude.com/docs/en/github-actions): Claude Code as a workflow step.
- [GitLab hosted runners](https://docs.gitlab.com/ci/runners/hosted_runners/linux/): an ephemeral VM per job.
- [Actions Runner Controller](https://docs.github.com/en/actions/concepts/runners/actions-runner-controller): self-hosted, one ephemeral pod per job on the user's Kubernetes.

## MicroVM APIs

An SDK call creates an isolated microVM (vendors say "sandbox") in about a second; the orchestrator execs commands into it, or starts an agent CLI inside it. Cost is per second of vCPU and RAM. The orchestrator creates one per run, kills it at the end, and sets a timeout as the backstop. Providers also sell persistence (pause/resume, snapshots, drives); a factory uses it as a cache, and keeps memory between runs in the ticket tracker, git host and orchestrator.

**Pick it when** the factory has its own orchestrator (a server, a queue) and wants many short-lived, parallel runs with no machines to manage. Compare on max run length, concurrency cap, and whether time spent waiting on the model is billed: as of 2026-10, Vercel bills only active CPU, so model-wait time is nearly free there.

Starting points: [E2B](https://e2b.dev/pricing), [Daytona](https://www.daytona.io/pricing), [Modal Sandboxes](https://modal.com/docs/guide/sandboxes), [Vercel Sandbox](https://vercel.com/docs/vercel-sandbox/pricing).

## Bundled agent platforms

A hosted coding agent with its runner included: the vendor provisions a fresh VM or container per run, runs its own agent loop there, and pushes a branch or PR. Only the branch survives. Runs start from an @-mention or assignment in the git host or ticket tracker, a chat message, a schedule, or an HTTP call, so the platform fills much of the orchestrator; its transcript view fills the observability platform. Cost is folded into a seat or subscription, or charged per run.

**Pick it when** the user wants the fewest moving parts and is happy with that vendor's agent. Confirm its triggers cover the user's ticket tracker.

Starting points:
- [Claude Code cloud](https://code.claude.com/docs/en/claude-code-on-the-web), with [scheduled tasks](https://code.claude.com/docs/en/routines) for cron, API and GitHub event triggers.
- [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview): API-first; create a run against an environment and stream events.
- [Codex cloud](https://developers.openai.com/codex/cloud): a container per task.
- [Copilot coding agent](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent): assign an issue to Copilot; its runner is a GitHub Actions runner.

## Bring-your-own worker

The bundled platform keeps its agent loop and its queue of runs, but tool calls execute on a worker the user hosts. The worker polls the vendor outbound, claims a run, executes it, and exits: the same shape as a self-hosted CI runner. Disposability is the user's job: run the worker under Kubernetes or a microVM API so each run gets a fresh disk. Cost is the vendor's seat or usage plus the user's machines.

**Pick it when** the user wants a bundled agent but runs must reach a private network, keep data on the user's machines, or use custom hardware.

Starting points: [Claude Code self-hosted environments](https://code.claude.com/docs/en/self-hosted-environments), [Cursor self-hosted pool](https://cursor.com/docs/cloud-agent/self-hosted-pool), [Copilot coding agent on ARC](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-environment).

## Own VPS or containers

A machine the user rents or runs, with a fresh container (or machine) per run: the machine may live for months, the container lives for one run. Max run length is whatever deadline the orchestrator sets. Disposability comes from `docker run --rm`, a Kubernetes Job with `ttlSecondsAfterFinished: 0`, or a machine destroyed at the end; every cache sits on a path the next run treats as optional. Cost is flat monthly, or per second while running.

**Pick it when** runs are long, steady or heavy, cost per hour dominates, or a server already hosts the orchestrator.

Starting points: [Fly Machines](https://docs.fly.io/machines/overview) ([pricing](https://docs.fly.io/about/pricing)), [Hetzner Cloud](https://www.hetzner.com/cloud/) plus Docker, [Kubernetes Jobs](https://kubernetes.io/docs/concepts/workloads/controllers/job/).

## Researching further

### The questions that decide the slot

Check each candidate against these, with the factory's runs in hand:

1. **How does the orchestrator start one?** A workflow trigger, an SDK call, an @-mention, an HTTP call, or a vendor queue that a worker claims. Does that fit the orchestrator the design already names?
2. **What is the max run length, and the concurrency cap?** Find both the default timeout and the ceiling, per plan tier, and what happens at the cap. Hold them against the design's longest run and busiest burst.
3. **What is the cost shape?** Per minute, per second of vCPU and RAM, active CPU only, per run, per seat, or flat monthly. Is time waiting on the model billed? Are model tokens inside the price or on top?
4. **How is disposability achieved?** Fresh by default, an ephemeral flag, or the orchestrator's own teardown. Which persistence features exist, and can the design keep them to caches?
5. **What can a run reach?** Private network access, outbound firewall or allowlist, how secrets reach the runner, and who else can read them.
6. **Which other slots does it fill?** Count the triggers it reads as orchestrator coverage, and its run page or transcript as observability platform coverage.

### Where the answers live

- The vendor's **limits or quotas page** and **pricing page**, over the landing page.
- The **SDK or API reference** for the create call: its timeout, lifecycle and network parameters.
- The **security or networking docs** for firewalls, allowlists and secret handling.
- The **changelog or release notes** for beta, preview and GA status, and for plan gating (Team, Enterprise).
- For CI runners, the git host's **billing docs**.

### What goes stale fastest

- **Prices and free allowances.** As of 2026-10, GitHub had announced a per-minute fee for self-hosted runners, then postponed it.
- **Beta, preview and early-access status**, and which plans unlock a feature. As of 2026-10, Claude Managed Agents and Claude Code self-hosted environments were both in beta.
- **Default timeouts and max run length** per tier.
- **Trigger integrations** on bundled platforms: which ticket trackers and chat tools start a run.
- **Startup times**, which are vendor claims; measure them if they matter.

The type traits above (who owns the loop, who owns the machine, which slots it fills) change slowly; trust them over any number here.

=================== skills/in-progress/software-factory/GIT-HOSTS.md ===================

# Git hosts

> Surveyed 2026-10, and not guaranteed to be up to date. Use it to get oriented, then research the current options yourself: products, prices, limits and betas change fast.

## The types

### All-in-one platforms

The git host bundled with a ticket tracker, a CI system that serves as orchestrator, and hosted runners, all sharing one event stream and one permission model. One product fills git host, ticket tracker, orchestrator and runner, and its CI run pages often cover the observability platform too. Every PR, review, label and check event is both a webhook and a native trigger, so this type has the richest trigger catalogue.

**Pick it when** the factory starts small, the code already lives there, or the user wants one bill and one login. This is the "All on GitHub" design in [SKILL.md](SKILL.md). The vendors also ship their own agents, which either compete with the user's runs or slot in as one of them.

- [GitHub](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api): the default; Issues, Actions, Apps and the largest integration ecosystem.
- [GitLab](https://about.gitlab.com/pricing/): issues, merge requests, CI/CD and runners in one product, SaaS or self-managed.

### Suite git hosts

A git host sold as one module of a wider suite, where the ticket tracker is a sibling product (Jira, Azure Boards) joined by links and webhooks. Tracker events arrive on a second stream, so the orchestrator joins two event sources.

**Pick it when** the organisation already runs the suite and its humans live in Jira or Azure Boards. The factory inherits that tracker as its human interface.

- [Bitbucket Cloud](https://support.atlassian.com/bitbucket-cloud/docs/api-request-limits/): Atlassian's git host, paired with Jira and Bitbucket Pipelines.
- [Azure DevOps (Azure Repos)](https://learn.microsoft.com/en-us/azure/devops/integrate/concepts/rate-limits): Repos, Boards, Pipelines and Entra identities in one organisation, so it fills all four slots.
- [AWS CodeCommit](https://aws.amazon.com/blogs/devops/aws-codecommit-returns-to-general-availability/): a bare git host with IAM identities; pair it with an external tracker and CI.

### Self-hosted git hosts

A git host the user runs on their own infrastructure, often beside the orchestrator and runners on the same network. The operator sets the rate limits, so the ceiling is the hardware. The user owns upgrades, backups and uptime for every slot it fills.

**Pick it when** code must stay on-premises or air-gapped, the user wants zero per-seat cost, or a SaaS API budget throttles a busy factory. Forgejo and Gitea suit small teams and bundle issues plus GitHub-Actions-compatible CI; GitLab self-managed and GitHub Enterprise Server suit organisations and keep their Apps and service accounts.

- [Forgejo](https://forgejo.org/2026-10-release-v17-0/): community-governed, lightweight, with Forgejo Actions.
- [Gitea](https://about.gitea.com/): lightweight with Gitea Actions; also sold managed.
- [GitLab self-managed](https://about.gitlab.com/install/) and [GitHub Enterprise Server](https://docs.github.com/en/enterprise-server@latest): the full platforms on the user's own infrastructure.

### Review-first and decentralised git hosts

Git hosts whose review model departs from the branch-and-PR shape: per-commit patchsets with voted labels, or repositories federated across user-run nodes. Most factory tooling assumes PRs, so expect to build more of the glue. In Gerrit, an automated check run votes `Verified` from a bot account and a human votes `Code-Review`.

**Pick it when** the user's team already reviews this way, or values federation over ecosystem.

- [Gerrit](https://www.gerritcodereview.com/): patchset review with label votes; the Android and Chromium model.
- [Tangled](https://blog.tangled.org/ci/): git hosting on the AT Protocol with stacked PRs and its own CI runner.

### Agent-native git hosts

New git hosts built around agents as the main authors: high commit throughput, server-side reads in place of clones, and per-agent attribution. The whole type is early (as of 2026-10), so gates and rate limits may be unpublished: ask the vendor.

**Pick it when** the factory runs many concurrent runs against one large repository and clone time or API limits dominate. Pilot one on a mirror of a single repository, keeping GitHub as the fallback.

- [Cursor Origin](https://cursor.com/origin): from the Graphite team, with GitHub sync and signed PR, review and push webhooks.
- [GitLab next-gen SCM](https://about.gitlab.com/blog/gitlab-next-gen-scm/): rebuilt GitLab backend with clone-free agent APIs.

### Git storage for runs

Headless, API-first git repositories created by the thousand: branches, commits and diffs, with no PRs, reviews or gates. They fill half the slot, with short-lived per-repository tokens minted per run.

**Pick it when** runs need cheap per-run scratch repositories or forks (a fork per ticket, an agent's working state) and the PR still lands on a full git host from the types above.

- [Cloudflare Artifacts](https://www.cloudflare.com/product/artifacts/): git-compatible storage on Workers; fork a baseline per task.
- [Pierre code.storage](https://code.storage/docs): white-label git API with ephemeral branches.

## Researching further

Check each candidate against these questions:

1. **Triggers**: which events (PR opened, push, review submitted, label added, check finished) reach the orchestrator as webhooks, and are deliveries signed?
2. **Identity**: can a run act as a dedicated bot or app identity? That keeps runs attributable, lets an automated review run approve a PR another identity authored, and decides whether a run's own pushes trigger the next run.
3. **Gates**: are required checks, required approvals and branch protection available on the user's plan and repository visibility, and can a bot sit on a bypass list?
4. **Rate limits**: what API budget does every run on every runner share, per what unit (installation, token, user, workspace), and how does it scale?
5. **Slots filled**: which of ticket tracker, orchestrator, runner and observability platform does the same product cover?

Find the answers in primary sources: the REST API and webhook reference, the rate-limit page, the pricing and plan comparison page, the access-token or app docs, and the changelog or release notes.

The fastest to go stale: beta and preview status (the whole agent-native and git-storage types), rate-limit numbers, which plan unlocks gates, and availability after acquisitions, shutdowns and reopenings. As of 2026-10, for example, AWS CodeCommit had reopened to new customers and Bitbucket Data Center was sold only as a hybrid licence with Cloud.

## Durable gotchas

Verify each still holds before the design relies on it.

- **GitHub `GITHUB_TOKEN` ends chains.** Events caused by the built-in Actions token start no new workflow runs (except `workflow_dispatch` and `repository_dispatch`), so a run pushing with it silently stops the next run. Give runs a GitHub App identity from day one.
- **Gates often sit behind a paid plan.** As of 2026-10, GitHub rulesets on private repositories need Pro, Team or Enterprise, GitLab approval rules need Premium, and enforced Bitbucket merge checks need Premium.
- **Rate limits are per identity, and the bot's type changes them.** As of 2026-10, a GitHub App installation gets 5,000 requests/hour against 1,000 for `GITHUB_TOKEN`; Bitbucket user tokens stay at the base rate while access tokens scale; Azure DevOps raises a bot's budget with its access level.
- **Suite trackers mean two event streams.** The orchestrator joins git host and ticket tracker events itself.

=================== skills/in-progress/software-factory/TICKET-TRACKERS.md ===================

# Ticket trackers

> Surveyed 2026-10, and not guaranteed to be up to date. Use it to get oriented, then research the current options yourself: products, prices, limits and betas change fast.

The ticket tracker is the factory's human interface. Each type below is a starting point: read what it is and when a factory picks it, then check the examples against the questions in [Researching further](#researching-further).

## The types

### 1. Git-host tracker

The tracker built into the git host, so tickets, branches and PRs share one product, one permission model and one identity. A factory picks it when it is small, the team already lives on the git host, or the repo is public. This is the "All on GitHub" design: the git host's CI fills the orchestrator slot with no glue. Labels are the dependable router, because statuses live on a separate board. Outside developers file where the code is; non-developers need an account, so a feedback button files through the API. Self-hosted git hosts carry their tracker with them.

- [GitHub Issues](https://docs.github.com/en/copilot/concepts/agents/about-third-party-agents): the default; assign-to-agent for Copilot, Claude and Codex.
- [GitLab Issues](https://about.gitlab.com/blog/how-to-use-a-work-item-created-trigger/): Duo Agent Platform flows triggered from work items.
- [Forgejo](https://forgejo.org/2026-10-release-v17-0/): self-hosted, Actions-compatible.

To verify: which assign-to-agent features are still in preview and which plans include them; whether a native agent reads later comments or only the ticket at assignment (as of 2026-10, Copilot reads it at assignment only).

### 2. Agent-native dev tracker

A standalone SaaS tracker for software teams that treats agents as first-class assignees, with an agent API and its own coding agent. A factory picks it when product, support or design staff schedule work, the team already lives there, or it wants polished triage and planning views. The "Linear tickets" design. Statuses and workflows are first-class, so "moved to Ready" is a clean trigger. Agents appear as app users a human delegates to, and runs can stream progress into the ticket. Native agents here are the deepest of any type, so one can partly fill the orchestrator and runner slots too.

- [Linear](https://linear.app/developers/agents): the most agent-shaped tracker.
- [Jira](https://support.atlassian.com/jira-software-cloud/docs/collaborate-on-work-items-with-ai-agents/): status-triggered agents; fits an org already on Atlassian.
- [Shortcut](https://www.shortcut.com/help/integrations/using-ai-agents): assign a story or mention an agent in a comment.
- [YouTrack](https://www.jetbrains.com/youtrack/): workflows-as-code; self-hosts.

To verify: agent API status (Linear's was a developer preview as of 2026-10); how native agent runs are metered and priced; agent seat cost; acknowledgement deadlines on agent webhooks; which plan unlocks customer-facing forms; self-hosted edition end-of-life dates.

### 3. Open-source dev tracker

A Linear-style tracker you can run on your own infrastructure, with a cloud edition beside it. A factory picks it when data stays in-house (air-gapped, regulated) or the user wants to read and patch the tracker's source while still buying it. Routing by states, labels and custom properties works much as in type 2; native agents are younger.

- [Plane](https://developers.plane.so/dev-tools/agents/overview): Linear-like; bot users per app; agents reply in comments.
- [Huly](https://github.com/hcengineering/huly-selfhost): all-in-one workspace with two-way GitHub sync; a heavy stack to operate.
- [OpenProject](https://www.openproject.org/): mature, classic project management.

To verify: agent feature status (Plane's was beta as of 2026-10); which edition carries guest roles and intake forms; licence; the self-hosted stack's operating cost.

### 4. General work tool

A work-management or docs tool whose database or task list doubles as the tracker. A factory picks it when it serves a non-engineering team already living there, or tickets are mostly content, ops or research rather than code. Forms are the strength: anyone with a link files a ticket. Routing is flexible database properties, so every factory invents its own schema. Developer context (diffs, PRs) sits a click away on the git host. SaaS only.

- [Notion](https://www.notion.com/help/custom-agents): database-as-tracker; agents fire on database changes.
- [Asana](https://asana.com/product/ai/ai-teammates): AI Teammates take assigned tasks.
- [ClickUp](https://clickup.com/brain/cloud-agents): Cloud Agents return a PR in the task thread.
- [Trello](https://developer.atlassian.com/cloud/trello/guides/rest-api/webhooks/): boards and lists; webhooks plus Butler automation.

To verify: webhook latency and granularity (as of 2026-10, Notion batched content updates, arriving a minute or two late); which plan includes agents.

### 5. Repo-native tracker

Tickets stored as files in the repo (JSONL, Markdown), edited by agents through a CLI or MCP server and merged like code. A factory picks it when one developer drives agents locally and wants the plan in git, or as a run's working memory beside a real tracker. A push to the git host is the only trigger, so the orchestrator diffs files to find what changed. Identity is the git host's. Outside filing is a commit or PR, the weakest of any type, so a factory graduates to a git-host tracker once others file tickets.

- [Beads](https://github.com/steveyegge/beads): JSONL with dependency tracking, so a run picks the next unblocked ticket.
- [Backlog.md](https://github.com/MrLesk/Backlog.md): Markdown tasks with a Kanban view and MCP server.

### 6. Build-your-own

The factory's own app holds tickets in its own database, usually beside the orchestrator. The "Own tracker" design. A factory picks it when the tracker *is* the product (an internal platform, a customer-facing support factory) or no off-the-shelf model fits. Triggers become function calls; every trait in the questions below becomes code to write and maintain, which is why the skill favours buying. An [Airtable](https://airtable.com/developers/web/api/webhooks-overview) base with webhooks is a half-built middle.

## Researching further

Check each candidate against these questions. They decide the slot:

- **Triggers**: which ticket changes (created, labelled, status moved, assigned, commented, mentioned) emit a webhook or event the orchestrator can turn into a run? How fast and how granular?
- **Routing**: which labels, statuses or fields can a run read to know its kind (explore, implement, rework)?
- **Thread**: can a human answer an agent in comments, and does that reply trigger the next run?
- **Identity**: is there an API plus a bot identity, so runs act as themselves and humans tell agent from colleague? Does the bot cost a seat?
- **Native agents**: can a ticket be assigned to an agent directly? Which agents, on which plan, metered how? What does it read: the ticket at assignment, or the whole thread?
- **Outside filing**: how does a ticket source or customer create tickets: forms, email, chat, API? Which plan unlocks it?
- **Hosting**: SaaS only, or self-hosted, and under which licence?

Answers live in primary sources: the API and webhook reference (event lists, payloads, delivery and retry rules), the agent or app developer docs, the pricing page and plan comparison table, and the changelog or release notes. Prefer these over blog posts and comparison sites.

Stalest first: agent features and their preview or beta status, agent metering and credit prices, plan gating of agents and forms, rate limits, and acquisitions, shutdowns and end-of-life dates for self-hosted editions. Webhook event lists and routing models change slowly.

## Durable gotchas

Verify each still holds before relying on it:

- **GitHub's `GITHUB_TOKEN` trap**: changes made with the default `GITHUB_TOKEN` trigger no new workflow runs. A run that labels or comments on a ticket to trigger the next run acts through a GitHub App token.
- **Assignment-time context**: some native agents read the ticket only when assigned, so later context goes on the PR.
- **Agent webhooks expect a fast acknowledgement**: the orchestrator acknowledges at once and starts the run afterwards.
- **Batched webhooks in general work tools** arrive late; a factory needing prompt runs triggers on property changes or picks another type.

=================== skills/in-progress/software-factory/OBSERVABILITY-PLATFORMS.md ===================

# Observability platforms

> Surveyed 2026-10, and not guaranteed to be up to date. Use it to get oriented, then research the current options yourself: products, prices, limits and betas change fast.

Orientation for filling the observability platform slot, or deciding on a deliberate none. The types split by **what the human needs to see inside a run**: its log, its agent trace (each model call and tool call as a span), or that trace joined to the rest of the user's system. Self-hosted vs SaaS cuts across the last three types. When a run should act on what the platform sees, make the platform a ticket source: a monitor files the ticket, and a run reads it.

## How runners hook in

Every type receives data through one of five hooks. Name the hook alongside the product when filling the slot.

- **Harness OTel**: the agent harness exports OpenTelemetry itself. Claude Code and the Claude Agent SDK take `CLAUDE_CODE_ENABLE_TELEMETRY=1` plus `OTEL_*` variables, with prompts and tool output opt-in; Codex CLI takes an `[otel]` block in `config.toml`. ([Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/observability), [Claude Code](https://code.claude.com/docs/en/monitoring-usage), [Codex config](https://developers.openai.com/codex/config-advanced))
- **Platform push**: the model platform sends traces for you, as Claude Managed Agents do to an OTLP destination set in the Claude Console. ([Claude docs](https://platform.claude.com/docs/en/manage-claude/opentelemetry/api))
- **SDK wrapper**: one call in the runner's code, such as LangSmith's `configure_claude_agent_sdk()`.
- **Hook plugin**: a Claude Code hook reads the session transcript at each Stop and ships it, as in Langfuse's Claude Code plugin.
- **Gateway**: the runner's model base URL points at a logging proxy. Zero runner code, and it sees model calls only: tool calls inside the harness stay invisible.

OpenTelemetry is the common wire: harness OTel and platform push land in any OTLP backend. The GenAI semantic conventions (`invoke_agent`, `chat`, `execute_tool` spans) are still settling, so expect span names to drift. ([OTel GenAI agent spans](https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-agent-spans))

## Type 1: None (the runner or orchestrator product shows enough)

**What it is**: the human reads each run where the runner or orchestrator already shows it: the CI run page, the sandbox dashboard, the agent's transcript saved as a run artifact. No hook to build, as self-hosted as the runner, and bundled with its cost.

**When a factory picks it**: few runs a day, one human watching, and the question is "did it fail, and what did it print?" Most factories start here, and grow out of it when they need search across runs, a token or cost rollup per run, or retention longer than the runner keeps.

**Starting points**: [GitHub Actions run logs](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization), [E2B sandbox logs and metrics](https://e2b.dev/docs), [Daytona sandbox telemetry](https://www.daytona.io/docs/en/observability/otel-collection/), [OpenAI Agents SDK traces](https://openai.github.io/openai-agents-python/tracing/). Sandbox products often forward the same data over OTLP, which is the path out to Type 2.

**Verify**: retention days per runner product; some sandboxes keep very little (Daytona: 3 days, as of 2026-10).

## Type 2: LLM and agent tracing platform

**What it is**: a backend built around the agent trace: each run as a tree of model calls and tool calls, with token cost, prompts and sessions, usually with evals and datasets on top.

**When a factory picks it**: the human asks "why did the agent do that?" across many runs; a retro run or a human compares runs; token spend needs a per-run rollup. Self-hosting an open-source one keeps transcripts in-house.

**Traits of the type**: takes harness OTel, an SDK wrapper or a hook plugin, often the platform push too. Billed by volume, and agent runs are span-heavy (one span per tool call), so budget per run rather than per request.

**Starting points**: [Langfuse](https://langfuse.com/pricing) and [Arize Phoenix](https://phoenix.arize.com) (open source, self-hostable), [LangSmith](https://www.langchain.com/pricing-langsmith), [Braintrust](https://www.braintrust.dev/pricing).

**Verify**: free-tier limits, the billing unit (trace, span, unit or GB; Braintrust moved to GB in 2026-03), which tier unlocks self-hosting, and current ownership.

## Type 3: General APM and logging backend

**What it is**: the user's existing observability stack (logs, metrics, distributed traces for every service), with an agent or LLM view added.

**When a factory picks it**: the team already pays for one; runs need joining to the app's own traces (the Agent SDK propagates `TRACEPARENT`, so a run nests inside its caller's trace); or a monitor ticket source already reads from it.

**Traits of the type**: harness OTel goes straight to the vendor's OTLP endpoint. Priced per GB, event or host, so a factory's volume is a rounding error on an existing bill and a surprise on a new one.

**Starting points**: [Datadog Agent Observability](https://www.datadoghq.com/product/llm-observability/), [Grafana Cloud](https://grafana.com/pricing/), [Honeycomb](https://www.honeycomb.io/pricing), [SigNoz](https://signoz.io/pricing/) (open source).

**Verify**: whether the agent view is GA or preview, which harnesses have a setup guide, and free-tier volumes.

## Type 4: LLM gateway with request logging

**What it is**: a proxy between the runner and the model provider that logs every request and response, with routing, keys, budgets and caching alongside.

**When a factory picks it**: the user wants per-run spend caps or one key vault for many runners, and logging comes with it; or the harness has no export of its own. It sees model calls only, so pair it with Type 2 or 3 for tool calls.

**Starting points**: [LiteLLM Proxy](https://docs.litellm.ai/docs/proxy/logging) (open source, forwards logs to Langfuse or OTel), [Portkey](https://portkey.ai/pricing).

**Verify**: per-request pricing on SaaS, and whether the product is still actively developed (Helicone went into maintenance mode after an acquisition, as of 2026-10).

## Researching further

Check each candidate against the questions that decide this slot:

1. **Does the runner or orchestrator already show enough?** Compare what the human needs (cross-run search, per-run cost, retention) with what the run page or sandbox dashboard gives. A yes here means a deliberate none.
2. **How does the agent harness export traces?** Find which of the five hooks the harness supports, then which the product accepts. Confirm tool calls arrive as spans, and whether prompts and tool output need an opt-in.
3. **Is it self-hostable?** Licence, which tier allows it, and what it runs on. Decisive when transcripts must stay in-house.
4. **What is the cost shape?** The billing unit, the free tier, and an estimate per run given one span per tool call, multiplied by runs per day.
5. **How long is retention?** Days kept on each tier, against how far back the human looks when a run goes wrong.

**Where the answers live**: the vendor's pricing page (units, tiers, retention); the vendor's integration doc for the specific harness; the harness's own monitoring docs (what it exports, which flags are beta); the OpenTelemetry GenAI semantic conventions; the product's repo for licence and release activity; the vendor's changelog or blog for ownership changes.

**What goes stale fastest**: free-tier limits and prices; beta and preview flags (Claude Code trace export, Console platform push, vendor agent views); ownership and maintenance status; billing units; retention days; GenAI span names.

=================== skills/in-progress/writing-beats/SKILL.md ===================

---
name: writing-beats
description: Writing, exploit; assemble raw material into a journey of beats, grounding each term before a beat leans on it.
disable-model-invocation: true
---

<what-to-do>

The user has passed (or will pass) a markdown file of raw material. This is **exploit**: the exploring is done, the pile is fixed. Commit to a path through it and mine the pile to fill each beat.

If the user did not say where to save the article, ask once and remember the path.

Then run a beat-by-beat journey, choose-your-own-adventure style:

1. **Establish the prerequisites.** Before any beats, settle with the user what the audience already knows walking in: the concepts that are **grounded** from the start. Everything else must be grounded by a beat before a later beat can use it. See [Grounding](#grounding).
2. Write 2–3 candidate **starting beats**, drawn from the raw material. Each is a different entry point into the article. Each may only lean on grounded concepts; note what new concepts each one grounds. Show the user the beats before writing to the article file. The user picks one. Preview what beats that pick unlocks, as if the user is seeing a little way down the path.
3. Once the user picks a starting beat, write **only that beat** to the article file. A beat may be one sentence or several paragraphs, whatever that beat naturally is. Stop there.
4. Re-read the article file from disk. Then offer 2–3 candidate **next beats**: different directions the journey could pivot to from where the article now stands. Each must be reachable from the current grounded set; note what each one grounds.
5. Loop steps 3–5 until the article reaches a natural end.

</what-to-do>

<supporting-info>

## Grounding

Every **concept** has to be **grounded** before a beat can lean on it: the audience either walked in knowing it or met it in an earlier beat. A beat that reaches for an ungrounded concept loses the reader; that is the one move the journey can't make. The unit is the concept, not the word for it: a beat can lean on an idea the reader lacks even with no jargon in sight. Where a concept has a name (a **term**), grounding it means landing the idea and the term together.

A concept gets grounded one of two ways:

- **Prerequisite**: grounded before the first beat. The audience brings it. Fixed at the start.
- **Introduced**: a beat establishes it, and from then on it's grounded for every later beat.

So each beat does two jobs: it **requires** concepts that are already grounded, and it **grounds** new ones. Keep a running list of what's grounded so far, and update it each time a beat lands.

This is what shapes the choose-your-own-adventure. A candidate beat is only reachable if everything it requires is already grounded; picking a beat that grounds concept X unlocks every beat that was waiting on X. When you offer next beats, they must all be reachable from the current grounded set, and say what each one grounds, so the user can see which paths it opens.

The big lever is what you make a prerequisite versus what you ground inside the piece. Demand too much up front and you shut out readers who don't have it; ground too much inside and the early beats drown in definitions. Settle this with the user when you establish prerequisites, and revisit it whenever a tempting beat turns out to require a concept nothing has grounded yet: the fix is either a grounding beat before it, or promoting the concept to a prerequisite.

## What is a beat

A beat is one move in the journey. It does one thing: sets a scene, lands a point, asks a question, drops an aside, twists the angle. Then it stops, leaving the reader at a place where the next beat can pivot.

A beat is sized by what it needs:

- A single sentence if that's all the move is ("And then nothing happened for three weeks.").
- A short paragraph if the move needs setup.
- Multiple paragraphs if the beat is a self-contained vignette, argument, or example.

If a "beat" needs five paragraphs and three subheadings, it's not a beat; it's two beats glued together. Split it.

## Pulling from the pile

Pull material from the raw pile to populate each beat. You can paraphrase, split, recombine, or quote. The pile is a quarry.

## Ending the journey

The article ends when the journey is complete, not when the pile is empty. Most piles will have leftover fragments that don't make it in. That is fine; that is the point of having more raw material than you need.

## Writing rhythm

- Append one beat at a time. Never write ahead.
- Re-read the article file from disk before every write. Preserve user edits absolutely.
- If the user edits a previous beat substantially, let it change what comes next.
- If the user says "rewrite that beat" or "go back and try a different beat 3", do it: edit in place, leave the rest alone.

</supporting-info>

=================== skills/in-progress/writing-fragments/SKILL.md ===================

---
name: writing-fragments
description: "Writing, explore: mine raw fragments, no structure yet."
disable-model-invocation: true
---

<what-to-do>

This is pure **explore**: widen the space of what could be written without committing to structure. Committing is _exploit_, a separate skill's job. Run a grilling session that produces fragments, interviewing the user relentlessly about whatever they want to write about. Imposing phases, outlines, or article structure is out of scope here.

As fragments emerge from either side of the conversation, append them to a single markdown file.

If the user did not pass a path, ask once where to save the document, then remember it for the rest of the session.

Capture fragments from the very first thing the user says, including the initial prompt.

On first write, put a single H1 at the top with a working title (it can change later) and nothing else: no metadata, no TOC, no date.

</what-to-do>

<supporting-info>

## What is a fragment

A fragment is any piece of text that might survive into the final article. It must be _readable by the author_ (the author can tell what it means), but it does not need to define its terms or be comprehensible to a cold reader. The bar is "is this a piece of good writing?", not "is this a self-contained argument?"

Fragments are deliberately heterogeneous. Examples of what could be a fragment:

- A sharp sentence you'd want to deploy somewhere but don't yet know where.
- A claim with a one-line justification.
- A vignette: a thing that happened, a code snippet, a scenario, an analogy.
- A half-thought: "something about how X feels like Y, work this out later."
- A quote, a piece of dialogue, an overheard line.
- A list of related observations that hang together by feel.
- A complaint, a confession, a punchline.
- A **leading word**: a compact metaphor or coinage the whole piece can hang on (one term that names the idea, the way _tracer bullets_ or _fog of war_ names a whole pattern).

Of these, the leading word is the most valuable fragment to land. It is load-bearing: name the right one in explore and it shapes the structure, the transitions, and the title later, paying dividends through the entire exploit phase. When the conversation circles a recurring idea, push to coin a word for it.

The novelist's diary is the model: years of unstructured noticings that later get mined for raw material. Fragments are noticings.

## File format

```markdown
# Working title

A first fragment lives here.

It can be multiple paragraphs. It can include lists, code, quotes: whatever
shape the fragment naturally takes.

---

A second fragment.

---

> A quoted line that the user wants to keep around.

A reaction to it.

---

- A cluster of related observations
- That hang together by feel
- And want to be near each other
```

Fragments are separated by a horizontal rule (`\n---\n`). No headings inside the body. No tags. No order beyond the order they were added.

## Writing rhythm

Append silently. Don't ask permission for each fragment. Mention what you added in passing ("adding that"), but don't interrupt the conversation with save dialogs.

Before every write: re-read the file from disk. The user may have edited, reordered, or deleted fragments between turns, so preserve their changes. Never overwrite the file; only append (or, if the user asks, edit a specific fragment in place).

The user can say "cut the last one", "rewrite that one sharper", "merge those two" at any time. Treat those as first-class instructions.

</supporting-info>

=================== skills/in-progress/writing-shape/SKILL.md ===================

---
name: writing-shape
description: "Writing, exploit: shape raw material into an article, paragraph by paragraph."
disable-model-invocation: true
---

<what-to-do>

The user has passed (or will pass) a markdown file of raw material. Treat it as the input pile: anything from a tidy list of fragments to a wall of unstructured prose to a transcript. The format does not matter. Read it end-to-end before doing anything else.

Then run a shaping session that produces a separate article document. This is **exploit**: the exploring is done, the pile is fixed: commit to a structure and mine the pile to fill it. Do not edit the raw material file: it is read-only to this skill.

If the user did not say where to save the article, ask once and remember the path.

</what-to-do>

<supporting-info>

## The loop

1. **Read the pile.** Read the input file in full. Form a sense of what's in it.
2. **Establish the prerequisites.** Settle with the user what the reader knows walking in: the concepts that are **grounded** from the start. Everything else must be grounded by a block before a later block can lean on it. See [Grounding](#grounding).
3. **Draft 2–3 candidate openings.** Each opening should imply a different thesis or angle for the article. Show all of them. Force the user to pick or compose a hybrid. The chosen opening defines what the rest of the article must do.
4. **Grow paragraph by paragraph.** After the opening lands, ask "given this opening, what does the reader need to hear next?" Pull material from the pile to answer. The next block may only lean on grounded concepts, and grounds new ones as it lands. Argue about the form the next block takes: a paragraph, a list, a table, a callout, a quote, a code block. Each format choice should be deliberate and defensible.
5. **Append to the article file as you go.** Don't batch. Write each agreed paragraph or block immediately so the user can see the article taking shape.
6. **Loop step 4 until the article is done.** The user decides when it's done.

## Grounding

Every **concept** has to be **grounded** before a block can lean on it: the reader either walked in knowing it or met it in an earlier block. A block that reaches for an ungrounded concept loses the reader. The unit is the concept, not the word for it: a block can lean on an idea the reader lacks even with no jargon in sight. Where a concept has a name (a **term**), grounding it means landing the idea and the term together.

A concept gets grounded one of two ways:

- **Prerequisite**: grounded before the opening. The reader brings it. Fixed at the start.
- **Introduced**: a block establishes it, and from then on it's grounded for the rest of the article.

Keep a running list of what's grounded. When you ask "what does the reader need to hear next?", an ungrounded concept the next move needs is itself the answer: ground it first (here or in an earlier block) or you can't make the move. This is the gap-naming of [Pulling from the pile](#pulling-from-the-pile) one level up: there the pile is missing material; here the article is missing a foundation.

The lever is what you make a prerequisite versus what you ground inside the article. Demand too much up front and you shut readers out; ground too much inside and the opening drowns in definitions. Settle it with the user when you establish prerequisites.

## Conversational feel

This is a grilling session inverted. In ideation, the question was "what are you actually noticing?" Here it's "what is this article actually arguing, and in what order does the reader need to hear it?" Push back. Refuse to let weak transitions slide. If a paragraph doesn't earn its place, cut it.

Specific moves to keep using:

- "What does this paragraph do for the reader that the previous one didn't?"
- "If I cut this, what breaks?"
- "Is this prose, or should it be a list? Why prose?"
- "This sentence is doing two jobs: split it or pick one."
- "The opening promised X. We've drifted to Y. Either re-thread it or change the opening."

## Pulling from the pile

Treat the raw material as a quarry, not a script. Pull a fragment, rework it to fit the surrounding paragraph, and place it. A fragment may be split across multiple paragraphs, merged with another, or paraphrased. The pile's job is to be mined; the article's job is to read as one voice.

If the pile lacks something the article needs, name the gap explicitly: "We need an example here and the pile doesn't have one. Give me one now or we cut this section."

## Format arguments to actually have

When choosing how to render a block, weigh these tradeoffs out loud with the user, not silently:

- **Prose vs. list.** Prose carries argument; lists carry parallel items. If items aren't truly parallel, prose is better. If they are, a list is faster to scan.
- **Inline vs. callout.** Tips, warnings, and asides go in callouts (`> [!TIP]`, `> [!NOTE]`), but only if they'd genuinely derail the main argument inline. Otherwise leave them inline.
- **Table vs. repeated structure.** If the same shape repeats 3+ times with the same fields, a table. Otherwise prose with bold leads.
- **Quote vs. paraphrase.** Quote when the original wording is the point. Paraphrase when only the idea matters.
- **Code block vs. inline code.** Multi-line, runnable, or illustrative → block. Single token or identifier → inline.

## Writing rhythm

Append to the article file as each block is agreed. Re-read the file from disk before every write: the user may have edited between turns. Never overwrite blindly. If the user wants a paragraph rewritten, edit that specific paragraph in place; leave the rest alone.

## Out of scope

- Mining for new fragments that aren't in the pile (handle gaps as in "Pulling from the pile").
- Editing the raw material file.
- Publishing, formatting for a specific platform, or adding frontmatter the user didn't ask for.

</supporting-info>

=================== skills/misc/git-guardrails-claude-code/SKILL.md ===================

---
name: git-guardrails-claude-code
description: Set up Claude Code hooks to block dangerous git commands (push, reset --hard, clean, branch -D, etc.) before they execute. Use when user wants to prevent destructive git operations, add git safety hooks, or block git push/reset in Claude Code.
---

# Setup Git Guardrails

Sets up a PreToolUse hook that intercepts and blocks dangerous git commands before Claude executes them.

## What Gets Blocked

- `git push` (all variants including `--force`)
- `git reset --hard`
- `git clean -f` / `git clean -fd`
- `git branch -D`
- `git checkout .` / `git restore .`

When blocked, Claude sees a message telling it that it does not have authority to access these commands.

## Steps

### 1. Ask scope

Ask the user: install for **this project only** (`.claude/settings.json`) or **all projects** (`~/.claude/settings.json`)?

### 2. Copy the hook script

The bundled script is at: [scripts/block-dangerous-git.sh](scripts/block-dangerous-git.sh)

Copy it to the target location based on scope:

- **Project**: `.claude/hooks/block-dangerous-git.sh`
- **Global**: `~/.claude/hooks/block-dangerous-git.sh`

Make it executable with `chmod +x`.

### 3. Add hook to settings

Add to the appropriate settings file:

**Project** (`.claude/settings.json`):

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/block-dangerous-git.sh"
          }
        ]
      }
    ]
  }
}
```

**Global** (`~/.claude/settings.json`):

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/hooks/block-dangerous-git.sh"
          }
        ]
      }
    ]
  }
}
```

If the settings file already exists, merge the hook into the existing `hooks.PreToolUse` array. Don't overwrite other settings.

### 4. Ask about customization

Ask if user wants to add or remove any patterns from the blocked list. Edit the copied script accordingly.

### 5. Verify

Run a quick test:

```bash
echo '{"tool_input":{"command":"git push origin main"}}' | <path-to-script>
```

Should exit with code 2 and print a BLOCKED message to stderr.

=================== skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh ===================

#!/bin/bash

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command')

DANGEROUS_PATTERNS=(
  "git push"
  "git reset --hard"
  "git clean -fd"
  "git clean -f"
  "git branch -D"
  "git checkout \."
  "git restore \."
  "push --force"
  "reset --hard"
)

for pattern in "${DANGEROUS_PATTERNS[@]}"; do
  if echo "$COMMAND" | grep -qE "$pattern"; then
    echo "BLOCKED: '$COMMAND' matches dangerous pattern '$pattern'. The user has prevented you from doing this." >&2
    exit 2
  fi
done

exit 0

=================== skills/misc/migrate-to-shoehorn/SKILL.md ===================

---
name: migrate-to-shoehorn
description: Migrate test files from `as` type assertions to @total-typescript/shoehorn. Use when user mentions shoehorn, wants to replace `as` in tests, or needs partial test data.
---

# Migrate to Shoehorn

## Why shoehorn?

`shoehorn` lets you pass partial data in tests while keeping TypeScript happy. It replaces `as` assertions with type-safe alternatives.

**Test code only.** Never use shoehorn in production code.

Problems with `as` in tests:

- Trained not to use it
- Must manually specify target type
- Double-as (`as unknown as Type`) for intentionally wrong data

## Install

```bash
npm i @total-typescript/shoehorn
```

## Migration patterns

### Large objects with few needed properties

Before:

```ts
type Request = {
  body: { id: string };
  headers: Record<string, string>;
  cookies: Record<string, string>;
  // ...20 more properties
};

it("gets user by id", () => {
  // Only care about body.id but must fake entire Request
  getUser({
    body: { id: "123" },
    headers: {},
    cookies: {},
    // ...fake all 20 properties
  });
});
```

After:

```ts
import { fromPartial } from "@total-typescript/shoehorn";

it("gets user by id", () => {
  getUser(
    fromPartial({
      body: { id: "123" },
    }),
  );
});
```

### `as Type` → `fromPartial()`

Before:

```ts
getUser({ body: { id: "123" } } as Request);
```

After:

```ts
import { fromPartial } from "@total-typescript/shoehorn";

getUser(fromPartial({ body: { id: "123" } }));
```

### `as unknown as Type` → `fromAny()`

Before:

```ts
getUser({ body: { id: 123 } } as unknown as Request); // wrong type on purpose
```

After:

```ts
import { fromAny } from "@total-typescript/shoehorn";

getUser(fromAny({ body: { id: 123 } }));
```

## When to use each

| Function        | Use case                                           |
| --------------- | -------------------------------------------------- |
| `fromPartial()` | Pass partial data that still type-checks           |
| `fromAny()`     | Pass intentionally wrong data (keeps autocomplete) |
| `fromExact()`   | Force full object (swap with fromPartial later)    |

## Workflow

1. **Gather requirements** - ask user:
   - What test files have `as` assertions causing problems?
   - Are they dealing with large objects where only some properties matter?
   - Do they need to pass intentionally wrong data for error testing?

2. **Install and migrate**:
   - [ ] Install: `npm i @total-typescript/shoehorn`
   - [ ] Find test files with `as` assertions: `grep -r " as [A-Z]" --include="*.test.ts" --include="*.spec.ts"`
   - [ ] Replace `as Type` with `fromPartial()`
   - [ ] Replace `as unknown as Type` with `fromAny()`
   - [ ] Add imports from `@total-typescript/shoehorn`
   - [ ] Run type check to verify

=================== skills/misc/scaffold-exercises/SKILL.md ===================

---
name: scaffold-exercises
description: Create exercise directory structures with sections, problems, solutions, and explainers that pass linting. Use when user wants to scaffold exercises, create exercise stubs, or set up a new course section.
---

# Scaffold Exercises

Create exercise directory structures that pass `pnpm ai-hero-cli internal lint`, then commit with `git commit`.

## Directory naming

- **Sections**: `XX-section-name/` inside `exercises/` (e.g., `01-retrieval-skill-building`)
- **Exercises**: `XX.YY-exercise-name/` inside a section (e.g., `01.03-retrieval-with-bm25`)
- Section number = `XX`, exercise number = `XX.YY`
- Names are dash-case (lowercase, hyphens)

## Exercise variants

Each exercise needs at least one of these subfolders:

- `problem/` - student workspace with TODOs
- `solution/` - reference implementation
- `explainer/` - conceptual material, no TODOs

When stubbing, default to `explainer/` unless the plan specifies otherwise.

## Required files

Each subfolder (`problem/`, `solution/`, `explainer/`) needs a `readme.md` that:

- Is **not empty** (must have real content, even a single title line works)
- Has no broken links

When stubbing, create a minimal readme with a title and a description:

```md
# Exercise Title

Description here
```

If the subfolder has code, it also needs a `main.ts` (>1 line). But for stubs, a readme-only exercise is fine.

## Workflow

1. **Parse the plan** - extract section names, exercise names, and variant types
2. **Create directories** - `mkdir -p` for each path
3. **Create stub readmes** - one `readme.md` per variant folder with a title
4. **Run lint** - `pnpm ai-hero-cli internal lint` to validate
5. **Fix any errors** - iterate until lint passes

## Lint rules summary

The linter (`pnpm ai-hero-cli internal lint`) checks:

- Each exercise has subfolders (`problem/`, `solution/`, `explainer/`)
- At least one of `problem/`, `explainer/`, or `explainer.1/` exists
- `readme.md` exists and is non-empty in the primary subfolder
- No `.gitkeep` files
- No `speaker-notes.md` files
- No broken links in readmes
- No `pnpm run exercise` commands in readmes
- `main.ts` required per subfolder unless it's readme-only

## Moving/renaming exercises

When renumbering or moving exercises:

1. Use `git mv` (not `mv`) to rename directories - preserves git history
2. Update the numeric prefix to maintain order
3. Re-run lint after moves

Example:

```bash
git mv exercises/01-retrieval/01.03-embeddings exercises/01-retrieval/01.04-embeddings
```

## Example: stubbing from a plan

Given a plan like:

```
Section 05: Memory Skill Building
- 05.01 Introduction to Memory
- 05.02 Short-term Memory (explainer + problem + solution)
- 05.03 Long-term Memory
```

Create:

```bash
mkdir -p exercises/05-memory-skill-building/05.01-introduction-to-memory/explainer
mkdir -p exercises/05-memory-skill-building/05.02-short-term-memory/{explainer,problem,solution}
mkdir -p exercises/05-memory-skill-building/05.03-long-term-memory/explainer
```

Then create readme stubs:

```
exercises/05-memory-skill-building/05.01-introduction-to-memory/explainer/readme.md -> "# Introduction to Memory"
exercises/05-memory-skill-building/05.02-short-term-memory/explainer/readme.md -> "# Short-term Memory"
exercises/05-memory-skill-building/05.02-short-term-memory/problem/readme.md -> "# Short-term Memory"
exercises/05-memory-skill-building/05.02-short-term-memory/solution/readme.md -> "# Short-term Memory"
exercises/05-memory-skill-building/05.03-long-term-memory/explainer/readme.md -> "# Long-term Memory"
```

=================== skills/misc/setup-pre-commit/SKILL.md ===================

---
name: setup-pre-commit
description: Set up Husky pre-commit hooks with lint-staged (Prettier), type checking, and tests in the current repo. Use when user wants to add pre-commit hooks, set up Husky, configure lint-staged, or add commit-time formatting/typechecking/testing.
---

# Setup Pre-Commit Hooks

## What This Sets Up

- **Husky** pre-commit hook
- **lint-staged** running Prettier on all staged files
- **Prettier** config (if missing)
- **typecheck** and **test** scripts in the pre-commit hook

## Steps

### 1. Detect package manager

Check for `package-lock.json` (npm), `pnpm-lock.yaml` (pnpm), `yarn.lock` (yarn), `bun.lockb` (bun). Use whichever is present. Default to npm if unclear.

### 2. Install dependencies

Install as devDependencies:

```
husky lint-staged prettier
```

### 3. Initialize Husky

```bash
npx husky init
```

This creates `.husky/` dir and adds `prepare: "husky"` to package.json.

### 4. Create `.husky/pre-commit`

Write this file (no shebang needed for Husky v9+):

```
npx lint-staged
npm run typecheck
npm run test
```

**Adapt**: Replace `npm` with detected package manager. If repo has no `typecheck` or `test` script in package.json, omit those lines and tell the user.

### 5. Create `.lintstagedrc`

```json
{
  "*": "prettier --ignore-unknown --write"
}
```

### 6. Create `.prettierrc` (if missing)

Only create if no Prettier config exists. Use these defaults:

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": false,
  "trailingComma": "es5",
  "semi": true,
  "arrowParens": "always"
}
```

### 7. Verify

- [ ] `.husky/pre-commit` exists and is executable
- [ ] `.lintstagedrc` exists
- [ ] `prepare` script in package.json is `"husky"`
- [ ] `prettier` config exists
- [ ] Run `npx lint-staged` to verify it works

### 8. Commit

Stage all changed/created files and commit with message: `Add pre-commit hooks (husky + lint-staged + prettier)`

This will run through the new pre-commit hooks: a good smoke test that everything works.

## Notes

- Husky v9+ doesn't need shebangs in hook files
- `prettier --ignore-unknown` skips files Prettier can't parse (images, etc.)
- The pre-commit runs lint-staged first (fast, staged-only), then full typecheck and tests
