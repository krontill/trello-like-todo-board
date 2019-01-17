import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ListMenu from './index';

it('ListMenu renders without crashing', () => {
  const div = document.createElement('div');
  const listId = faker.random.uuid();
  const listTitle = faker.lorem.sentence();
  const listCards = [`${faker.random.uuid()}`];

  ReactDOM.render(
    <ListMenu
      anchorEl={div}
      open={faker.random.boolean()}
      handleClose={jest.fn()}
      handleDeleteList={jest.fn()}
      list={{ id: listId, title: listTitle, cards: listCards }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('ListMenu with initial state renders without crashing', () => {
  const div = document.createElement('div');
  const listId = faker.random.uuid();
  const listTitle = 'To Do';
  const listCards = ['095390ad-006f-4fe4-a6ea-63e1ea2e74b9'];

  ReactDOM.render(
    <ListMenu
      anchorEl={div}
      open={false}
      handleClose={jest.fn()}
      handleDeleteList={jest.fn()}
      list={{ id: listId, title: listTitle, cards: listCards }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
