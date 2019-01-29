import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListCards from '../../components/ListCards';
import { EDIT_CARD_MODAL } from '../../constants';
import Container from './container';
import StyledContent from './styles';

const map = {
  37: 0, // Left
  38: 1, // Up
  39: 2, // Right
  40: 3, // Down
};

class ContentApp extends Component {
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
    const {
      handleMoveCardInList,
      handleMoveCardBetweenLists,
      selectedCard,
      handleShowModal,
      lists,
      cards,
    } = this.props;
    const modifiers = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    const mapped = map[e.keyCode];

    if (!modifiers && mapped !== undefined && !!selectedCard) {
      e.stopPropagation();
      e.preventDefault();
      if (mapped % 2 === 0) {
        handleMoveCardBetweenLists(selectedCard, mapped - 1);
      } else {
        handleMoveCardInList(selectedCard, mapped - 2);
      }
    }

    if (!modifiers && e.keyCode === 13 && !!selectedCard) {
      // Enter
      let listId = null;
      lists.forEach(list => {
        if (list.cards.indexOf(selectedCard) !== -1) listId = list.id;
      });
      const card = cards.filter(item => item.id === selectedCard)[0];

      if (listId && card) handleShowModal(EDIT_CARD_MODAL, { listId, card });
    }
  }

  render() {
    const {
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

    return <StyledContent>{listsTemplate}</StyledContent>;
  }
}

ContentApp.defaultProps = {
  selectedCard: null,
};

ContentApp.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleEditList: PropTypes.func.isRequired,
  handleShowModal: PropTypes.func.isRequired,
  handleDeleteList: PropTypes.func.isRequired,
  handleMoveCardInList: PropTypes.func.isRequired,
  handleMoveCardBetweenLists: PropTypes.func.isRequired,
  handleSelectCard: PropTypes.func.isRequired,
  selectedCard: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Container(ContentApp);
