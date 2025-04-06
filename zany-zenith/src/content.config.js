// src/content/config.js

import { defineCollection, z } from "astro:content";

// Define the schema for the blog collection
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
});

// Export collections
export const collections = { blog };
