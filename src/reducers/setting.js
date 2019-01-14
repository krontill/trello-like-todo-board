import undoable from 'redux-undo';
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

const undoableSetting = undoable(setting);

export default undoableSetting;
