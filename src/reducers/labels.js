import { ADD_LABEL, REMOVE_LABEL } from '../constants';

const initialState = ['Green', 'Yellow', 'Orange', 'Red', 'Purple', 'Blue'];

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
