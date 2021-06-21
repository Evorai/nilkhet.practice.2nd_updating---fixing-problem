import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import { Link } from 'react-router-dom';
import MessageBox from '../MessageBox';


export default function CartScreen(props) {
    const bookId = props.match.params.id;
    const bookDetails = useSelector((state) => state.bookDetails);
      const { book } = bookDetails;
    const qty = props.location.search? Number(props.location.search.split('=')[1])
    :1;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(() =>{
        if(bookId) {
            dispatch(addToCart(bookId, qty));
        }
    }, [bookId, qty]);
    const removeFromCartHandler = (id) => {
        //delete action
        dispatch(removeFromCart(id));
    };
    const checkoutHandler = () => {
        props.history.push('/sign in?redirect=shipping');
    };
    return (
        <div>
            <div className="CartScreen">
                <div className="col-2">
                    <h1 className="CartTitle">Shopping Cart</h1>
                    {cartItems.length === 0 ? (
                        <MessageBox>
                            Cart is empty. <Link to='/'>Go Shopping</Link>
                        </MessageBox>
                    ):(
                        <div>
                            {cartItems.map((item) => (
                                <div key={item.book}>
                                    <div className="row">
                                        <div>
                                            <img src={item.image}
                                            alt={item.name}
                                            className="CartImage"></img>
                                        </div>
                                        <div className="BookName">
                                            <Link to={`/book/${item.book}`}>{item.name}</Link>
                                        </div>
                                    <div>
                                    <select  className="qty" 
                                    value={item.qty}
                                    onChange={
                                        (e) => 
                                        dispatch(
                                            addToCart(item.book, Number(e.target.value))
                                        )
                                    }>
                                        {
                                            [...Array(item.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))
                                        }
                                    </select>
                                    </div>
                                    <div className="CartPrice">
                                           {item.price}   tk /per book
                                    </div>
                                    <div>
                                        <button className="DeleteButton"
                                        type="button"
                                        onClick={() => removeFromCartHandler(item.book)}
                                        >
                                            Delete
                                        </button>
                                        <h1  key={item.book}>Shop Name:  {item.shopname} </h1>
                                    </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <div className="CheckOut__Card">
                        <div>
                            <div>
                                <h2>
                                    Total ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : <br/>
                                    {cartItems.reduce((a,c) => a + c.price *c.qty, 0)}
                                </h2>
                            </div>
                            <div>
                                <button 
                                type="button"
                                onClick={checkoutHandler}
                                className="CheckOut"
                                disabled={cartItems.length === 0}
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
