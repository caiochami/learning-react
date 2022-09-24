import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '7z9mvv',
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
