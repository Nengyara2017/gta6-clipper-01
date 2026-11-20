// Entry program for the make.fun gta6-clipper-01 bounty.
//
// The entry is a YouTube Short: a GTA 6 clip cut from Rockstar's official
// Launch Trailer, with make.fun's pitch on screen at the end. This program
// does not make the clip — it only hands the video's address to the grader.
// It copies VIDEO.json from the repository root into the output directory,
// prints nothing on success, uses no network, reads no clock, and writes
// the same bytes on every run.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
