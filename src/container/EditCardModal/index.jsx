import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editCard } from '../../actions/list';
import { hideModal } from '../../actions/modal';
import CardModal from '../../components/CardModal';

const EditCardModal = props => {
  const { handleEditCard, handleHideModal, listId, card } = props;

  return (
    <CardModal
      card={card}
      listId={listId}
      action={handleEditCard}
      handleHideModal={handleHideModal}
      titleModal="Edit card info"
      btnText="Save card"
    />
  );
};

EditCardModal.propTypes = {
  handleEditCard: PropTypes.func.isRequired,
  handleHideModal: PropTypes.func.isRequired,
  listId: PropTypes.string.isRequired,
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    priority: PropTypes.string,
    dueDate: PropTypes.string,
    labels: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

const mapStateToProps = ({ list }) => ({ list });

const mapDispatchToProps = dispatch => ({
  handleEditCard: card => dispatch(editCard(card)),
  handleHideModal: () => dispatch(hideModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCardModal);
