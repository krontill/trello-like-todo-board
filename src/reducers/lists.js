import undoable from 'redux-undo';
import uuidv4 from 'uuid/v4';
import {
  ADD_LIST,
  DELETE_LIST,
  EDIT_LIST,
  ADD_CARD_IN_LIST,
  DELETE_CARD_IN_LIST,
} from '../constants';

const initialState = [
  {
    id: uuidv4(),
    title: 'To Do',
    cards: ['095390ad-006f-4fe4-a6ea-63e1ea2e74b9'],
  },
];

const lists = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.payload];

    case ADD_CARD_IN_LIST:
      return state.map(list => {
        if (list.id === action.payload.listId) {
          const newList = list;
          newList.cards.push(action.payload.cardId);
          return newList;
        }
        return list;
      });

    case DELETE_CARD_IN_LIST:
      return state.map(list => {
        if (list.id === action.payload.listId) {
          const newList = list;
          newList.cards = newList.cards.filter(
            cardId => cardId !== action.payload.cardId
          );
          return newList;
        }
        return list;
      });

    case DELETE_LIST:
      return state.filter(list => list.id !== action.payload);

    case EDIT_LIST:
      return state.map(list => {
        if (list.id === action.payload.listId) {
          const newList = list;
          newList.title = action.payload.title;
          return newList;
        }
        return list;
      });

    default:
      return state;
  }
};

const undoableLists = undoable(lists, { limit: 10 });

export default undoableLists;
