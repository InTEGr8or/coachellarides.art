import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const infoBanners = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/info-banners" }),
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = {
  'info-banners': infoBanners,
};
