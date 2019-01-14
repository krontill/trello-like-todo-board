import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editCard, deleteCard } from '../../actions/list';
import { hideModal } from '../../actions/modal';
import CardModal from '../../components/CardModal';

const EditCardModal = props => {
  const {
    handleEditCard,
    handleHideModal,
    listId,
    card,
    handleDeleteCard,
    labels,
  } = props;

  return (
    <CardModal
      labels={labels}
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
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ list, labels }) => ({ list, labels });

const mapDispatchToProps = dispatch => ({
  handleEditCard: card => dispatch(editCard(card)),
  handleDeleteCard: card => dispatch(deleteCard(card)),
  handleHideModal: () => dispatch(hideModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCardModal);
