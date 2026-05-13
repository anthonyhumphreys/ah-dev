---
title: 'How I Use Codex'
summary: 'A practical note on using Codex as a real development partner: skills, goals, browser checks, and keeping the human in charge.'
order: 30
---

# How I Use Codex

I do not use Codex like a chatbot.

That sounds like semantics. It is not.

A chatbot is where you ask a question and get a plausible paragraph back. Sometimes useful.
Sometimes the paragraph has the structural integrity of wet cardboard.

Codex is different because it works inside the repo. It can read the code, make the change, run the
tests, notice the thing it broke, fix that too, and then tell you what actually happened. That is a
much more interesting loop.

The impressive bit is not "AI writes code". That headline is already tired. The impressive bit is
that Codex can stay with a change from investigation to implementation to verification without
forgetting what the job was halfway through.

## Start with the shape of the work

The best Codex sessions start with intent, not a giant prompt pretending to be a spec.

I try to describe the outcome I want, the trade-offs that matter, and anything that would make the
result feel wrong. That might be product tone, accessibility, existing architecture, a dependency I
do not want introduced, or a user experience detail that matters more than the neatest abstraction.

Then I let Codex inspect the codebase before touching things.

This is the part people skip, and it is why so much AI-generated code has that strange showroom
quality: shiny, symmetrical, and completely unaware of the building it is supposed to live in.

If Codex writes from a generic memory of how React apps usually work, the result might look fine in
a diff and still be wrong for the system. So I let it read first. Patterns, tests, naming, weird
legacy decisions, local helper functions, the lot.

Context first. Code second. The boring order wins because software is mostly boring details
standing on each other's shoulders.

## Skills keep it from freelancing too hard

Codex skills are one of the more useful parts of the setup.

For me, skills are local playbooks. They tell Codex how I want a certain kind of work handled.

A frontend skill can say how to approach visual QA, when to use shadcn components, how to handle
responsive screenshots, and what not to do when building a dashboard. A GitHub skill can define how
to read PR comments and turn them into patches. A project-specific skill can preserve decisions that
would otherwise live in someone's head, which is the least queryable database known to engineering.

The important bit is that skills reduce drift.

Without them, every session starts with a small negotiation about standards. With them, Codex can
pick up local preferences: use existing patterns, test properly, do not invent a new design system
because a button looked lonely, and do not describe half-finished work as if it were done.

That last one is not decorative. It is the difference between a useful assistant and a confident
intern with commit access.

Skills make Codex less of a genius tourist. That is good. I do not need a tourist. I need something
that understands the house rules before it starts moving furniture.

## Goals make longer work less slippery

For bigger changes, I use goals.

A goal gives the session a clear objective and a way to track whether the work is actually finished.
That matters because coding tasks have a habit of expanding. You start with "move this to
Tailwind" and suddenly you are looking at theme providers, test utilities, accessibility contrast,
metadata, and one old CSS module hiding behind the furniture.

The goal keeps the work honest. It gives Codex something to complete, not just something to discuss.

I still review the output. Always. The point is not to outsource responsibility. The point is to
make the agent carry more of the mechanical load while I stay focused on whether the result is
coherent, shippable, and aligned with the product.

This is where I think a lot of the discourse gets silly. The question is not "can AI replace a
developer?" That is the least interesting framing. The better question is: how much low-level
coordination can I hand off while still keeping the product judgement where it belongs?

For a lot of implementation work, the answer is: more than I expected.

## Browser checks are where the truth lives

Code can compile while the interface is quietly embarrassing itself.

That is why I care about browser checks. The Chrome MCP setup is useful here because it lets Codex
inspect rendered pages, not just source files. It can open the app, check layout, inspect console
errors, test interactions, and compare what the code claims with what the browser actually does.

When Chrome MCP is not available, Playwright screenshots are still a decent fallback. Not perfect,
but good enough to catch the obvious crimes: text overflowing, dark mode contrast going weird,
mobile layouts collapsing, or some component doing interpretive dance where a form should be.

This is one of the biggest differences between "AI wrote code" and "AI helped ship a change".
Rendered validation closes the loop.

I care about this because source-code-only confidence is fake confidence. The user does not
experience your file tree. They experience the page. If the browser says the layout is broken, the
browser is right and your abstraction can file a complaint with management.

## The workflow that works for me

The pattern I keep coming back to is:

- explain the outcome and constraints
- let Codex inspect the repo
- make small, direct changes
- run tests and type checks
- verify in the browser when the work is visual
- review the diff myself

That is not glamorous. It is just how software gets less imaginary.

Codex is strongest when I treat it as a capable collaborator with a narrow brief and a lot of
context. It is weakest when I ask for a generic answer and accept the first plausible thing it says.
Again, much like humans, but cheaper to run and less likely to schedule a workshop.

The better I am at giving Codex the actual constraints, the better it gets. Not because prompting is
some mystical new profession, but because clear constraints have always been half the job. The
difference is that now the thing receiving the constraints can edit 12 files while I make coffee.

## The human bit does not go away

Using Codex well still requires taste.

You need to know when the abstraction is overbuilt. You need to notice when the copy sounds like it
was assembled from LinkedIn vapour. You need to care whether the UI actually works for the person
using it. You need to spot when a technically correct change has missed the point.

The tool can move quickly. That is useful. It also means you can make bad decisions faster, with
syntax highlighting.

My working rule is simple: Codex can drive a lot of the execution, but I keep hold of the product
judgement. The more capable the tool gets, the more important that becomes.

The goal is not to have AI build software instead of me.

The goal is to spend more of my time on the parts where judgement matters, and less of it manually
herding boilerplate into the correct folder.

And honestly, Codex is good. Not "bow before the machine" good. Calm down. But good in the way a
tool becomes good when it changes what you are willing to attempt on a Tuesday evening.

That is the bar that matters to me. Does it help me ship better work? Does it help me notice more
problems before users do? Does it let me stay closer to the product instead of drowning in ceremony?

When used properly, yes.

That is enough. We do not need to build a religion around it. We can just use the tool.
