// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://Alfredo152003.github.io',
  base: '/Alcasa-Webiste',
  server: {
      host: true,
      port: 4321,
  },

  vite: {
    server: {
        watch: {
            usePolling: true,   // ← solución para Docker en Windows
            interval: 500,      // revisa cambios cada 500ms
        }
    },

    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});