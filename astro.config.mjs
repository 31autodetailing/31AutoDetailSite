import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 5000,
    host: true
  },
  integrations: [],
  site: 'https://31autodetailing.github.io',
  base: '/',
  trailingSlash: "ignore"
});
