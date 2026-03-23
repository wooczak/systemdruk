// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Source Sans Pro",
    cssVariable: "--font-source-sans-pro",
  }]
});