import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Book from '../models/bookModel.js';

const bookRouter = express.Router();
bookRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const books = await Book.find({});
    res.send(books);
  })
);
bookRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await Book.remove({});
    const createdBooks = await Book.insertMany(data.books);
    res.send({ createdBooks });
  })
);
bookRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.send(book);
    } else {
      res.status(404).send({ message: 'Book Not Found' });
    }
  })
);
export default bookRouter;