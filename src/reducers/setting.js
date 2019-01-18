import { CHANGE_BG } from '../constants';

const initialState = {
  bg: 'blue',
};

const setting = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BG:
      return action.payload;

    default:
      return state;
  }
};

export default setting;
