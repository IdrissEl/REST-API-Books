import { body } from 'express-validator';

export const createBookValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('genre').notEmpty().withMessage('Genre is required'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
    body('release_date').isDate().withMessage('Release date must be a valid date'),
    body('publisher').notEmpty().withMessage('Publisher is required'),
]