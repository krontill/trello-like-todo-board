import { combineReducers } from 'redux';
import lists from './lists';
import modal from './modal';
import setting from './setting';

export default combineReducers({ lists, modal, setting });
