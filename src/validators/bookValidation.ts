import { body } from 'express-validator';

export const createBookValidation = [
    body('name')
        .custom((value) => {
            if (value.trim() === '') {
                throw new Error('Name is required and must be a string');
            }
            return true;
        })  
        .isString()
        .isLength({ min: 1 })
        .withMessage('Name cannot be empty or must be a string'),
    body('genre')
        .notEmpty()
        .withMessage('Genre is required'),
    body('price')
        .isFloat({ gt: 0 })
        .withMessage('Price must be a positive number'),
    body('release_date')
        .isDate()
        .withMessage('Release date must be a valid date'),
    body('publisher')
        .notEmpty()
        .withMessage('Publisher is required'),
    body('isbn')
        .isString()
        .withMessage('ISBN must be a string'),
    body('description')
        .isString()
        .optional()
        .withMessage('Description must be a string'),
    body('author')
        .isString()
        .withMessage('Author must be a string'),
    body('page_count')
        .isInt()
        .withMessage('Page count must be an integer'),
    body('language')
        .isString()
        .withMessage('Language must be a string'),
    body('rating')
        .isFloat({ max: 5 })
        .optional()
        .withMessage('Rating must be a float between 0 and 5'),
    body('cover_image')
        .isURL()
        .optional()
        .withMessage('Cover image must be a valid URL'),
    body('categories')
        .isArray()
        .optional()
        .withMessage('Categories must be an array'),
];