import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import moment from 'moment';
import CardShort from './index';
import { LABELS } from '../../constants/colors';

it('CardShort renders without crashing', () => {
  const div = document.createElement('div');
  const title = faker.lorem.sentence();
  const text = faker.lorem.text();
  const priority = faker.random.arrayElement(['Low', 'Medium', 'Height']);
  const dueDate = moment(faker.date.future()).format('MMM D');
  const labels = faker.random.arrayElement([LABELS]);
  const id = faker.random.uuid();
  const selectedCard = faker.random.boolean();

  ReactDOM.render(
    <CardShort
      listId={id}
      card={{
        id,
        title,
        text,
        priority,
        dueDate,
        labels,
      }}
      handleShowModal={jest.fn()}
      handleSelectCard={jest.fn()}
      selectedCard={selectedCard}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
