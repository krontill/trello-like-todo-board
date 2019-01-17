import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import uuidv4 from 'uuid/v4';
import store from '../../store/store';
import AddCardModal from './index';

it('AddCardModal renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <AddCardModal listId={uuidv4()} />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
