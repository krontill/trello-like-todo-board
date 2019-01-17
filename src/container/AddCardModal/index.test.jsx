import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import faker from 'faker';
import store from '../../store/store';
import AddCardModal from './index';

it('AddCardModal renders without crashing', () => {
  const div = document.createElement('div');
  const id = faker.random.uuid();

  ReactDOM.render(
    <Provider store={store}>
      <AddCardModal listId={id} />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
