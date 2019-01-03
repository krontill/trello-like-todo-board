import { Set } from 'immutable';
import { ADD_LABEL, REMOVE_LABEL } from '../constants';

const initialState = Set([
  {
    color: 'green',
    name: null,
  },
  {
    color: 'yellow',
    name: null,
  },
  {
    color: 'orange',
    name: null,
  },
  {
    color: 'red',
    name: null,
  },
  {
    color: 'purple',
    name: null,
  },
  {
    color: 'blue',
    name: null,
  },
]);

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LABEL:
      return state.add(action.payload);

    case REMOVE_LABEL:
      return state.delete(action.payload);

    default:
      return state;
  }
};
