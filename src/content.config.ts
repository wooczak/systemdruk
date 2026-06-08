import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { BlogSchema, OfferPageSchema } from './types';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: BlogSchema,
});

const oferta = defineCollection({
  loader: glob({ base: './src/content/oferta', pattern: '**/*.{md,mdx}'}),
  schema: OfferPageSchema
})

export const collections = { blog, oferta };