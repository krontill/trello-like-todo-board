import { ADD_LABEL, REMOVE_LABEL } from '../constants';

export const addLabel = label => ({ type: ADD_LABEL, payload: label });
export const removeLabel = label => ({ type: REMOVE_LABEL, payload: label });
