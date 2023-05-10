import type { PluginOption } from "vite";

export default function appEntry(): PluginOption {
  return {
    name: "vite-plugin-app-entry",
    transformIndexHtml() {
      //
    },
  };
}
