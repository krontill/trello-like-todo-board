import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import faker from 'faker';
import store from '../../stores/store';
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

it('EditCardModal with initial state renders without crashing', () => {
  const div = document.createElement('div');

  const title =
    'As React is just a lib, it doesn’t dictate rules about how you should organize and structure your projects. This is nice, because it gives us freedom to try different approaches and adapt the ones that better fit for us. On the other hand, this could cause some confusion for devs that are starting in React world. As React is just a lib, it doesn’t dictate rules about how you should organize and structure your projects. This is nice, because it gives us freedom to try different approaches and adapt the ones that better fit for us. On the other hand, this could cause some confusion for devs that are starting in React world.';
  const text = 'Text Card';
  const priority = 'low';
  const dueDate = '2019-01-02';
  const labels = ['Green', 'Red', 'Blue'];
  const id = '095390ad-006f-4fe4-a6ea-63e1ea2e74b9';

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
