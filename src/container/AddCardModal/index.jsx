import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCard } from '../../actions/card';
import { addCardInList } from '../../actions/list';
import { hideModal } from '../../actions/modal';
import CardModal from '../../components/CardModal';

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

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleAddCard: card => {
    dispatch(addCardInList(card.listId, card.id));
    dispatch(addCard(card));
  },
  handleHideModal: () => dispatch(hideModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCardModal);
