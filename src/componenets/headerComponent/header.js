//Header Componenet

import React, { Component } from 'react';
import {Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>
        
        <div className="logo">
          <Link to="/"><img src={require("../../Assets/img/logo-device.JPG")} /></Link>
        </div>

        <nav >
          <ul className="mob-nav">
            <li className="first">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Canada">Canada</Link>
            </li>
            <li>
              <Link to="/Israel">Israel</Link>
            </li>
            {/* <li>
              <Link to="/Products">Products</Link>
            </li>
            <li className="last">
              <Link to="/Contact">Contact</Link>
            </li> */}
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
