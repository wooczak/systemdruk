// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Source Sans Pro",
      cssVariable: "--font-source-sans-pro",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/SourceSansPro-ExtraLight.ttf.woff2"],
            weight: "200",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/SourceSansPro-Light.ttf.woff2"],
            weight: "300",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/SourceSansPro-Regular.ttf.woff2"],
            weight: "400",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/SourceSansPro-Semibold.ttf.woff2"],
            weight: "600",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/SourceSansPro-Bold.ttf.woff2"],
            weight: "700",
            style: "normal",
          }, 
          {
            src: ["./src/assets/fonts/SourceSansPro-Black.ttf.woff2"],
            weight: "800 900",
            style: "normal",
          }
        ]
      }
    },
  ],

  site: "https://wooczak.github.io",
  base: "/systemdruk",
  integrations: [icon({
    iconDir: "src/icons",
  }), solidJs(), ],
});