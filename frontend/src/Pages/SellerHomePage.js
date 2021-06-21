import React, { Component } from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';


export default class UserHomePage extends Component {
    render() {
        return (
            <nav>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <ul className = "nav-links">
                    <Link   to='/SellerPages/SellerPanel'>
                  <li className="dropbtn" className="navHome" className="dropdown" align='left'>
                      SellerPanel
                      </li>
                  </Link>
                  </ul>
                  </nav>
        )
    }
}
