import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      react: "https://cdn.skypack.dev/react@17",
      "react-dom": "https://cdn.skypack.dev/react-dom@17",
    },
  },
  base: "/crypto-refer/",
  plugins: [react()],
  assetsInclude: ["**/*.mov"],
  build: {
    rollupOptions: {
      external: ["react-router-dom"],
    },
  },
});
