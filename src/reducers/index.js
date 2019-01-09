import { combineReducers } from 'redux';
import lists from './lists';
import labels from './labels';

export default combineReducers({ lists, labels });
