import { combineReducers } from 'redux';
import lists from './lists';
import modal from './modal';
import setting from './setting';
import selectedCard from './selectedCard';
import cards from './cards';

export default combineReducers({ lists, cards, setting, selectedCard, modal });
