import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://norte-barber-studio-demo.vercel.app",
  output: "static",
  build: { format: "directory" },
});
