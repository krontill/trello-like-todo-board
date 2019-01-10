import { combineReducers } from 'redux';
import lists from './lists';
import labels from './labels';
import modal from './modal';
import setting from './setting';

export default combineReducers({ lists, labels, modal, setting });
