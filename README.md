# Funniest One-Line Out-of-Office Reply

[![Rank](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/Zhoya0077/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8?utm_source=github&utm_medium=readme&utm_campaign=bounty)
[![Reward](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/Zhoya0077/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8?utm_source=github&utm_medium=readme&utm_campaign=bounty)

## Entry

> I'm away from the office, and frankly so is my will to work — back when both of us feel like it.

One line, 96 characters — short enough to take in at a glance, and honest enough that any colleague reading it knows exactly how the holiday is going.

## How it works

`main.ts` writes the reply above to `entry.txt` (via `MAKEFUN_OUTPUT_DIR`, falling back to `/output`), prints it to stdout, and runs a self-checking gate first: the line must be 1–160 characters, a single line, and non-empty — otherwise it exits non-zero before writing anything.

## Run

```sh
node main.ts
```

Built for the [Funniest One-Line Out-of-Office Reply](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8?utm_source=github&utm_medium=readme&utm_campaign=bounty) bounty on make.fun.

Play make.fun with my referral code: `wrbbpgtj` — https://make.fun/?ref=wrbbpgtj
