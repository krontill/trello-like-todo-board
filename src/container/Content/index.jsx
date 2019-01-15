import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import ListCards from '../../components/ListCards';
import { deleteList, editList } from '../../actions/list';
import { showModal } from '../../actions/modal';
import { moveCard, selectCard } from '../../actions/card';

const styles = () => ({
  content: {
    flex: '1 0 100%',
    padding: '4px',
    display: 'flex',
    alignItems: 'flex-start',
    overflowX: 'auto',
  },
});

const map = {
  38: 0, // Up
  39: 1, // Right
  40: 2, // Down
  37: 3, // Left
  87: 0, // W
  68: 1, // D
  83: 2, // S
  65: 3, // A
};

class Content extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    const { handleMoveCard, selectedCard } = this.props;
    const modifiers = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    const mapped = map[e.keyCode] || null;

    if (!modifiers) {
      if (!!mapped && !!selectedCard) {
        e.stopPropagation();
        e.preventDefault();
        handleMoveCard(mapped);
      }
    }
  }

  render() {
    const {
      classes,
      lists,
      handleEditList,
      handleShowModal,
      handleDeleteList,
      handleSelectCard,
      selectedCard,
      cards,
    } = this.props;

    const listsTemplate = lists.map(list => (
      <ListCards
        cards={cards}
        list={list}
        key={list.id}
        selectedCard={selectedCard}
        handleEditList={handleEditList}
        handleShowModal={handleShowModal}
        handleDeleteList={handleDeleteList}
        handleSelectCard={handleSelectCard}
      />
    ));

    return <div className={classes.content}>{listsTemplate}</div>;
  }
}

Content.defaultProps = {
  selectedCard: null,
};

Content.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleEditList: PropTypes.func.isRequired,
  handleShowModal: PropTypes.func.isRequired,
  handleDeleteList: PropTypes.func.isRequired,
  handleMoveCard: PropTypes.func.isRequired,
  handleSelectCard: PropTypes.func.isRequired,
  selectedCard: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

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
  handleMoveCard: (listId, id, mapped) =>
    dispatch(moveCard(listId, id, mapped)),
  handleSelectCard: id => dispatch(selectCard(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Content));
