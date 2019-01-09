import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Input from '@material-ui/core/Input';
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
  headerContent: {
    overflow: 'hidden',
  },
  title: {
    padding: '0 0 4px 4px',
    overflowWrap: 'break-word',
    margin: '0 0 5px 0',
  },
  input: {
    lineHeight: '1.35417em',
    fontSize: '1.5rem',
    fontWeight: '400',
    background: 'white',
    padding: '0 0 0 4px',
  },
});

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
    const { classes, list } = this.props;
    const { anchorEl, newTitle, value } = this.state;
    const open = Boolean(anchorEl);
    const icon = (
      <IconButton
        aria-label="More"
        aria-owns={open ? 'long-menu' : undefined}
        aria-haspopup="true"
        onClick={event => this.handleClickIcon(event)}
      >
        <MoreHorizIcon fontSize="small" />
      </IconButton>
    );
    const cardsTemplate =
      list.cards &&
      list.cards.map(card => <CardShort key={card.id} card={card} />);
    const title = (
      <Typography
        variant="headline"
        component="span"
        className={classes.title}
        onClick={() => this.handleClickTitle()}
      >
        {list.title}
      </Typography>
    );
    const NewTitle = (
      <ClickAwayListener onClickAway={() => this.setNewTitle(list.id, value)}>
        <Input
          className={classes.input}
          multiline
          value={value}
          onChange={event => this.handleChange(event)}
        />
      </ClickAwayListener>
    );
    return (
      <Card className={classes.card}>
        <CardHeader
          classes={{ content: classes.headerContent }}
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
  handleEditList: PropTypes.func.isRequired,
};

export default withStyles(styles)(ListCards);
