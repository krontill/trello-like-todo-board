import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import lists from './lists';
import modal from './modal';
import setting from './setting';
import selectedCard from './selectedCard';
import cards from './cards';

const undoableCards = undoable(cards, { limit: 10 });

export default combineReducers({
  lists,
  cards: undoableCards,
  setting,
  selectedCard,
  modal,
});
