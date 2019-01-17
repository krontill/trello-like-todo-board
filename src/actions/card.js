import { ADD_CARD, DELETE_CARD, EDIT_CARD, SELECT_CARD } from '../constants';

export const addCard = ({
  listId,
  id,
  title,
  text = null,
  priority = null,
  dueDate = null,
  labels = null,
}) => ({
  type: ADD_CARD,
  payload: {
    listId,
    id,
    title,
    text,
    priority,
    dueDate,
    labels,
  },
});

export const editCard = ({
  title,
  text = null,
  priority = null,
  dueDate = null,
  labels = null,
  id,
}) => ({
  type: EDIT_CARD,
  payload: {
    id,
    title,
    text,
    priority,
    dueDate,
    labels,
  },
});

export const deleteCard = (listId, cardId) => ({
  type: DELETE_CARD,
  payload: {
    listId,
    cardId,
  },
});

export const selectCard = id => ({
  type: SELECT_CARD,
  payload: id,
});
