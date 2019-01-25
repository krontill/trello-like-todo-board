import React from 'react';
import PropTypes from 'prop-types';
import CardModal from '../../components/CardModal';
import Container from './container';

const AddCardModal = props => {
  const { handleAddCard, handleHideModal, listId } = props;

  return (
    <CardModal
      listId={listId}
      action={handleAddCard}
      handleHideModal={handleHideModal}
      titleModal="Enter card info"
      btnText="Add card"
    />
  );
};

AddCardModal.propTypes = {
  handleAddCard: PropTypes.func.isRequired,
  handleHideModal: PropTypes.func.isRequired,
  listId: PropTypes.string.isRequired,
};

export default Container(AddCardModal);
