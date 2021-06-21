import React from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { signout } from '../actions/userActions';
function Nav() {
    const navStyle = {
        color : 'white'
    };
    const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
      <nav>
          <ul className = "nav-links">
              <Link style={navStyle}   to='/' >
            <li className="dropbtn" className="navHome" className="dropdown" >Home</li>
            </Link>
          <Link style={navStyle} to='/AboutUs'>
              <li>
              <li className="dropbtn" className="dropdown">
                  About us
          <div className="dropdown-content">
              <Link  to='/Team'>
            
            <li>Team</li>
            </Link>
            <Link  to='/Contact'>
            <li >Contact</li>
            </Link>
            </div>
              </li>
		</li>
		</Link>
              <Link style={navStyle}  to='/Books'>
               <li>
               <li className="dropbtn" className="Books" className="dropdown">
                   Books
          <div className="dropdown-content">
              <Link  to='/Shop'>
            
            <li>Shops</li>
            </Link>
          </div>
          </li>
              </li>
              </Link>
          {userInfo ? (
              <div className="dropdown">
                <Link style={navStyle}   to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link  to="/YourProfile" >
                      Your Profile
                    </Link>
                  </li>
                  <li>
                    <Link   to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link style={navStyle}   to="/Sign In">Sign In</Link>
            )}
              <Link style={navStyle}   to='/CartScreen' >
                <li>
            <li className="dropbtn" className="navHome" className="dropdown" >
              Your Shelf
              {cartItems.length > 0 && (
                <span className="badge"> ({cartItems.length})</span>
              )}
              <div className="dropdown-content">
                  <Link  to='/ShippingAddressScreen'>
                
                <li>Shipping</li>
                </Link>
                  <Link  to='/OrderHistory'>
                
                <li>Order History</li>
                </Link>
              </div>
              
              </li>
                  </li>
                  </Link>
          </ul>
      </nav>
  );
}
 
export default Nav;
