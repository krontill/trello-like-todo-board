import { connect } from 'react-redux';
import { deleteCard, editCard } from '../../actions/card';
import { hideModal } from '../../actions/modal';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleEditCard: card => dispatch(editCard(card)),
  handleDeleteCard: (listId, cardId) => dispatch(deleteCard(listId, cardId)),
  handleHideModal: () => dispatch(hideModal()),
});

export default componentName =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(componentName);
