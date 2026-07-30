import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const targets = [
  "src",
  "public",
  "scripts",
  "README.md",
  "CONTENT_CHECKLIST.md",
  "PROJECT_DECISIONS.md",
  "PRIVACY_REVIEW.md",
  "PUBLICATION_VERIFICATION.md",
  "dist"
];
const allowedBinaries = /\.(jpg|jpeg|png|webp|avif|ico|pdf)$/i;

const patterns = [
  { name: "email address", regex: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi },
  {
    name: "North American telephone number",
    regex: /(?:\+1[\s.-]?)?(?:\([2-9]\d{2}\)|[2-9]\d{2})[\s.-][2-9]\d{2}[\s.-]\d{4}\b/g
  },
  {
    name: "street address",
    regex:
      /\b\d{1,6}\s+(?:[A-Za-z0-9.'-]+\s+){0,5}(?:Street|St\.|Avenue|Ave\.|Road|Rd\.|Boulevard|Blvd\.|Drive|Dr\.|Lane|Ln\.|Court|Ct\.|Place|Pl\.)\b/g
  },
  {
    name: "apartment reference",
    regex:
      /\b(?:Apt\.?|Apartment|Unit|Suite|Ste\.)\s+#?\s*(?:\d+[A-Za-z0-9-]*|[A-Z]\d[A-Za-z0-9-]*)\b/gi
  },
  {
    name: "geographic coordinates",
    regex: /[-+]?\b\d{1,2}\.\d{4,}\b\s*,\s*[-+]?\b\d{1,3}\.\d{4,}\b/g
  },
  { name: "private key block", regex: /-----BEGIN [A-Z ]*PRIVATE KEY-----/g },
  {
    name: "credential assignment",
    regex: /\b(?:api[_-]?key|access[_-]?token|password|secret)\b\s*[:=]\s*["'][^"']{8,}["']/gi
  },
  { name: "contact form", regex: new RegExp("<" + "form\\b", "gi") },
  { name: "telephone link", regex: new RegExp("te" + "l:", "gi") },
  { name: "email link", regex: new RegExp("mail" + "to:", "gi") }
];

const failures = [];

function walkPath(path) {
  const stats = statSync(path);
  if (stats.isDirectory()) {
    return readdirSync(path).flatMap((entry) => {
      if (["node_modules", ".git", ".astro"].includes(entry)) {
        return [];
      }
      return walkPath(join(path, entry));
    });
  }
  return [path];
}

const files = targets.flatMap((target) => {
  const path = join(root, target);
  try {
    return walkPath(path);
  } catch {
    return [];
  }
});

for (const file of files) {
  if (allowedBinaries.test(file)) {
    continue;
  }

  const text = readFileSync(file, "utf8");
  for (const pattern of patterns) {
    const matches = [...text.matchAll(pattern.regex)];
    if (matches.length) {
      failures.push(`${file}: ${pattern.name} pattern matched ${matches.length} time(s)`);
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Privacy scan passed for source and generated output.");
