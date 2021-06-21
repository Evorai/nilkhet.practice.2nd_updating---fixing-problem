
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import Book from './Book';
import axios from 'axios';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listBooks } from '../actions/bookActions';


export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const bookList = useSelector ((state) => state.bookList);

  useEffect(() => {
    const fetchData = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get ('/api/books');
            setLoading(false);
            setBooks(data);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };
    fetchData();
      dispatch(listBooks());
    }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        
  <div>
  <h1>Books</h1>  
<div>
<div className="Nilkhet Books">
        <div className="row center">
          {books.map((book) => (
            <Book key={book._id} book={book}></Book>
          ))}
          </div>
          </div>
          </div>
        </div>
      )}
</div>
  );
}
/*
import React, { useEffect, useState } from 'react';
import data from './data';
import Book from './Book';
import { BrowserRouter} from 'react-router-dom';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listBooks } from '../actions/bookActions';
 
 
export default function Books() {
  const dispatch = useDispatch();
  const bookList = useSelector ((state) => state.bookList);
  const { loading, error, books } = bookList;
 
  useEffect(() => {
      dispatch(listBooks());
    }, [dispatch]);
  return (
    <div>
      {loading? <LoadingBox></LoadingBox>
      :
      error?(<MessageBox variant="danger">{error}</MessageBox>)
    :(
      <BrowserRouter>
  <div>
    <h1>Books</h1>  
<div>
<div className="Nilkhet Books">
<div className="row center">
{
data.books.map((book) => ( 
  <Book key={book._id} book={book} ></Book>
))
}
</div>
</div>
</div>
</div>
</BrowserRouter>
    )
    }
  
</div>
  );
}
 
*/