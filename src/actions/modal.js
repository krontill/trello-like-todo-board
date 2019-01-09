import { SHOW_MODAL, HIDE_MODAL } from '../constants';

export const showModal = (modalType, modalProps) => ({
  type: SHOW_MODAL,
  modalType: modalType || null,
  modalProps: modalProps || {},
});
export const hideModal = () => ({ type: HIDE_MODAL });
