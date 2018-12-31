import React, { Component } from 'react';
import Header from './Header'

class Info extends Component {
  render() {
    return (
      <div className="info">
        <Header/>
        <div className='wrapper'>
          Informations
        </div>
      </div>
    );
  }
}

export default Info;
