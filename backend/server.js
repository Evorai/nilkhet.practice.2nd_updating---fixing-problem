/*
import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';

//process.env.MONGODB_URL || 
const app = express();
mongoose.connect('mongodb://localhost/nilkhet', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
app.get('/api/books/:id', (req, res) => {
    debugger;
    const book = data.books.find((x) => x._id === req.params.id);
    if (book) {
        res.send(book);
    } else {
        res.status(404).send({ message: 'Book Not Found' });
    }
});

app.get('/api/books', (req, res) => { res.send(data.books); });
app.use('/api/users', userRouter);
app.get('/', (req, res) => {
    res.send('Server is ready');
});
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
*/
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRouter from './routers/bookRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/nilkhet', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


app.use('/api/users', userRouter);
app.use('/api/books', bookRouter);
app.use('/api/orders', orderRouter);
app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
  
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

/*
app.listen(5000, () => {
    console.log('Serve at http://localhost:5000');
});
*/
/*
app.listen(5000, () => {
    console.log('Serve at http://localhost:5000');
});
*/