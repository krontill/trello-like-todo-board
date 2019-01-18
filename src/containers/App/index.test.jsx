import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../stores/store';
import App from './index';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
