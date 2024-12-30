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
    })
})

const galleryCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "src/data/gallery" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        image: image(),
        imageAlt: z.string.optional(),
        pubDate: z.coerce.date(),
        author: z.string().optional(), 
    })
})

export const collections = { 
    blog: blogCollection,
    gallery: galleryCollection
 }