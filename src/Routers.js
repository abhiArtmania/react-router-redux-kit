import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './assets/styles/App.css';
import { Home, About, Services, Contact, Info } from './Containers'
import { Provider } from 'react-redux';
import store from './store';

class Routers extends Component {
  render() {
    return (
      <Provider store={store} key="provider">
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/info" component={Info} />
        </div>
      </Router>
      </Provider>
    );
  }
}

export default Routers;
