import { defineConfig } from "vite";
import { tanstackViteConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  plugins: [
    ...tanstackViteConfig.plugins
  ],
});