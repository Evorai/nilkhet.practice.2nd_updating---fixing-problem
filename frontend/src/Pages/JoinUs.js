import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './JoinUs.css';

export default class JoinUs extends Component {
    render() {
        return (
      <div>
      <div class="clearfix">
        <br/>
        <br/>
        <br/>
	<Link to="./SignUp">
        <button type="button" class="SignUp">SignUp</button>
	</Link>
	<Link to="./LogIn">
        <button type="button" class="LogIn">LogIn</button>
	</Link>
      </div>
      </div>
        )
    }
}
