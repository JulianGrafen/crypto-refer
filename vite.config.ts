import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/crypto-refer/",
  plugins: [react()],
  assetsInclude: ["**/*.mov"],
  build: {
    rollupOptions: {
      external: ["react-router-dom"],
    },
  },
});
