import { defineCollection, z } from 'astro:content';

const infoBanners = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = {
  'info-banners': infoBanners,
};
