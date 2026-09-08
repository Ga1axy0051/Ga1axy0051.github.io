import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ga1axy0051.github.io',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    server: {
      watch: {
        ignored: ['**/.tools/**'],
      },
    },
  },
});
