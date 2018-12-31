import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import MainMenu from '../MainMenu'

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4 className="App-title">Welcome to React</h4>
          <MainMenu/>
        </header>
      </div>
    );
  }
}

export default Header;
