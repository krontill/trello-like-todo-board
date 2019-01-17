import React from 'react';
import ReactDOM from 'react-dom';
import PriorityHigh from './index';

it('PriorityHigh renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<PriorityHigh />, div);
  ReactDOM.unmountComponentAtNode(div);
});
