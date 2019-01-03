import { combineReducers } from 'redux';
import counter from './counter';
import lists from './lists';
import labels from './labels';

export default combineReducers({ counter, lists, labels });
