import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCard } from '../../actions/list';
import { hideModal } from '../../actions/modal';
import CardModal from '../../components/CardModal';

const AddCardModal = props => {
  const { handleAddCard, handleHideModal, listId, labels } = props;

  return (
    <CardModal
      labels={labels}
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
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ list, labels }) => ({ list, labels });

const mapDispatchToProps = dispatch => ({
  handleAddCard: card => dispatch(addCard(card)),
  handleHideModal: () => dispatch(hideModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCardModal);
