import type { PluginOption } from "vite";
import mkcert from "vite-plugin-mkcert";
import tsconfigPaths from "vite-tsconfig-paths";

export interface ReactSetupOption {
  react?: {
    strict?: boolean;
  };
  https?: boolean;
  routes?: string[];
}

const defaultOptions: ReactSetupOption = {
  react: {
    strict: true,
  },
  https: true,
};

export default function reactSetup(
  options: ReactSetupOption = defaultOptions
): PluginOption[] {
  const plugins: PluginOption[] = [tsconfigPaths()];

  if (options.https) {
    plugins.push(
      mkcert({
        source: "coding",
      })
    );
  }

  return plugins;
}
