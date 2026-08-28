// Regenerates public/qr-register.svg — the QR code on the homepage's
// Free AI Assessment Day banner. Run with: node scripts/generate-qr.mjs
import QRCode from "qrcode";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TARGET_URL = "https://kemetfc.com/register";
const OUT_PATH = path.join(__dirname, "..", "public", "qr-register.svg");

const svg = await QRCode.toString(TARGET_URL, {
  type: "svg",
  margin: 1,
  color: { dark: "#0d1b2a", light: "#ffffff" },
  errorCorrectionLevel: "M",
});

fs.writeFileSync(OUT_PATH, svg);
console.log(`Wrote ${OUT_PATH} (${svg.length} bytes) for ${TARGET_URL}`);
