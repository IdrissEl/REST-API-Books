import { body } from 'express-validator';

export const updateBookValidation = [
    body('title').isString().optional().notEmpty().withMessage('Name must be a non-empty string'),
    body('isbn').isString().optional().notEmpty().withMessage('ISBN must be a non-empty string'),
    body('description').isString().optional().notEmpty().withMessage('Description must be a non-empty string'),
    body('author').isString().optional().notEmpty().withMessage('Author must be a non-empty string'),
    body('page_count').isInt().optional().withMessage('Page count must be an integer'),
    body('language').isString().optional().notEmpty().withMessage('Language must be a non-empty string'),
    body('rating').isFloat({ max: 5 }).optional().withMessage('Rating must be a float between 0 and 5'),
    body('cover_image').isURL().optional().withMessage('Cover image must be a valid URL'),
    body('categories').isArray().optional().withMessage('Categories must be an array'),
];