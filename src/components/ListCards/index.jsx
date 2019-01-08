import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CardShort from '../CardShort';
import ListMenu from '../ListMenu';

const styles = () => ({
  card: {
    width: 272,
    margin: '4px',
    flexShrink: 0,
    background: '#dfe3e6',
  },
  cardActionArea: {
    padding: '8px 16px',
  },
});

class ListCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anchorEl: null };
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { classes, list } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const icon = (
      <IconButton
        aria-label="More"
        aria-owns={open ? 'long-menu' : undefined}
        aria-haspopup="true"
        onClick={event => this.handleClick(event)}
      >
        <MoreHorizIcon fontSize="small" />
      </IconButton>
    );
    const cardsTemplate =
      list.cards &&
      list.cards.map(card => <CardShort key={card.id} card={card} />);
    return (
      <Card className={classes.card}>
        <CardHeader variant="h2" action={icon} title={list.title} />
        {open && (
          <ListMenu
            anchorEl={anchorEl}
            listId={list.id}
            open={open}
            handleClose={() => this.handleClose()}
          />
        )}
        <CardContent>{cardsTemplate}</CardContent>
        <CardActionArea className={classes.cardActionArea}>
          Add a card
        </CardActionArea>
      </Card>
    );
  }
}

ListCards.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  list: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default withStyles(styles)(ListCards);
