---
title: 'I Built an AI Tool to Practise GMing'
summary: 'Why GMprentice exists: prep tools are everywhere, but practice tools are rare.'
order: 20
---

# I Built an AI Tool to Practise GMing

I love tabletop roleplaying games: the improvisation, the shared story, the moment when a table
starts moving like it has one brain and four terrible plans.

I have also started GMing more recently, and that exposed a strange gap. GMing is clearly a
performance skill. You are making rulings, managing pacing, switching voices, reading the room,
recovering from surprises, and trying to keep the whole thing fun without turning into a human
spreadsheet.

Most creative performance roles have rehearsal. Actors rehearse. Musicians rehearse. Developers
break things in sandboxes and then pretend the sandbox was always part of the process.

GMs mostly prepare, then perform live.

That is the itch behind [GMprentice](https://www.gmprentice.app/).

## Prep is not practice

There are already plenty of GM tools. They help with worlds, encounters, names, lore, stat blocks,
and dialogue. Useful stuff. I use some of it myself.

But those tools mostly make material.

They do not really help you practise the live part:

- handling players who go somewhere unexpected
- making a ruling while the table waits
- giving quieter players room without dragging the scene
- recovering when an encounter goes flat
- improvising when the party makes a choice no sensible prep document would have predicted

That is the bit I wanted to work on. Not more notes. More reps.

## The confidence problem

Most GMs I know are not short on ideas. The bigger issue is confidence.

It is hard to practise tense scenes, awkward rulings, pacing problems, or messy table moments
without putting real people through the experiment. Learning only by doing is honest, but it can
also be a bit brutal.

GMprentice is meant to give GMs a private space to try things before game night. Not because it can
replace a real table. It cannot, and should not. The point is to make practice less scarce.

## Why AI fits here

The useful AI pattern is not "write my campaign for me". That is the least interesting version of
the idea.

The more useful pattern is simulation.

GMprentice is built around the idea of modelling a party rather than presenting a single assistant.
Different AI players can have different instincts, misunderstandings, preferences, and wonderfully
inconvenient ideas. The goal is not perfect output. The goal is pressure, interruption, ambiguity,
and enough friction that the GM has to respond.

In that sense, it is closer to a training simulator than a content generator.

## What it is, and what it is not

GMprentice is a rehearsal space for encounters, rulings, roleplay, and confidence.

It is not a replacement for players. It is not a substitute for the creativity that happens at a
real table. It is not trying to be a complete rules engine, and it is definitely not a content mill
with dice.

The product only works if the GM stays in control. AI should create useful resistance, not take the
seat at the head of the table.

## Building it

The interesting technical challenge has not been "can the model produce fantasy words?" We are well
past that particular parlour trick.

The harder questions are product questions:

- how do you keep multiple simulated players feeling consistent?
- how much unpredictability is useful before it becomes nonsense?
- how do you make failure feel instructive rather than frustrating?
- where should the system push back, and where should it get out of the way?

I built it with heavy use of AI coding tools too, especially for planning edge cases and iterating
on implementation details. The surprising part was not raw speed, although the speed was ridiculous.
It was how much more attention I could spend on journeys, product shape, and the actual experience
instead of getting swallowed by every small styling or plumbing task.

That is not magic. You still need judgement. You still need to know when the model has confidently
invented a rake for you to step on. But used carefully, it changes the amount of product surface a
single maker can reasonably explore.

## Why it matters

More people are finding tabletop RPGs, and more people want to try GMing. That is brilliant. It is
also intimidating.

If we want more confident, inclusive, creative tables, we need tools that help people learn the
craft of running games, not just prepare better notes.

Practising privately should not feel unusual. It should feel normal.

GMprentice is early, and I am still learning what the shape of the product wants to be. I am
especially interested in how different play styles feel in simulation, where AI helps, and where it
should absolutely keep its hands off the wheel.

The original version of this post is on
[Dev.to](https://dev.to/anthonyhumphreys/i-built-an-ai-tool-to-practise-gming-because-prep-isnt-the-same-as-practice-1amm).
