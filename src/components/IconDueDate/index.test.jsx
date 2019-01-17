import React from 'react';
import ReactDOM from 'react-dom';
import IconDueDate from './index';

it('IconDueDate renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<IconDueDate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
