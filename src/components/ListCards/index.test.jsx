import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ListCards from './index';
import { LABELS } from '../../constants/colors';

it('ListCards renders without crashing', () => {
  const div = document.createElement('div');
  const listId = faker.random.uuid();
  const listTitle = faker.lorem.sentence();
  const listCards = [`${faker.random.uuid()}`];

  const title = faker.lorem.sentence();
  const text = faker.lorem.text();
  const priority = faker.random.arrayElement(['Low', 'Medium', 'Height']);
  const dueDate = faker.date.future().toString();
  const labels = faker.random.arrayElement([LABELS]);
  const id = faker.random.uuid();

  const cards = [
    {
      id,
      title,
      text,
      priority,
      dueDate,
      labels,
    },
  ];

  ReactDOM.render(
    <ListCards
      labels={labels}
      handleEditList={jest.fn()}
      handleShowModal={jest.fn()}
      handleDeleteList={jest.fn()}
      handleSelectCard={jest.fn()}
      list={{ id: listId, title: listTitle, cards: listCards }}
      cards={cards}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
