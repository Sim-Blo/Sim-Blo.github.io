// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; 
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://simonblondeel.fr',
  integrations: [tailwind(), sitemap()],
  build: {
    // Injecte le CSS directement dans le HTML pour un FCP ultra-rapide
    inlineStylesheets: 'always',
  },
});