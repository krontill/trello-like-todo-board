import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../stores/store';
import ContentApp from './index';

it('Content renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ContentApp />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
