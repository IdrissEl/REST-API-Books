import { createBookController } from "../controllers/createBook";
import { getBookController } from "../controllers/getBook";
import { getBooksController } from "../controllers/getBooks";

const express = require('express');

const router = express.Router();

console.log('books route');

router.get('/', getBooksController);
router.get('/:id', getBookController);
router.post('/', createBookController);

module.exports = router;