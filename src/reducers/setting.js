import { CHANGE_BG } from '../constants';

const initialState = {
  bg: 'blue',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BG:
      return action.payload;
    default:
      return state;
  }
};
