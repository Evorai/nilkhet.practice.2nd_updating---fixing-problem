import React, { Component } from 'react';
import '../HomePage.css';
import {Link} from 'react-router-dom';

export default class SellerPanel extends Component {
    render() {
        return (
            <nav>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <ul className = "nav-links">
                    <Link   to='/SellerPages/SellerEditBooks' >
                  <li className="dropbtn" className="navHome" className="dropdown" >
                  SellerEditBooks
                      </li>
                  </Link>
                    <Link   to='/SellerPages/SellerEditShopProfile' >
                  <li className="dropbtn" className="navHome" className="dropdown" >
                  SellerEditShopProfile
                      </li>
                  </Link>
                    <Link   to='/SellerPages/SellersBooks' >
                  <li className="dropbtn" className="navHome" className="dropdown" >
                  SellersBooks
                      </li>
                  </Link>
                    <Link   to='/SellerPages/ShopProfile' >
                  <li className="dropbtn" className="navHome" className="dropdown" >
                  ShopProfile
                      </li>
                  </Link>
                  </ul>
                  </nav>
        )
    }
}
