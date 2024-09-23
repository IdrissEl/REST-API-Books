

export async function createBookController( req: any, res: any) {
    try {
        const { db } = req.app;
        
        const { name, genre, price, release_date, publisher } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }
        if (!genre) {
            return res.status(400).json({ error: 'Genre is required' });
        }
        if (!price) {
            return res.status(400).json({ error: 'Price is required' });
        }
        if (!release_date) {
            return res.status(400).json({ error: 'Release Date is required' });
        }
        if (!publisher) {
            return res.status(400).json({ error: 'Publisher is required' });
        }

        const existingBook = await db.collection('books').findOne({
            name: name.toLowerCase()
        });

        if (existingBook) {
            return res.status(400).json({ error: 'Book already exists' });
        }

        const result = await db.collection('books').insertOne({
            name: name.toLowerCase(),
            genre,
            price,
            release_date,
            publisher
        });

        if (result.acknowledged) {
            res.status(200).json({ message: 'Book created'});
        } else {
            throw new Error('Failed to create book')
        }

    } catch(error) {
        res.status(500).json({ error: error.toString() });
    }
}