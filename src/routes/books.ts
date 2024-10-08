import { createBookController } from "../controllers/createBook";
import { deleteBookController } from "../controllers/deleteBook";
import { getBookController } from "../controllers/getBook";
import { getBooksController } from "../controllers/getBooks";
import { updateBookController } from "../controllers/updateBook";
import { createBookValidation } from "../validators/bookValidation";
import { updateBookValidation } from "../validators/updateValidation";

const express = require('express');

const router = express.Router();

console.log('books route');

router.get('/', getBooksController);
router.get('/:id', getBookController);
router.post('/', createBookValidation, createBookController);
router.patch('/:id', updateBookValidation, updateBookController);
router.delete('/:id', deleteBookController);

module.exports = router;