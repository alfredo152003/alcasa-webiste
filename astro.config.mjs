// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// El sitio se publica en GitHub Pages bajo el sub-path del nombre del repo.
// Repo: https://github.com/Alfredo152003/Alcasa-Webiste  →  base: '/Alcasa-Webiste'
export default defineConfig({
  site: 'https://alfredo152003.github.io',
  base: '/Alcasa-Webiste',
  trailingSlash: 'ignore',
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