import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from 'astro-icon'
import netlify from "@astrojs/netlify"

// https://astro.build/config
export default defineConfig({
  output: "static",
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  adapter: netlify(),
  compressHTML: true,
  integrations: [
    mdx(),
    icon(),
    tailwind({
      applyBaseStyles: false,
    }),
    compress(),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          logger: {
            warn: () => {},
          },
        },
      },
    },
  },
})
