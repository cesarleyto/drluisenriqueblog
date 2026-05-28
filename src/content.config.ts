import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Asegúrate de que apunte a tus archivos originales
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string(), // Usamos string si tus archivos tienen rutas de texto
    category: z.string(),
  }),
});

export const collections = { blog };