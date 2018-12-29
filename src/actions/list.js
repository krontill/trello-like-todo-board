import { ADD_LIST, REMOVE_LIST } from '../constants';

const uuidv4 = require('uuid/v4');

export const addList = () => ({
  type: ADD_LIST,
  payload: {
    id: uuidv4(),
    title: null,
    list: [],
  },
});
export const removeList = listId => ({ type: REMOVE_LIST, payload: listId });
