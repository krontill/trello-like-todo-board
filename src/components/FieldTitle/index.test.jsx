import React from 'react';
import ReactDOM from 'react-dom';
import FieldTitle from './index';

it('FieldTitle renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<FieldTitle classes={{}} handleChange={jest.fn()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
