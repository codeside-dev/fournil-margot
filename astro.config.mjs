import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Sortie statique : le site est un ensemble de fichiers, sans serveur.
export default defineConfig({
  output: 'static',
  site: 'https://boulangerie.example',
  vite: { plugins: [tailwindcss()] },
});
