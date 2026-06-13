import { z } from "astro/zod";
import offerColumns from "./components/Navigation/navigation.data";

export const BlogSchema = z.object({
    title: z.string(),
    slug: z.string(),
    categories: z.array(z.string()),
    author: z.string(),
    post_date: z.string(),
    img_url: z.string()
  });

export const OfferPageSchema = z.object({
  slug: z.string(),
  category: z.string(),
  subcategory: z.string()
});