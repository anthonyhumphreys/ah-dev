---
title: 'Building Anvil Registry With Codex'
summary: 'A note on turning a dependency-safety spec into an open-source npm registry gateway using Codex goals, plan mode, and a lot of verification.'
order: 40
---

# Building Anvil Registry With Codex

[Anvil Registry](https://github.com/anthonyhumphreys/anvil-registry/) started as a fairly simple
irritation: `npm install` is an enormous amount of trust squeezed into one command.

That is not a new observation. The JavaScript ecosystem has spent years collecting examples of why
dependency installs deserve more scrutiny: lifecycle scripts, package confusion, typo-squatting,
unexpected maintainer changes, compromised releases, and the occasional package that appears to
have been assembled in a room with no windows and a lot of confidence.

The useful question was smaller: what would I actually want in front of install traffic?

The answer became Anvil: an open-source npm registry gateway and Node devcontainer harness for
safer dependency installs. The gateway sits between package managers and upstream registries,
proxies metadata and tarballs, caches artefacts, applies deterministic policy, queues analysis, and
gives reviewers a place to understand decisions. The Node Base image gives unknown repositories a
safer local install path, with safe mode, observed mode, reports, and explicit handling for packages
that need lifecycle scripts.

It is alpha software. Very deliberately alpha software. The point of open sourcing it now is to
make the shape inspectable while the decisions are still malleable, not to pretend a security tool
is finished because a README learned to stand upright.

## The spec came first

I wrote the spec before building the system.

That sounds obvious, but with AI coding tools it is dangerously easy to skip. You can ask for a
thing, get a tree of files back, and only later notice that the model has built a pleasant-looking
alternate universe. Technically impressive. Operationally not your problem.

So I used plan mode first.

The spec described the actual product boundary: registry gateway, policy engine, analysis worker,
admin surfaces, CLI, docs, local Docker path, AWS/SST deployment path, and the companion Node Base
image. It also named the non-negotiables:

- deterministic policy is the enforcement layer
- optional LLM review can add context, but does not get to be the authority
- package identity and cached artefacts matter
- overrides need reasons and expiry
- private package metadata should not wander off for AI review unless explicitly enabled
- local development should be possible without pretending every user has production infrastructure

That gave Codex something better than a prompt. It gave it constraints.

## Then I used `/goal` on high ...for 15 hours

Once the spec was written, I used Codex with `/goal` on high and let it carry the larger delivery
loop.

The useful part was not that it generated code quickly, although it did. The useful part was that it
could keep returning to the goal: read the existing files, make the next small change, run the
checks, inspect the failure, patch the gap, update the docs, then keep going.

That loop matters on a project like this because the work crosses a lot of surfaces:

- Fastify services for gateway, admin, and worker behaviour
- shared TypeScript packages for config, policy, registry clients, persistence, queueing, analysis,
  provenance, and types
- a CLI that has to be scriptable enough for local and CI use
- Docker Compose for local trials
- SST infrastructure for deployment experiments
- public docs and repo docs that need to match the code
- Node Base helper scripts for safer install workflows

None of those pieces is impossible alone. The difficulty is keeping them aligned. A registry gateway
with stale docs is a puzzle box with ports. A policy engine with unclear override behaviour is
decorative security. A CLI that cannot explain its decisions is just another command that fails with
an attitude.

Codex was useful because it could hold more of that coordination work at once.

## The human job did not disappear

The human job moved up a level.

I still had to decide what counted as the product, what belonged in the first public version, what
was too grand for alpha, and where the security posture needed to be boring rather than clever. I
also had to review the result like someone who might have to maintain it later, because future me is
not an abstract stakeholder. Future me has a calendar and a temper.

The biggest judgement calls were about authority.

LLM review is useful as structured reviewer context. It can summarize suspicious patterns, flag
interesting changes, and help a human focus. It should not be the thing that allows a package
through the gate. Deterministic policy owns that decision. That boundary is not anti-AI. It is basic
systems hygiene.

The same applied to the open-source posture. The project needed to be public enough to inspect, run,
and critique, but honest about being rough alpha software. Security tooling that oversells itself is
how teams end up trusting the brochure instead of the behaviour.

## What exists now

The current public version includes the main project shape:

- a registry gateway for npm-compatible install traffic
- policy decisions before tarball access
- metadata and tarball proxying
- cached analysis keyed around package identity
- worker-based static analysis
- CLI commands for explain, scan, warm, queues, reports, overrides, and policy tests
- admin review surfaces
- Docker Compose local infrastructure
- SST deployment scaffolding
- a Node 22 devcontainer base image with safe and observed install modes
- public docs at [anvil-registry.vercel.app](https://anvil-registry.vercel.app/)

It is not the final form. Good. Final forms are suspicious this early.

The useful version of open source is not "look, a repo". It is a working invitation: inspect the
architecture, run the quickstart, disagree with the policy defaults, test the install path, and
point at the parts that are still too trusting.

## What I learned

Codex is strongest when it is not asked to improvise the product.

Writing the spec in plan mode first changed the whole build. It made the agent more useful because
the work had edges. `/goal` on high then turned the build into an extended delivery loop rather than
a series of disconnected prompts.

That is the pattern I trust more now:

- make the product boundary explicit
- write down the boring constraints
- let Codex inspect before editing
- keep changes tied to a goal
- run the checks
- update the docs while the code is still warm
- review the output with human judgement, because syntax is not strategy and confidence is not
  correctness

Anvil Registry exists because dependency installs are too important to leave entirely to vibes.

Codex helped build it because the work was specified, constrained, checked, and reviewed. That is
the version of AI-assisted development I can get behind: not magic, not replacement, just a very
capable collaborator doing useful work inside a well-defined box.
