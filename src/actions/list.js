import uuidv4 from 'uuid/v4';
import {
  ADD_CARD,
  EDIT_CARD,
  ADD_LIST,
  DELETE_LIST,
  EDIT_LIST,
} from '../constants';

export const addList = title => ({
  type: ADD_LIST,
  payload: {
    id: uuidv4(),
    title: title || null,
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
  text,
  priority,
  dueDate,
  labels,
}) => ({
  type: ADD_CARD,
  payload: {
    listId,
    card: {
      id: uuidv4(),
      title,
      text: text || null,
      priority: priority || null,
      dueDate: dueDate || null,
      labels: labels || null,
    },
  },
});

export const editCard = ({
  listId,
  title,
  text,
  priority,
  dueDate,
  labels,
  id,
}) => ({
  type: EDIT_CARD,
  payload: {
    listId,
    card: {
      id,
      title,
      text: text || null,
      priority: priority || null,
      dueDate: dueDate || null,
      labels: labels || null,
    },
  },
});
