import { ObjectId } from "mongodb";


export async function getBookController( req: any, res: any) {
    try {
        const { db } = req.app;

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Id does not exist!'});
        }
        
        const result = await db.collection('books').findOne({
            _id: ObjectId.createFromHexString(id)
        });

        if (!result) {
            return res.status(400).json({ message: 'Book does not exist!'});
        }

        res.status(200).json({ 
            message: "Book retrieved",    
            book: result 
        });
        

    } catch(error) {
        res.status(500).json({ error: error.toString() });
    }
}