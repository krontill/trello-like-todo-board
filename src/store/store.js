/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const localStorageMiddleware = ({ getState }) => next => action => {
  const result = next(action);
  localStorage.setItem('applicationState', JSON.stringify(getState()));
  return result;
};

const initialState = {};

const store = compose(
  applyMiddleware(localStorageMiddleware)(createStore)(
    rootReducer,
    JSON.parse(localStorage.getItem('applicationState')) || initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
