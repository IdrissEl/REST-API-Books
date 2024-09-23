

export async function getBooksController( req: any, res: any) {
    try {
        const { db } = req.app;
        
        const result = await db.collection('books').find().toArray();

        res.status(200).json({ 
            message: "Books retrieved",    
            books: result 
        });
        

    } catch(error) {
        res.status(500).json({ error: error.toString() });
    }
}