import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://Ga1axy0051.github.io',
  output: 'static',
  vite: {
    server: {
      watch: {
        ignored: ['**/.tools/**'],
      },
    },
  },
});
