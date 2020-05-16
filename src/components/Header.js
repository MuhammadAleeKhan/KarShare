import React from "react";
import LoginBtn from "./LoginBtn";
import SignUpBtn from "./SignUpBtn";
import HamburgerMenu from "./HamburgerMenu";
import Homebutton from "./Homebutton"
import {Link}  from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function Header() {
  return (
    <header>
      <h1>
        <a href="index.html">KarShare</a>
      </h1>
      <button type="button2" class="button2">
      <Link to='/'>
        <span> Home </span>
        </Link>
    </button>
      <LoginBtn />
      <SignUpBtn />
      <HamburgerMenu />
    </header>
  );
}

export default Header;
