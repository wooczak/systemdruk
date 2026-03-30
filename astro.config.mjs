// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Source Sans Pro",
      cssVariable: "--font-source-sans-pro",
    },
  ],

  site: "https://wooczak.github.io",
  base: "/systemdruk",
  integrations: [icon()],
});