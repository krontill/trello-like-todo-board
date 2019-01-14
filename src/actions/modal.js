import { SHOW_MODAL, HIDE_MODAL } from '../constants';

export const showModal = (modalType = null, modalProps = {}) => ({
  type: SHOW_MODAL,
  modalType,
  modalProps,
});

export const hideModal = () => ({ type: HIDE_MODAL });
