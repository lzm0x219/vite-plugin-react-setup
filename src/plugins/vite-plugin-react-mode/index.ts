import type { PluginOption } from "vite";

export interface ReactModeOption {
  strict?: boolean;
}

export default function reactMode(): PluginOption {
  return {
    name: "vite-plugin-react-mode",
  };
}
