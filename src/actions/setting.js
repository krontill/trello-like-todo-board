import { CHANGE_BG, UNDO, REDO } from '../constants';

export const changeBg = bg => ({ type: CHANGE_BG, payload: { bg } });
export const undo = () => ({ type: UNDO });
export const redo = () => ({ type: REDO });
