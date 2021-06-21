
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './JoinUs.css';
export default class SellerSignUp extends Component {
    render() {
        return (
            <div>
                <h1>SellerSignUp</h1>
      <div class="clearfix">
        <button type="button" class="cancelbtn">Cancel</button>
	<Link to="./SellerHomePage">
        <button type="submit" class="signupbtn"  accesskey="Enter">SignUp</button>
        </Link>
      </div>

            </div>
        )
    }
}
