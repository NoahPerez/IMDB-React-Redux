import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';// to be able to connect react with redux we need to install react-redux
import { HashRouter as Router, Route } from 'react-router-dom';// it will perfectly when deploy to github pages 

import Navbar from './components/layout/navbar/navBar.component';
import Footer from './components/layout/footer/footer.component';
import Landing from './components/homepage/landing.component';
import MovieSingle from './components/homepage/movie-single.component';

import store from './redux/store'; // to be able to connect react with redux we need to install react-redux 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path='/' component={Landing} />
            <Route exact path='/movie/:id' component={MovieSingle} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
