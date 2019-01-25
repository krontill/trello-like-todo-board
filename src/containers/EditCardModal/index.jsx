import React from 'react';
import PropTypes from 'prop-types';
import CardModal from '../../components/CardModal';
import Container from './container';

const EditCardModal = props => {
  const {
    handleEditCard,
    handleHideModal,
    listId,
    card,
    handleDeleteCard,
  } = props;

  return (
    <CardModal
      card={card}
      listId={listId}
      action={handleEditCard}
      handleDeleteCard={handleDeleteCard}
      handleHideModal={handleHideModal}
      titleModal="Edit card info"
      btnText="Save card"
    />
  );
};

EditCardModal.propTypes = {
  handleEditCard: PropTypes.func.isRequired,
  handleDeleteCard: PropTypes.func.isRequired,
  handleHideModal: PropTypes.func.isRequired,
  listId: PropTypes.string.isRequired,
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    priority: PropTypes.string,
    dueDate: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Container(EditCardModal);
