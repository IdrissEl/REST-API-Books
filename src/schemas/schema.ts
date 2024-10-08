import { z } from 'zod';

const bookSchema = z.object({
    title: z.string(),
    genre: z.string(),
    price: z.number(),
    release_date: z.date(),
    publisher: z.string(),
    created_at: z.date(),
    updated_at: z.date(),
    isbn: z.string(),
    description: z.string(),
    author: z.string(),
    page_count: z.number().int(),
    language: z.string(),
    rating: z.number(),
    cover_image: z.string(),
    categories: z.array(z.string()),
});

export default bookSchema;