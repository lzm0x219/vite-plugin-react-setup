import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import inspect from "vite-plugin-inspect";
import reactSetup from "vite-plugin-react-setup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactSetup({
      react: {
        strict: true,
      },
    }),
    inspect(),
  ],
});
