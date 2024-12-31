import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "src/data/blog" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        author: z.string().optional(), 
        excerpt: z.string(), 
        tags: z.array(z.string()),
        category: z.array(z.string())
    })
})

export const collections = { 
    blog: blogCollection,
 }