import { defineConfig } from "vite";
import nunjucks from "vite-plugin-nunjucks";

export default defineConfig({
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
  },
  plugins: [
    nunjucks({
      variables: { "index.html": { data: "TEST DATA" } },
      templatesDir: "./src/",
      nunjucksConfigure: {
        autoescape: true,
        noCache: true,
        trimBlocks: true, // Remove leading spaces and tabs from blocks
        lstripBlocks: true, // Remove leading newline from blocks
        web: {
          async: true,
        },
      },
    }),
  ],
});
