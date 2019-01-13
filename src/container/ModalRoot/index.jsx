import React from 'react';
import { connect } from 'react-redux';
import { ADD_CARD_MODAL, EDIT_CARD_MODAL } from '../../constants/index';
import AddCardModal from '../AddCardModal/index';
import EditCardModal from '../EditCardModal/index';

const MODAL_COMPONENTS = {
  [`${ADD_CARD_MODAL}`]: AddCardModal,
  [`${EDIT_CARD_MODAL}`]: EditCardModal,
};

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

export default connect(state => state.modal)(ModalRoot);
