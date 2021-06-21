/*
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './SellerPages/Rating';

export default function Book(props) {
    const {book} = props;
    return (
        <div>
            
<div key={book._id} className="card">
<Link to={`/book/${book._id}`} >
<img className="medium" src={book.image} alt={book.name} />
</Link>
<div className="card-body">
<Link to={`/book/${book._id}`} >
  <h3 className="BookName">{book.name}</h3>
</Link>
<Link to="Shop01.html">
  <h3 className="ShopName">Shopname: {book.shopname} </h3>
</Link>
<div className="Review">Shop review:
<Rating 
rating={book.rating}
numReviews={book.numReviews}
></Rating>
 </div>
<div className="location">Address: {book.address}</div>
<div className="price">Price: TK {book.price}</div>
</div>
</div>
        </div>
    )
}
*/

import React from 'react';
import Rating from './SellerPages/Rating';

export default function Book(props) {
    const {book} = props;
    return (
      <div>
        <div className="cards">
  <div className="lift-me">
    <div className="card flip-me">
      <div className="card__content">
        <div className="card__front dominic">
          <h3 className="card__name">{book.writer} </h3>
          <img className="back__img" src={book.image} alt={book.name}  />
          <p className="card__title"> {book.name} </p>
        </div>

        <div className="card__back">
          <header>Shop Name: {book.shopname}</header>
          <p className="card__body">
            <div>Shop review:
<Rating 
rating={book.rating}
numReviews={book.numReviews}
></Rating>
</div>
            Location: {book.address}
            <h1 className="card__name__back"> {book.name} <br/> {book.price} tk </h1>
          </p>
          <a href={`/book/${book._id}`}>
          <button className="card__cart">
            More Info
          </button>
          </a>
          <footer className="social">
            <a href="tel:01880901380" className="btn btn__phone"></a>
            <a href="mailto:atiqbabu1993@gmail.com" className="btn btn__email"></a>
            <a href="https://www.facebook.com/Atiq.Evorai/" className="btn btn__more"></a>
          </footer>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
    )
}
/*

<div key={book._id} className="card">
<a href={`/book/${book._id}`} >
<img className="medium" src={book.image} alt={book.name} />
</a>
<div className="card-body">
<a href={`/book/${book._id}`} >
  <h3 className="BookName">{book.name}</h3>
</a>
<a href="Shop01.html">
  <h3 className="ShopName">Shopname: {book.shopname} </h3>
</a>
<div className="Review">Shop review:
<Rating 
rating={book.rating}
numReviews={book.numReviews}
></Rating>
 </div>
<div className="location">Address: {book.address}</div>
<div className="price">Price: TK {book.price}</div>
</div>
</div>
*/
/*
<div className="cards">
  <div className="lift-me">
    <div className="card flip-me">
      <div className="card__content">
        <div className="card__front dominic">
          <h3 className="card__name">Muhammad Zafor Iqbal</h3>
          <img className="back__img" src="E:\OneDrive\React Practice\CSS\Card 2\images\01.jpg" alt="Italian Trulli">
          <p className="card__title">Theory of Relativity</p>
        </div>

        <div className="card__back">
          <header>Shop Name</header>
          <p className="card__body">
            Location: Nilkhet <br/>
            Reviews: 12 <br/>
            Rating: 4.5 <br/>
            Stars <br/>
            <h1 className="card__name__back">Theory of Relativity<br/> 120 tk </h1>
          </p>
          <button className="card__cart">
            Add to Cart
          </button>
          <footer className="social">
            <a href="tel:01880901380" className="btn btn__phone"></a>
            <a href="mailto:atiqbabu1993@gmail.com" className="btn btn__email"></a>
            <a href="https://www.facebook.com/Atiq.Evorai/" className="btn btn__more"></a>
          </footer>
        </div>
      </div>
    </div>
  </div>
  */
 /*
 <div key={book._id} className="cards">
        <div className="lift-me">
    <div className="card flip-me">
      <div className="card__content">
        <div className="card__front">
<a href={`/book/${book._id}`} >
<img className="back__img" src={book.image} alt={book.name} />
</a>

<div className="card__title">
<a href={`/book/${book._id}`} >
  <h3>{book.name}</h3>
</a>
</div>
<div className="card__back">
<a href="Shop01.html">
  <h3>Shopname: {book.shopname} </h3>
</a>
<div className="card__back">
<div>Address: {book.address}</div>
<div>Shop review:
<Rating 
rating={book.rating}
numReviews={book.numReviews}
></Rating>
 </div>
 
<div className="card__name__back">{book.name}  <br/> {book.price} </div>

<footer className="social">
            <a href="tel:01880901380" class="btn btn__phone"></a>
            <a href="mailto:atiqbabu1993@gmail.com" class="btn btn__email"></a>
            <a href="https://www.facebook.com/Atiq.Evorai/" class="btn btn__more"></a>
          </footer>
</div>
</div>
</div>
  </div>
        </div>
      </div>
    </div>
    */