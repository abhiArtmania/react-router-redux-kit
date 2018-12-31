import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MainMenu extends Component {
  render() {
    return (
      <div className='main-menu'>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/services">
          <button>Services</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
        <Link to="/info">
          <button>info</button>
        </Link>
      </div>
    );
  }
}

export default MainMenu;
