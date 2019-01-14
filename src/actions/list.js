import uuidv4 from 'uuid/v4';
import {
  ADD_CARD,
  EDIT_CARD,
  ADD_LIST,
  DELETE_LIST,
  EDIT_LIST,
  DELETE_CARD,
} from '../constants';

export const addList = (title = null) => ({
  type: ADD_LIST,
  payload: {
    id: uuidv4(),
    title,
    cards: null,
  },
});

export const deleteList = listId => ({ type: DELETE_LIST, payload: listId });

export const editList = (listId, title) => ({
  type: EDIT_LIST,
  payload: { listId, title },
});

export const addCard = ({
  listId,
  title,
  text = null,
  priority = null,
  dueDate = null,
  labels = null,
}) => ({
  type: ADD_CARD,
  payload: {
    listId,
    card: {
      id: uuidv4(),
      title,
      text,
      priority,
      dueDate,
      labels,
    },
  },
});

export const editCard = ({
  listId,
  title,
  text = null,
  priority = null,
  dueDate = null,
  labels = null,
  id,
}) => ({
  type: EDIT_CARD,
  payload: {
    listId,
    card: {
      id,
      title,
      text,
      priority,
      dueDate,
      labels,
    },
  },
});

export const deleteCard = ({ listId, id }) => ({
  type: DELETE_CARD,
  payload: {
    listId,
    card: { id },
  },
});
