import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import lists from './lists';
import modal from './modal';
import setting from './setting';
import selectedCard from './selectedCard';
import cards from './cards';

const undoableCards = undoable(cards, { limit: 10 });
const undoableModal = undoable(modal, { limit: 10 });
const undoableLists = undoable(lists, { limit: 10 });
const undoableSetting = undoable(setting, { limit: 10 });
const undoableSelectCard = undoable(selectedCard, { limit: 10 });

export default combineReducers({
  lists: undoableLists,
  cards: undoableCards,
  setting: undoableSetting,
  selectedCard: undoableSelectCard,
  modal: undoableModal,
});
