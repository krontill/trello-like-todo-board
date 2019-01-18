import { SELECT_CARD } from '../constants';

const initialState = null;

const selectedCard = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CARD:
      return state === action.payload ? initialState : action.payload;

    default:
      return state;
  }
};

export default selectedCard;
