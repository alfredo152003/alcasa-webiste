// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
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
    }
});