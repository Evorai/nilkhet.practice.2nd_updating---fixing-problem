import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SellerSignUp from './SellerSignUp';
import './JoinUs.css';
export default class SignUp extends Component {
    render() {
        return (
            <div>
            <div align="left">
        <Link to="./SellerSignUp">
              <h1>I am a Seller</h1>
        </Link>
        <br/>
        <br/>
        <br/>
        <Link to="./UserSignUp">
              <h1>I am a Buyer</h1>
        </Link>
            </div>
            </div>
        )
    }
}
