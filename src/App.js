import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Components --when including components it is the class name and path to file
import Header from './componenets/headerComponent/header';
import Footer from './componenets/footerComponents/footer';
import HomePage from './componenets/pages/homePage';
import Products from './componenets/pages/products';
import Contact from './componenets/pages/contact';
import Canada from './componenets/pages/canada';
import Israel from './componenets/pages/israel';


//including the minifyied css
import './Assets/css/default.min.css';  



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="box">
              <Route exact path='/' component={HomePage} />
              <Route exact path='/products' component={Products} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/canada' component={Canada} />
              <Route exact path='/israel' component={Israel} />
            </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
