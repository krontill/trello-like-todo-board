import { combineReducers } from 'redux';
import counter from './counter';
import lists from './lists';

export default combineReducers({ counter, lists });
