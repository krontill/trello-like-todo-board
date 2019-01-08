import { ADD_LIST, DELETE_LIST } from '../constants';

const uuidv4 = require('uuid/v4');

export const addList = title => ({
  type: ADD_LIST,
  payload: {
    id: uuidv4(),
    title: title || null,
    cards: null,
  },
});
export const deleteList = listId => ({ type: DELETE_LIST, payload: listId });
