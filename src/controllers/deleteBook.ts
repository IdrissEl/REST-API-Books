import { validationResult } from 'express-validator';
import { ObjectId } from 'mongodb';

export async function deleteBookController( req: any, res: any) {
    
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

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Delete the book document in the database
        const result = await db.collection('books').deleteOne({ _id: ObjectId.createFromHexString(id) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Book does not exist' });
        }

        res.status(200).json({ message: 'Book deleted successfully' });

    } catch(error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.toString() });
        }
    }
}