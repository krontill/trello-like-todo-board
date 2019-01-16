import React from 'react';
import { connect } from 'react-redux';
import { ADD_CARD_MODAL, EDIT_CARD_MODAL } from '../../constants';
import AddCardModal from '../AddCardModal';
import EditCardModal from '../EditCardModal';

const MODAL_COMPONENTS = {
  [`${ADD_CARD_MODAL}`]: AddCardModal,
  [`${EDIT_CARD_MODAL}`]: EditCardModal,
};

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) return null;

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

const mapStateToProps = state => state.modal;

export default connect(mapStateToProps)(ModalRoot);
