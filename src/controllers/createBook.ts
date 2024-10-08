import { validationResult } from 'express-validator';

export async function createBookController( req: any, res: any) {
    
    // Validate Request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { db } = req.app;
        
        const { 
            title, 
            genre, 
            price, 
            release_date, 
            publisher,
            created_at,
            updated_at,
            isbn,
            description,
            author,
            page_count,
            language,
            rating,
            cover_image,
            categories
        } = req.body;

        const existingBook = await db.collection('books').findOne({
            title: title.toLowerCase()
        });

        if (existingBook) {
            return res.status(400).json({ error: 'Book already exists' });
        }

        const result = await db.collection('books').insertOne({
            title: title.toLowerCase(),
            genre,
            price,
            release_date,
            publisher,
            created_at: new Date(),
            updated_at: new Date(),
            isbn,
            description,
            author,
            page_count,
            language,
            rating,
            cover_image,
            categories
        });

        if (result.acknowledged) {
            res.status(200).json({ message: 'Book created'});
        } else {
            throw new Error('Failed to create book')
        }

    } catch(error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.toString() });
        }
    }
}