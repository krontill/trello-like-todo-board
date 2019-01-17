import React from 'react';
import ReactDOM from 'react-dom';
import ListModal from './index';

it('ListModal renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<ListModal action={jest.fn()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
