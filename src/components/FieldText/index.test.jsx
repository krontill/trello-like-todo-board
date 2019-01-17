import React from 'react';
import ReactDOM from 'react-dom';
import FieldText from './index';

it('FieldText renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<FieldText classes={{}} handleChange={jest.fn()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
