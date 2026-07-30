import { mkdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import sharp from "sharp";

const root = process.cwd();
const input = join(root, "src/assets/profile-photo-original");
const output = join(root, "src/assets/profile-photo.jpg");
const reportPath = join(root, "scan-output/profile-photo-report.json");

mkdirSync(dirname(reportPath), { recursive: true });

const original = sharp(input, { failOn: "none" });
const originalMetadata = await original.metadata();

await original
  .rotate()
  .resize({
    width: 640,
    height: 640,
    fit: "inside",
    withoutEnlargement: true
  })
  .jpeg({
    quality: 78,
    mozjpeg: true
  })
  .toFile(output);

const optimizedMetadata = await sharp(output).metadata();

const report = {
  sourceInput: "src/assets/profile-photo-original",
  localPath: "src/assets/profile-photo.jpg",
  originalFormat: originalMetadata.format,
  optimizedFormat: optimizedMetadata.format,
  originalDimensions: {
    width: originalMetadata.width,
    height: originalMetadata.height
  },
  optimizedDimensions: {
    width: optimizedMetadata.width,
    height: optimizedMetadata.height
  },
  originalFileSizeBytes: statSync(input).size,
  optimizedFileSizeBytes: statSync(output).size,
  metadataRemoval: {
    originalHadExif: Boolean(originalMetadata.exif),
    originalHadXmp: Boolean(originalMetadata.xmp),
    originalHadIptc: Boolean(originalMetadata.iptc),
    optimizedHasExif: Boolean(optimizedMetadata.exif),
    optimizedHasXmp: Boolean(optimizedMetadata.xmp),
    optimizedHasIptc: Boolean(optimizedMetadata.iptc)
  },
  pages: ["/", "/about/"]
};

writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
