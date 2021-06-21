import React from 'react';
import './HomePage.css';
import Nav from './Nav-Menu-Home';
import AboutUs from './AboutUs';
import Books from './Books';
import Team from './Team';
import Contact from './Contact';
import JoinUs from './JoinUs';
import Shop from './Shop';
import SignIn from './Sign In';
import SellerSignUp from './SellerSignUp';
import SellerHomePage from './SellerHomePage';
import Register from './Register';
import SellerEditBooks from './SellerPages/SellerEditBooks';
import SellerPanel from './SellerPages/SellerPanel';
import SellerEditShopProfile from './SellerPages/SellerEditShopProfile';
import SellersBooks from './SellerPages/SellersBooks';
import ShopProfile from './SellerPages/ShopProfile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BookScreen from './BookScreen';
import CartScreen from './UserPages/CartScreen';
import ShippingAddressScreen from './ShippingAddressScreen';
import PaymentMethodScreen from './PaymentMethodScreen';
import PlaceOrderScreen from './PlaceOrderScreen';
import OrderScreen from './UserPages/orderScreen';
import OrderHistoryScreen from './OrderHistoryScreen';
import ProfileScreen from './ProfileScreen';
 
function App() {
  
  return (
    <Router>
    <div className="App">
      <Nav /> 
      <Switch>
      <Route exact path="/" component={Home} />  
      <Route exact path="/AboutUs" component={AboutUs} />
      <Route path="/Books" component={Books} />
      <Route path="/Team" component={Team} />
      <Route path="/JoinUs" component={JoinUs} />
      <Route path="/Contact" component={Contact} />
      <Route exact path="/Shop" component={Shop} />
      <Route exact path="/SignUp" component={Register} />
      <Route exact path="/Sign In" component={SignIn} />
      <Route exact path="/SellerSignUp" component={SellerSignUp} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/SellerHomePage" component={SellerHomePage} />
      <Route exact path="/SellerEditBooks" component={SellerEditBooks} />
      <Route exact path="/SellerPanel" component={SellerPanel} />
      <Route exact path="/SellerEditShopProfile" component={SellerEditShopProfile} />
      <Route exact path="/SellersBooks" component={SellersBooks} />
      <Route exact path="/ShopProfile" component={ShopProfile} />
      <Route path="/Book/:id?" component={BookScreen} />
      <Route path="/cart/:id?" component={CartScreen} />
      <Route path="/cartscreen" component={CartScreen} />
      <Route path="/ShippingAddressScreen" component={ShippingAddressScreen} />
      <Route path="/sign in?redirect=shipping" component={ShippingAddressScreen} />
      <Route path="/shipping" component={ShippingAddressScreen} />
      <Route path="/PaymentMethodScreen" component={PaymentMethodScreen} />
      <Route path="/payment" component={PaymentMethodScreen} />
      <Route path="/placeorder" component={PlaceOrderScreen} />
      <Route path="/order/:id" component={OrderScreen} />
      <Route path="/OrderScreen" component={OrderScreen} />
      <Route path="/OrderHistory" component={OrderHistoryScreen} />
      <Route path="/YourProfile" component={ProfileScreen} />
      </Switch>
    </div>
    </Router>
  );
}
function Home() {
  return <div>
  <h1>Home</h1>
    <footer>
      <h3>
        All Right reserved!!!
      </h3>
    </footer>
    </div>
};
export default App;
