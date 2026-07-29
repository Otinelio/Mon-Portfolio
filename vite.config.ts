import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    resolve: {
      tsconfigPaths: true,
    },
  },
  nitro: {
    preset: "vercel"
  },
  tanstackStart: {
    server: { 
      entry: "server",
      preset: "vercel"
    },
  },
});