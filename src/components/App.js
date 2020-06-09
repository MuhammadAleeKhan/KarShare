import React from "react";
// import Header from "./Header";
//import FirstBlock from "./FirstBlock";
//import SecondBlock from "./SecondBlock";
//import Footer from "./Footer";
import Home1 from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import App1 from "./App1";
import Admin from "./Admin";
//import {Link}  from 'react-router-dom'
import Bookride from "./Bookride";
import Addimage from "./Addimage";
import Updateprof from "./Updateprof";
import Bookings from './Bookings';
import Rides_Placed from './Rides_Placed'
import Bookings_on_ride from './Bookings_on_ride'
import Admin_users from './Admin_users'
import Admin_rides from './Admin_rides'
import Admin_Bookings from './Admin_Bookings'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home1} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/addride" component={App1} />
          <Route path="/Bookrides" component={Bookride} />
          <Route path="/picture" exact component={Addimage} />
          <Route path="/update" component={Updateprof} />
          <Route path="/Bookings" component={Bookings} />
          <Route path="/myrides"exact component={Rides_Placed} />
          <Route path="/myrides/details" exact component={Bookings_on_ride} />
          <Route path="/adminusers" exact component={Admin_users} />
          <Route path="/adminrides" exact component={Admin_rides} />
          <Route path="/adminbookings" exact component={Admin_Bookings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
