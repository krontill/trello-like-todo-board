import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ModalTitle from './index';

it('ModalTitle renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<ModalTitle titleModal={faker.lorem.text()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ModalTitle with initial state renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<ModalTitle titleModal="Enter list title" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
