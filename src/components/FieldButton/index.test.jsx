import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import FieldButton from './index';

it('FieldButton renders without crashing', () => {
  const div = document.createElement('div');
  const btnText = faker.lorem.word();

  ReactDOM.render(
    <FieldButton btnText={btnText} handleClick={jest.fn()} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('FieldButton with initial state renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <FieldButton btnText="Add card" handleClick={jest.fn()} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
