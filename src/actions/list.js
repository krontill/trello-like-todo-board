import uuidv4 from 'uuid/v4';
import {
  ADD_LIST,
  EDIT_LIST,
  DELETE_LIST,
  MOVE_CARD_IN_LIST,
  MOVE_CARD_BETWEEN_LISTS,
} from '../constants';

export const addList = (title = null) => ({
  type: ADD_LIST,
  payload: {
    id: uuidv4(),
    title,
    cards: [],
  },
});

export const editList = (listId, title) => ({
  type: EDIT_LIST,
  payload: { listId, title },
});

export const deleteList = listId => ({ type: DELETE_LIST, payload: listId });

export const moveCardInList = (selectedCard, mapped) => ({
  type: MOVE_CARD_IN_LIST,
  payload: {
    selectedCard,
    mapped,
  },
});

export const moveCardBetweenLists = (selectedCard, mapped) => ({
  type: MOVE_CARD_BETWEEN_LISTS,
  payload: {
    selectedCard,
    mapped,
  },
});
