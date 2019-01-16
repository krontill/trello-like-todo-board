import undoable from 'redux-undo';
import uuidv4 from 'uuid/v4';
import {
  ADD_LIST,
  DELETE_LIST,
  EDIT_LIST,
  ADD_CARD_IN_LIST,
  DELETE_CARD_IN_LIST,
  MOVE_CARD_IN_LIST,
  MOVE_CARD_BETWEEN_LISTS,
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
        if (list.id !== action.payload.listId) return list;

        const newList = { ...list };
        newList.cards.push(action.payload.cardId);
        return newList;
      });

    case MOVE_CARD_IN_LIST:
      return state.map(list => {
        const selectedCardIndex = list.cards.indexOf(
          action.payload.selectedCard
        );

        if (selectedCardIndex === -1) return list;

        const newList = { ...list };
        const newSelectedCardIndex = selectedCardIndex + action.payload.mapped;

        newList.cards = newList.cards.map((card, index, array) => {
          if (index === newSelectedCardIndex)
            return action.payload.selectedCard;

          if (
            index === selectedCardIndex &&
            newSelectedCardIndex >= 0 &&
            newSelectedCardIndex < array.length
          )
            return list.cards[newSelectedCardIndex];

          return card;
        });

        return newList;
      });

    case MOVE_CARD_BETWEEN_LISTS: {
      let nextListForSelectedCardIndex = null;
      const validIndex = index =>
        index !== null && index >= 0 && index < state.length;

      const newState = state.map((list, index) => {
        const selectedCardIndex = list.cards.indexOf(
          action.payload.selectedCard
        );

        if (selectedCardIndex === -1) return list;

        nextListForSelectedCardIndex = index + action.payload.mapped;
        if (!validIndex(nextListForSelectedCardIndex)) return list;

        const newCurrentList = { ...list };
        newCurrentList.cards = newCurrentList.cards.filter(
          cardId => cardId !== action.payload.selectedCard
        );
        return newCurrentList;
      });

      if (validIndex(nextListForSelectedCardIndex)) {
        newState[nextListForSelectedCardIndex].cards.push(
          action.payload.selectedCard
        );
      }

      return newState;
    }

    case DELETE_CARD_IN_LIST:
      return state.map(list => {
        if (list.id !== action.payload.listId) return list;

        const newList = { ...list };
        newList.cards = newList.cards.filter(
          cardId => cardId !== action.payload.cardId
        );
        return newList;
      });

    case DELETE_LIST:
      return state.filter(list => list.id !== action.payload);

    case EDIT_LIST:
      return state.map(list => {
        if (list.id !== action.payload.listId) return list;

        const newList = { ...list };
        newList.title = action.payload.title;
        return newList;
      });

    default:
      return state;
  }
};

const undoableLists = undoable(lists, { limit: 10 });

export default undoableLists;
