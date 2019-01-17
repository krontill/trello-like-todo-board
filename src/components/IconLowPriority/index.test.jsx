import React from 'react';
import ReactDOM from 'react-dom';
import LowPriority from './index';

it('LowPriority renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<LowPriority />, div);
  ReactDOM.unmountComponentAtNode(div);
});
