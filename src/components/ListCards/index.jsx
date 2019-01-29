import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CardShort from '../CardShort';
import ListMenu from '../ListMenu';
import { ADD_CARD_MODAL } from '../../constants';
import {
  StyledCard,
  StyledCardActionArea,
  StyledHeaderContent,
  StyledTitle,
  StyledInput,
} from './styles';

class ListCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anchorEl: null, newTitle: false, value: props.list.title };
  }

  setNewTitle(id, newTitle) {
    const { handleEditList } = this.props;
    this.setState({ newTitle: false });
    handleEditList(id, newTitle);
  }

  handleBlurTitle() {
    this.setState({ newTitle: false });
  }

  handleClickTitle() {
    this.setState({ newTitle: true });
  }

  handleClickIcon(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const {
      list,
      handleShowModal,
      handleDeleteList,
      selectedCard,
      handleSelectCard,
      cards,
    } = this.props;
    const { anchorEl, newTitle, value } = this.state;
    const open = Boolean(anchorEl);

    const icon = (
      <IconButton
        title="Open list menu"
        aria-label="Open list menu"
        aria-owns={open ? 'long-menu' : undefined}
        aria-haspopup="true"
        onClick={event => this.handleClickIcon(event)}
      >
        <MoreHorizIcon fontSize="small" />
      </IconButton>
    );

    const cardsTemplate =
      list.cards.length > 0 &&
      cards &&
      list.cards.map(cardId => {
        const currentCard = cards.filter(card => card.id === cardId)[0];
        if (!currentCard) return null; // if undo delete card - error =\
        return (
          <CardShort
            key={cardId}
            card={cards.filter(card => card.id === cardId)[0]}
            listId={list.id}
            handleSelectCard={handleSelectCard}
            selectedCard={selectedCard === cardId}
            handleShowModal={handleShowModal}
          />
        );
      });

    const title = (
      <StyledTitle
        variant="headline"
        component="span"
        onClick={() => this.handleClickTitle()}
        onFocus={() => this.handleClickTitle()}
        tabIndex="0"
      >
        {list.title}
      </StyledTitle>
    );

    const NewTitle = (
      <ClickAwayListener onClickAway={() => this.setNewTitle(list.id, value)}>
        <StyledInput
          multiline
          value={value}
          onChange={event => this.handleChange(event)}
          onBlur={() => this.setNewTitle(list.id, value)}
        />
      </ClickAwayListener>
    );

    return (
      <StyledCard>
        <StyledHeaderContent
          variant="h2"
          action={icon}
          title={newTitle ? NewTitle : title}
        />
        {open && (
          <ListMenu
            anchorEl={anchorEl}
            list={list}
            open={open}
            handleClose={() => this.handleClose()}
            handleDeleteList={handleDeleteList}
          />
        )}
        <CardContent>{cardsTemplate}</CardContent>
        <StyledCardActionArea
          onClick={() => handleShowModal(ADD_CARD_MODAL, { listId: list.id })}
        >
          Add a card
        </StyledCardActionArea>
      </StyledCard>
    );
  }
}

ListCards.defaultProps = {
  selectedCard: null,
};

ListCards.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleEditList: PropTypes.func.isRequired,
  handleShowModal: PropTypes.func.isRequired,
  handleDeleteList: PropTypes.func.isRequired,
  handleSelectCard: PropTypes.func.isRequired,
  selectedCard: PropTypes.string,
};

export default ListCards;
