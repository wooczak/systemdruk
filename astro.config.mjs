// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Source Sans 3",
      cssVariable: "--font-source-sans-3",
    },
  ],

  site: "https://wooczak.github.io",
  base: "/systemdruk",
  integrations: [icon()],
});