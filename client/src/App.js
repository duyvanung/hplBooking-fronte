import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Price from './components/Price';
import Profile from './components/Profile';

import Home from './components/Home';
import Signin from './components/Signin';

require('./css/App.css');
require('./css/bootstrap.css');
require('./css/font-awesome.min.css');


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Route path='/home' component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/price' component={Price} />
          {/* <Route path='/profile' component={Profile} /> */}
        </div>

        <Footer />
      </div>
    );

  }

  onSelect() { }
}

export default App;
