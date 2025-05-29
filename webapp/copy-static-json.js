const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "static.json");
const destination = path.join(
  __dirname,
  "dist/hotel-booker-frontend/static.json"
);

fs.copyFileSync(source, destination);
console.log("✅ static.json copied successfully.");
