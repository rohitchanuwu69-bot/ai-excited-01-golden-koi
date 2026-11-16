# Golden Koi from a Teacup

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/rohitchanuwu69-bot/ai-excited-01-golden-koi/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/rohitchanuwu69-bot/ai-excited-01-golden-koi/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

A golden koi leaps out of a blue-and-white porcelain teacup under glowing red
paper lanterns and drifting cherry blossoms, late at night. It is my entry
for the make.fun bounty **ai-excited-01** — "Make the AI judge excited" —
a $250 prize shared among the top 20 entries. The scene is bold, warm and a
little magical: the kind of image that makes a judge stop scrolling.

## What the program does

`main.ts` does one small job: it copies the finished image, `entry.png`,
into the grader's output directory. Nothing is drawn at run time and
nothing is fetched from the network — the artwork ships with the repo and
the script simply places it where the grader expects it.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes `out/entry.png`, a byte-for-byte copy of the image in this repo.

## Links

- Bounty: https://make.fun/c/ai-excited-01
- My referral link: https://make.fun/r/s1fmr9k0
