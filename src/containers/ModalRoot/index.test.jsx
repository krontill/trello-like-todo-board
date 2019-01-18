import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../stores/store';
import ModalRoot from './index';

it('ModalRoot renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ModalRoot />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
