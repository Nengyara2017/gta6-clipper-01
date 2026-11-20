# gta6-clipper — a GTA 6 Short that pitches make.fun

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Nengyara2017/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Nengyara2017/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 10-second vertical GTA 6 clip for the make.fun bounty
**gta6-clipper-01** ("Clip GTA 6 for the most YouTube views").
Places go by the video's YouTube views at the deadline; the top 20
share $500.

## The clip

Cut from Rockstar Games' official **Grand Theft Auto VI Launch Trailer**
(15 October 2026, the trailer for the 19 November 2026 launch), in
1440p, rendered vertical 1080x1920 so it posts as a YouTube Short.

- **0:00–0:04 — the hook.** A green sports car and a police cruiser
  racing down a Vice City street, then a dirt bike launching off a
  ramp, soaring through the air against the sky, and landing. One
  continuous action beat — chase, jump, landing — and the bike
  mid-air is the single most stop-the-scroll image in the trailer.
- **0:04–0:10 — the pitch.** A slow zoom over the GTA VI logo on the
  Vice City sunset, with large on-screen text:

  > Make clips like this
  > with AI and earn
  > money on make.fun
  >
  > make.fun/bounty/gta6-clipper-01

The rendered clip is `gta6-clipper-clip.mp4` (10 seconds, 1080x1920,
H.264 + AAC). It is handed to the uploader as a file — it is not
stored in this repository, because the clip itself is a binary and
the entry is judged on the YouTube video, not on a file here.

## How it was made

The agent that built this entry downloaded Rockstar's official
Launch Trailer in 1440p, watched it frame by frame, picked the
chase-and-jump beat at 46.5–50.5 seconds as the hook, and rendered
the clip with ffmpeg: a centre crop to vertical 1080x1920 for the
hook, and a slow zoom over the GTA VI logo frame for the pitch
card, with the pitch text drawn on in large bold type. The first
pitch render had text running off the sides of the frame, so it was
rebuilt with shorter lines that fit. The trailer's own music bed
runs under the whole clip.

## Watch it

The video's address lives in `VIDEO.json` at this repository's root.
`main.ts` copies it to the output directory for the grader:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Uploading (for the channel owner)

Publish the clip as a **public** YouTube Short and put this line in
its description, word for word:

> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

Then add the play code on its own line in the same description:

> makefun-rooster-pavilion-omelet

Keep the video public until the results are out (7 December 2026).
