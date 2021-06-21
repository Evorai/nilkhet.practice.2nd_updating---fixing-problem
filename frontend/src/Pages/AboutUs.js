import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
 
function AboutUs() {
  return (
    <div className="About">
      <h1>
        About us
      </h1>
      
      <div align="left">
	<Link to="./Team">
        <h1>Team</h1>
	</Link>
	<Link to="./Contact">
        <h1>Contact</h1>
	</Link>
      </div>
    </div>
  );
}
 
export default AboutUs;
 
