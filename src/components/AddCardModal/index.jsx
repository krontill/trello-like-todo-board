import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCard } from '../../actions/list';
import { hideModal } from '../../actions/modal';
import CardModal from '../CardModal';

const AddListModal = props => {
  const { handleAddCard, handleHideModal, listId } = props;
  return (
    <CardModal
      listId={listId}
      handleAddCard={handleAddCard}
      handleHideModal={handleHideModal}
      titleModal="Enter card title"
      btnText="Add card"
    />
  );
};

AddListModal.propTypes = {
  handleAddCard: PropTypes.func.isRequired,
  handleHideModal: PropTypes.func.isRequired,
  listId: PropTypes.string.isRequired,
};

const mapStateToProps = ({ list }) => ({ list });

const mapDispatchToProps = dispatch => ({
  handleAddCard: card => dispatch(addCard(card)),
  handleHideModal: () => dispatch(hideModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddListModal);
