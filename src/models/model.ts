import { Schema, model } from "mongoose";
import bookSchema from "../schemas/schema";


const mongooseBookSchema = new Schema({
    name: String,
    genre: String,
    price: Number,
    release_date: Date,
    publisher: String,
    created_at: Date,
    updated_at: Date,
    isbn: String,
    description: String,
    author: String,
    page_count: Number,
    language: String,
    rating: Number,
    cover_image: String,
    categories: [String],
});

const Book = model("Book", mongooseBookSchema);

const createBook = (data: any) => {
    const result = bookSchema.safeParse(data);
    if (!result.success) {
        throw new Error("Invalid data");
    }
    const book = new Book(result.data);
    return book.save();
};

export { Book, createBook };
