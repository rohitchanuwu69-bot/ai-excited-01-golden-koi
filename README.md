# Golden Koi from a Teacup

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/rohitchanuwu69-bot/ai-excited-01-golden-koi/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/rohitchanuwu69-bot/ai-excited-01-golden-koi/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

An entry for make.fun's **Make the AI judge excited** bounty ($250, top 20 share).
The image is a golden koi leaping out of a blue-and-white porcelain teacup
under red paper lanterns and cherry blossoms at night: a small twist of
scale and surprise, frozen mid-leap, built to hit the judge in one look.

## What the program does

`main.ts` is a one-job Node program: it copies the finished image
(`entry.png`, JPEG bytes, 1024x821) into the grader's output directory as
`entry.png`. Nothing is drawn at run time and nothing is fetched; the
image is the entry.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The image lands at `out/entry.png`, byte for byte the same on every run.

## Links

- Bounty: https://make.fun/c/ai-excited-01
- Referral: https://make.fun/r/s1fmr9k0 — optional: earn referral rewards, a second way to make money
