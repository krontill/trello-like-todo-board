import { ADD_LIST, REMOVE_LIST } from '../constants';

export const addList = () => ({ type: ADD_LIST });
export const removeList = listId => ({ type: REMOVE_LIST, payload: listId });
