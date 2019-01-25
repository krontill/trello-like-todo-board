import { connect } from 'react-redux';
import {
  deleteList,
  editList,
  moveCardBetweenLists,
  moveCardInList,
} from '../../actions/list';
import { showModal } from '../../actions/modal';
import { selectCard } from '../../actions/card';

const mapStateToProps = ({ lists, selectedCard, cards }) => ({
  lists: lists.present,
  selectedCard: selectedCard.present,
  cards: cards.present,
});

const mapDispatchToProps = dispatch => ({
  handleEditList: (id, newTitle) => dispatch(editList(id, newTitle)),
  handleShowModal: (modalType, modalProps) =>
    dispatch(showModal(modalType, modalProps)),
  handleDeleteList: listId => dispatch(deleteList(listId)),
  handleMoveCardInList: (id, mapped) => dispatch(moveCardInList(id, mapped)),
  handleMoveCardBetweenLists: (id, mapped) =>
    dispatch(moveCardBetweenLists(id, mapped)),
  handleSelectCard: id => dispatch(selectCard(id)),
});

export default componentName =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(componentName);
