---
title: 'Building Anvil'
summary: 'How Anvil grew from a custom agentic coding harness into an agentic development environment, then into Registry and Cloud.'
order: 50
---

# Building Anvil

Anvil did not start as a 'stack'. It still isn't, really, it is three independent projects that have a bunch in common and compliment each other quite nicely, so I decided to bundle them in a monorepo. This also makes it easier to keep the shared pieces in sync, and to make sure the projects are actually useful together.

The Anvil app started as a custom agentic coding harness inspired by T3Code: a practical way to run agents 
inside real projects without pretending a chat window was the whole development environment. I wanted something that
could understand a repository, stay attached to a work item, preserve context across a delivery
loop, and help me move from intent to implementation without scattering the important details
across terminals, tabs, issue trackers, and whatever note I had optimistically named
`plan-final-2.md`.

That first version was deliberately narrow. It was built around the job I needed it to do: help
agents work inside software projects with enough grounding to be useful and enough structure to be
reviewable.

Over time, that narrow tool started pulling in more of the surrounding workflow. Not scope creep for the fun of it,
but because the lines between what counts as workflow, productivity and context all blurred into one, so having one place
where the work is planned, defined, implemented, checked, and reviewed became more useful than a tool that only ran agents.
I also really liked seeing the development of Claude's code review and codex similar features too. Only...they felt a bit lacking?
And in Claude's case, extremely expensive. So I built things like the code review feature which runs customisable rubrics against the codebase,
a PR or a commit, and has a pleasant UI to either post the feedback to the PR or action it.

Code does not happen in isolation. It sits inside tickets, docs, branches, pull requests, design
notes, deployment constraints, production incidents, and the tiny archaeological record of decisions
that live in a repo. If an agent only sees the current prompt, it is under-informed. If a developer
has to manually reconstruct context every time, the tool is not carrying enough weight.

## From harness to ADE

The name I keep coming back to is an ADE: an agentic development environment.

That sounds a bit grand, so the useful definition is simpler: Anvil is becoming the place where the
work item, repository, agent session, and development context sit together.

The original harness was about running agents. The ADE shape is about supporting the whole path from
problem to reviewed change:

- understand the work item
- inspect the relevant repository state
- plan the change against real constraints
- make the implementation
- run checks
- review the diff
- capture the reasoning
- connect the output back to the work item system

That loop is useful for developers, obviously. But the target is wider than developers.

A product person should be able to understand what changed and why. A tester should be able to see
the acceptance criteria, the affected area, and the risks worth checking. A technical lead should be
able to review the work without piecing the story together from five separate systems. A support
person should be able to connect a customer issue to the code path that actually changed.

The point is not to make everyone write code. The point is to make the development context less
fragmented.

## Repository awareness is the grounding layer

The most important Anvil idea is still repo awareness.

Agentic coding gets much better when the agent can read the project before making claims about it.
That sounds obvious, but a lot of AI tooling still behaves as if a confident answer is roughly
equivalent to an inspected codebase. It is not. Confidence without repo context is just a well-lit
guess.

Anvil treats the repository as the grounding layer. The agent should know the file tree, current
diff, conventions, scripts, tests, docs, and local project rules. It should understand whether a
change belongs in an existing module or whether the new abstraction it is about to invent is solving
a real problem.

That grounding matters because the work item alone is not enough. Tickets are useful, but they are
usually compressed versions of reality. The repo contains the real constraints: the old migration,
the wrapper nobody wants to touch, the half-finished test helper, the auth boundary that has to
remain a real boundary.

Anvil works best when the work item and repository context are held together. The ticket says what
the change is for. The repo says how it can actually fit.

## The workspace idea

The workspace concept borrows heavily from VS Code.

That is intentional. VS Code got something very right: a workspace is not just a folder. It is the
local operating context for a piece of work. Files, settings, extensions, terminals, tasks, source
control, and developer habits all gather around that boundary.

Anvil uses a similar idea, but aims it at development context rather than only editing context. A
workspace can hold the repo, linked work items, agent sessions, notes, checks, and eventually more
of the surrounding SDLC state.

That matters because software teams rarely work on "a repo" in the abstract. They work on a
workspace shaped by the current project, product area, branch, issue, environment, and release
target. If Anvil can preserve that shape, agents can do more than answer prompts. They can work
inside the same frame as the people around them.

## Then came Anvil Registry

Anvil Registry came from a different but related concern: supply-chain security.

`npm install` is a lot of trust hidden behind a short command. It can run lifecycle scripts. It can
pull hundreds of packages into a project before anyone has looked at what changed. It can turn a
typo, a compromised maintainer account, a package-confusion mistake, or a suspicious new release
into executable code on a developer machine or CI runner.

That problem exists with or without agents. Most teams already rely on a huge amount of third-party
code, and the install path is one of the places where trust becomes execution very quickly. Anvil
Registry started as a set of countermeasures for that problem: put a deliberate control point in
front of dependency installs, make package decisions inspectable, and avoid treating upstream
registry traffic as harmless just because it is normal.

Anvil Registry puts a controlled gateway between package managers and upstream registries. The
gateway speaks the npm registry shape that existing tools already understand, then applies policy
before tarballs are handed over. In practical terms, it is trying to solve a few connected problems:

- make install traffic inspectable instead of invisible
- cache package metadata and tarballs so decisions are tied to the artefact that was actually seen
- apply deterministic policy before code reaches the project
- queue deeper analysis outside the hot install path
- give humans explainable decisions, reports, and override controls
- provide a safer local path for unknown repositories through the Node Base devcontainer image

The architecture is deliberately boring in the places where boring is a virtue. Package managers
ask Registry for metadata and tarballs. Registry checks policy and package identity, proxies and
caches upstream artefacts, records decisions, and hands work to an analysis worker. The worker can
inspect manifests, package contents, provenance signals, file trees, lifecycle script usage, and
other risk indicators. The CLI and admin surfaces then give people a way to explain a decision,
scan packages, warm caches, review reports, and manage overrides.

The important line is authority. AI-assisted review can help summarize suspicious patterns or point
at things worth checking, but it does not get to be the enforcement layer. Deterministic policy owns
the gate. Humans own the judgement.

That makes Registry useful on its own, even if there is no agent anywhere near the repo. It gives
developers and teams a more inspectable install path, a place to encode policy, and a way to review
exceptions without pretending every dependency decision can live in someone's head.

That project pushed Anvil beyond "how do agents edit code?" into "what infrastructure does agentic
development need around it?"

The agentic angle is a bonus, but it is a real one. Agents can move quickly through unfamiliar
repositories, which means dependency changes can become part of a larger automated edit loop. In
that world, having a checkpoint in front of install traffic matters even more. "The model probably
noticed" is not a security boundary.

It was also the first time I built a substantial project using Codex `/goal`. That became its
own post because the process mattered: write the spec first, let Codex work against a concrete
target, keep running checks, and keep the human decision-making where it belongs. I wrote more about
that build in [Building Anvil Registry With Codex](/blog/posts/building-anvil-registry-with-codex).

Registry is part of the same larger bet as Anvil Desktop: better delivery requires better context.
Sometimes that context is a work item and a diff. Sometimes it is package identity, provenance,
tarball contents, and install policy.

## Now Anvil Cloud

Anvil Cloud is the piece I was slowest to describe properly, because it sounds like a hosted-agent
story if you say it too quickly.

It is not that.

The motivation is more specific: agents work best when the world they are editing is small,
explicit, and inspectable. Cloud infrastructure is usually the opposite. A useful app quickly runs
into auth, data, files, jobs, logs, queues, environment variables, deploy state, gateways, IAM, and
provider-specific defaults. Those are awkward enough for humans. They are a very sharp surface for
generated code.

There are a few interesting projects circling this problem from different directions. [SST](https://sst.dev/docs/)
makes full-stack infrastructure much more approachable by defining app resources in code and keeping
those resources linked to the application. [Lakebed](https://docs.lakebed.dev/) pushes toward an
agent-native shape: small TypeScript apps with a CLI/runtime that an agent can create, inspect, and
deploy without wandering through a cloud console.

I found SST to be amazing, but agents constantly trip over nuance as soon as you get to any sort of level of
complexity. Lakebed is a very interesting approach, and I really love the pitch of 'a shitty cloud for shitty apps'.
But I wanted something that *could* be used for production apps, not just a playground. I wanted a shape that could be used 
for real work, but still small enough to be inspectable, testable, and reviewable before it becomes real infrastructure.

Anvil Cloud is my version of that problem space, built around the Cell contract rather than
raw infrastructure.

An Anvil Cell is a small TypeScript app unit. It can contain server handlers, client UI, schema,
endpoints, jobs, workflows, services, mounted agents, and declared capabilities. The important bit is
the boundary: Cell code should use Anvil runtime primitives like `ctx.db`, `ctx.files`, `ctx.env`,
`ctx.log`, jobs, and workflows. It should not import AWS SDKs, SST, CDK, Terraform, Pulumi, or raw
provider resources just to build a small app.

The platform pieces exist to make that boundary useful:

- Runtime runs the same request contract locally, in tests, and behind deployment adapters.
- Builder emits the server bundle, client bundle, manifest, generated client metadata, and build
  output.
- Guard checks imports, direct environment access, outbound fetches, and undeclared capabilities
  before the app turns into provider work.
- Lens and the CLI expose manifests, logs, auth state, database state, workflows, services, and
  diagnostics in forms humans and agents can inspect.
- Deployment adapters map the Cell's capabilities to provider resources. AWS is the first adapter,
  but AWS is not the app contract.

Cloud's job is not to "run an agent somewhere". It is to give agents and developers a smaller
application model that can become real infrastructure without making the app author hand-roll the
provider machinery.

Cloud is early alpha. The local runtime, builder, Lens, CLI, auth, workflow, service, agent, and AWS
preview work are moving together, but the important thing is the contract. If a Cell can
be built, checked, inspected, and planned before it touches a provider, the system has a fighting
chance of being useful without becoming a very confident infrastructure accident. This feels like a solved
problem with terraform and SST, but those tools are not designed for agentic development. How many times have
you deployed using terraform only to later find your lambda is missing a permission that is only needed at runtime?
Or your SST app is failing because the agent generated a resource that is not actually supported by the provider?

## Where this is going

The direction is clear enough now.

Anvil started as an agentic coding harness because that was the immediate problem. It is becoming an
ADE because the real problem is broader: development with agents needs clear boundaries around the
work, the code, the dependencies, and the runtime.

Anvil Registry added a boundary around dependency ingress.

Anvil Cloud adds a boundary around the apps agents and developers build: the Cell contract, the
runtime, the manifest, the checks, the inspection surface, and the adapter path to real providers.

Together, they point at a more complete environment for building software with agents involved, but
not with judgement outsourced to them. Developers should get deeper repo-aware assistance. Product,
QA, support, and technical leadership should get clearer context. Teams should get a delivery loop
with fewer mystery steps and more things you can inspect before they matter.

The aim is to keep the useful parts of agentic development grounded: tied to the repo, checked
against the work, explicit about risk, and boring enough to review before it reaches production.
