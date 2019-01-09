import { combineReducers } from 'redux';
import lists from './lists';
import labels from './labels';
import modal from './modal';

export default combineReducers({ lists, labels, modal });
