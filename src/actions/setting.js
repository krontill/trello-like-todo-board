import { CHANGE_BG } from '../constants';

const changeBg = bg => ({ type: CHANGE_BG, payload: { bg } });

export default changeBg;
