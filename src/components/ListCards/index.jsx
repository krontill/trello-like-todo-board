import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const styles = () => ({
  card: {
    width: 272,
    margin: '4px',
    flexShrink: 0,
    background: '#dfe3e6',
  },
});

const ListCards = props => {
  const { classes, list } = props;
  const icon = (
    <IconButton>
      <MoreHorizIcon />
    </IconButton>
  );
  return (
    <Card className={classes.card}>
      <CardHeader action={icon} title={list.title} />
      <CardContent>content</CardContent>
      <CardActions>
        <Button size="small">Add a card</Button>
      </CardActions>
    </Card>
  );
};

ListCards.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  list: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default withStyles(styles)(ListCards);
