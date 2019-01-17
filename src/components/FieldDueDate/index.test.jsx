import React from 'react';
import ReactDOM from 'react-dom';
import FieldDueDate from './index';

it('FieldDueDate renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<FieldDueDate handleChange={jest.fn()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('FieldDueDate with initial state renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <FieldDueDate dueDate="2019-01-02" handleChange={jest.fn()} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
