import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    categories: z.array(z.string()),
    author: z.string(),
    post_date: z.string(),
    img_url: z.string(),
  }),
});

export const collections = { blog };