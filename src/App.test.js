import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Routers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Routers />, div);
  ReactDOM.unmountComponentAtNode(div);
});