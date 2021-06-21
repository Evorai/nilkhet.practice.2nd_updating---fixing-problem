import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsBook } from '../actions/bookActions';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import Rating from './SellerPages/Rating';
import { Link } from 'react-router-dom';


export default function BookScreen(props) {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const bookId = props.match.params.id;
    //const bookId = data.books.find ((x) => x._id === props.match.params.id);
    //const bookId = props.match.params.id;
    debugger;
    const bookDetails = useSelector((state) => state.bookDetails);
      const { loading, error, book } = bookDetails;
  
      useEffect (()=> {
        dispatch(detailsBook(bookId));
      }, [dispatch, bookId]);
      const addToCartHandler = () => {
        props.history.push(`/cart/${bookId}?qty=${qty}`);
      };
    return (
        
      <div>
      {loading? <LoadingBox></LoadingBox>
      :
      error?(<MessageBox variant="danger">{error}</MessageBox>)
    :(<div>
          
      <div key={book._id} className="cards__BookScreen">
      <div className="card__content__BookScreen">
      <div>
      <div>
        <h3>{book.name}</h3>
        </div>
      <Link to="shop.html">
        <h3>Shop name: {book.shopname} </h3>
      </Link>
      <div>Shop review:
      <Rating 
      rating={book.rating}
      numReviews={book.numReviews}
      ></Rating>
       </div>
      <div>Address: {book.address}</div>
      <div>Price: TK {book.price}</div>
      {book.countInStock > 0 && (
                    <>
                      <div>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(book.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={addToCartHandler}
                          className="card__cart"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </>
                  )}
      </div>
      </div>
      </div>
              </div>
    )
    }
  
</div>
       
    )
}

 /*
 import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsBook } from '../actions/bookActions';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import Rating from './SellerPages/Rating';

export default function BookScreen(props) {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const bookId = props.match.params.id;
    //const bookId = data.books.find ((x) => x._id === props.match.params.id);
    //const bookId = props.match.params.id;
    debugger;
    const bookDetails = useSelector((state) => state.bookDetails);
      const { loading, error, book } = bookDetails;
  
      useEffect (()=> {
        dispatch(detailsBook(bookId));
      }, [dispatch, bookId]);
      const addToCartHandler = () => {
        props.history.push(`/cart/${bookId}?qty=${qty}`);
      };
    return (
        
      <div>
      {loading? <LoadingBox></LoadingBox>
      :
      error?(<MessageBox variant="danger">{error}</MessageBox>)
    :(<div>
          
      <div key={book._id} className="card">
      <a href={`/book/${book._id}`} >
      <img className="medium" src={book.image} alt={book.name} />
      </a>
      <div className="card-body">
      <a href={`/book/${book._id}`} >
        <h3 className="BookName">{book.name}</h3>
      </a>
      <a href="shop.html">
        <h3 className="ShopName">Shop name: {book.shopname} </h3>
      </a>
      <div className="Review">Shop review:
      <Rating 
      rating={book.rating}
      numReviews={book.numReviews}
      ></Rating>
       </div>
      <div className="location">Address: {book.address}</div>
      <div className="price">Price: TK {book.price}</div>
      {book.countInStock > 0 && (
                    <>
                      <div>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(book.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </>
                  )}
      </div>
      </div>
              </div>
    )
    }
  
</div>
       
    )
}
        */