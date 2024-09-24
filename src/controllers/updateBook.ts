import { validationResult } from 'express-validator';
import { ObjectId } from 'mongodb';

export async function updateBookController( req: any, res: any) {
    
    // Validate Request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { db } = req.app;

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Id does not exist!'});
        }

        const book = await db.collection('books').findOne({ _id: ObjectId.createFromHexString(id) });

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        const update = req.body;
        const updatedBook = { ...book, ...update };

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Update the book document in the database
        await db.collection('books').updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: updatedBook });

        res.status(200).json({ message: 'Book updated successfully' });
        
    } catch(error) {
        res.status(500).json({ error: error.toString() });
    }
}