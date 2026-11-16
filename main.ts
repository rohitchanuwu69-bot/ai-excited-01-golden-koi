import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(targetDir, { recursive: true });

if (!existsSync(source)) {
  throw new Error("entry.png is missing next to main.ts");
}

copyFileSync(source, join(targetDir, "entry.png"));
console.log(`Wrote entry.png to ${targetDir}`);
