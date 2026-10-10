import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://demo.nortebarber.cl",
  output: "static",
  build: { format: "directory" },
});
