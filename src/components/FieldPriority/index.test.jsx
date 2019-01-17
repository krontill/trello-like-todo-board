import React from 'react';
import ReactDOM from 'react-dom';
import FieldPriority from './index';

it('FieldPriority renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<FieldPriority classes={{}} handleChange={jest.fn()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
