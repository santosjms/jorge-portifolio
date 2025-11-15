import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import svgr from 'vite-plugin-svgr'


export default defineConfig(({ mode }) => ({
  base: '/jorge-portifolio/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(),svgr()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
