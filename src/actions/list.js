import { ADD_LIST, REMOVE_LIST } from '../constants';

const uuidv4 = require('uuid/v4');

export const addList = title => ({
  type: ADD_LIST,
  payload: {
    id: uuidv4(),
    title: title || null,
    cards: null,
  },
});
export const removeList = listId => ({ type: REMOVE_LIST, payload: listId });
