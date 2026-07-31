import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * Public base path of the deployed site.
 * GitHub Pages passes `/<repo-name>` for project pages and `/` for a custom
 * domain (see .github/workflows/deploy.yml). Normalised to always have a
 * leading and trailing slash so asset URLs resolve in both cases.
 */
const rawBase: string = process.env.VITE_BASE_PATH ?? "/";
const trimmed: string = rawBase.replace(/^\/+|\/+$/g, "");
const base: string = trimmed.length > 0 ? `/${trimmed}/` : "/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Expose both VITE_* (Vite default) and EXPO_PUBLIC_* (Rork's cross-platform
  // public-env convention, written by tools like getOrCreateAuthConfig).
  envPrefix: ["VITE_", "EXPO_PUBLIC_"],
}));
