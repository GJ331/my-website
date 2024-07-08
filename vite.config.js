import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import windiCSS from "vite-plugin-windicss";

export default defineConfig({
  plugins: [react(), svgr(), windiCSS()],
  server: { 
    port: 9000,
    open: true
  },
});
