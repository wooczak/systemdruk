// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Source Sans 3",
      cssVariable: "--font-source-sans-3",
      weights: ["200", "300", "400", "500", "600", "700"],
    },
  ],

  site: "https://wooczak.github.io",
  base: "/systemdruk",
  integrations: [icon(), solidJs({ devtools: true}), ],
});