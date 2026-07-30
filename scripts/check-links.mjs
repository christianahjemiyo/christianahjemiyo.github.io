import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, normalize } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const failures = [];

if (!existsSync(dist)) {
  console.error("dist directory does not exist. Run the production build first.");
  process.exit(1);
}

function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stats = statSync(path);
    if (stats.isDirectory()) {
      results.push(...walk(path));
    } else {
      results.push(path);
    }
  }
  return results;
}

const htmlFiles = walk(dist).filter((file) => file.endsWith(".html"));

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const matches = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)];

  for (const [, raw] of matches) {
    if (
      raw.startsWith("http://") ||
      raw.startsWith("https://") ||
      raw.startsWith("#") ||
      raw.startsWith("data:")
    ) {
      continue;
    }

    const clean = raw.split("#")[0].split("?")[0];
    if (!clean) {
      continue;
    }

    const candidate = clean.startsWith("/")
      ? join(dist, clean)
      : normalize(join(dirname(file), clean));
    const htmlCandidate = clean.endsWith("/") ? join(candidate, "index.html") : candidate;

    if (!existsSync(htmlCandidate)) {
      failures.push(`${file}: missing local link target ${raw}`);
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Local link checks passed.");
