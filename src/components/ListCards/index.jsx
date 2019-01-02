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

const ListCards = props => {
  const { classes, list } = props;
  const icon = (
    <IconButton>
      <MoreHorizIcon fontSize="small" />
    </IconButton>
  );
  const cardsTemplate = list.cards.map(card => (
    <CardShort key={card.id} card={card} />
  ));
  return (
    <Card className={classes.card}>
      <CardHeader variant="h2" action={icon} title={list.title} />
      <CardContent>{cardsTemplate}</CardContent>
      <CardActionArea className={classes.cardActionArea}>
        Add a card
      </CardActionArea>
    </Card>
  );
};

ListCards.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  list: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default withStyles(styles)(ListCards);
