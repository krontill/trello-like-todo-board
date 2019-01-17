import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import faker from 'faker';
import store from '../../store/store';
import EditCardModal from './index';
import { LABELS } from '../../constants/colors';

it('EditCardModal renders without crashing', () => {
  const div = document.createElement('div');
  const title = faker.lorem.sentence();
  const text = faker.lorem.text();
  const priority = faker.random.arrayElement(['Low', 'Medium', 'Height']);
  const dueDate = faker.date.future().toString();
  const labels = faker.random.arrayElement([LABELS]);
  const id = faker.random.uuid();
  const card = {
    id,
    title,
    text,
    priority,
    dueDate,
    labels,
  };

  ReactDOM.render(
    <Provider store={store}>
      <EditCardModal listId={id} card={card} />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
