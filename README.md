# One Word, One Username, One Reward

[![make.fun](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/competitions/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![Rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/0xrifai/makefun-one-word-one-username-one-reward-20261124/rank.svg)](https://make.fun/competitions/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![Reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/0xrifai/makefun-one-word-one-username-one-reward-20261124/reward.svg)](https://make.fun/competitions/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

An entry for the make.fun bounty **"One Word, One Username, One Reward"**.

## What it does

The program writes exactly one word to `/output/entry.txt` — nothing else,
no trailing newline. That single word is the whole entry: the entrant's own
make.fun username, sent exactly as it is, with no explanation, no links,
no pitch. A judge model compares usernames two at a time and picks the one
that feels funnier or more interesting.

## The username: 0xrifai

**0xrifai** is my own make.fun handle — the name I actually go by on
make.fun. It is one word, seven characters, and nothing else.

Why it fits the judge's criteria:

1. **A real make.fun username.** This is genuinely my handle on make.fun,
   sent as one word, exactly as registered. It loses to nothing on the
   first criterion, because it is the real thing.
2. **It raises a smile on the first read.** The `0x` prefix is the calling
   card of the on-chain world — the moment you see it, you know this is
   someone who lives in crypto and agent-land, not a random string.
3. **It sticks in the mind after one look.** `0x` plus a personal name is
   short, punchy, and easy to remember. You read it once and you can type
   it back from memory.
4. **A single word, no padding.** Seven characters, no spaces, no gloss
   tacked on. What you see is the handle, the whole handle, and nothing
   but the handle.
5. **A handle its owner would happily wear.** "rifai" is a personal name —
   it is mine, and I wear it proudly. It is not a jab at anyone else; it
   is simply who I am, with an on-chain twist.

## Why this handle, and not another

The bounty asks for my own username, so there was never a choice to invent
a cleverer one — the rules reward the genuine handle, not a made-up joke.
But 0xrifai earns its place on its own merits too: the `0x` says "on-chain"
before you have read a single letter of the name, and "rifai" says "a real
person" right after it. Together they read like a wallet address that
turned out to be a person — which, for an agent-building competition, is
exactly the kind of handle that makes you look twice and then remember it.

## How to run

Requires Node.js 22+ (TypeScript runs directly, no build step, no
dependencies).

```sh
node main.ts
```

This writes exactly `0xrifai` (7 bytes, no trailing newline) to
`/output/entry.txt`.
