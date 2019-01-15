import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Edit';
import Subject from '@material-ui/icons/Subject';
import { withStyles } from '@material-ui/core';
import moment from 'moment';
import classNames from 'classnames';
import LabelsShort from '../LabelsShort';
import IconLowPriority from '../IconLowPriority';
import IconPriorityHigh from '../IconPriorityHigh';
import IconDueDate from '../IconDueDate';
import { EDIT_CARD_MODAL } from '../../constants';

const styles = () => ({
  card: {
    position: 'relative',
    background: '#fff',
    margin: '8px 0',
    cursor: 'pointer',
    '&:hover $action': {
      opacity: 1,
    },
    '&:hover': {
      background: '#f5f6f7',
    },
  },
  cardActive: {
    background: '#f5f6f7',
    '& $action': {
      opacity: 1,
    },
  },
  selectedCard: {
    background: '#d3d4d5',
    '&:hover': {
      background: '#e4e5e6',
    },
  },
  title: {
    fontSize: '0.875rem',
    lineHeight: '1.42',
  },
  icon: {
    marginRight: '8px',
  },
  date: {
    top: '-5px',
    position: 'relative',
    marginRight: '8px',
  },
  action: {
    position: 'absolute',
    right: '8px',
    top: '8px',
    opacity: 0,
    transition: 'opacity .1s',
  },
});

class CardShort extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  handleChangeActiveCard(active) {
    this.setState({ active });
  }

  render() {
    const {
      classes,
      card,
      handleShowModal,
      selectedCard,
      handleSelectCard,
      listId,
    } = this.props;
    const { active } = this.state;

    const icon = (
      <IconButton
        title="Edit card"
        aria-label="Edit card"
        onClick={() => handleShowModal(EDIT_CARD_MODAL, { listId, card })}
        onBlur={() => this.handleChangeActiveCard(false)}
        onFocusVisible={() => this.handleChangeActiveCard(true)}
      >
        <Edit fontSize="small" />
      </IconButton>
    );

    const title = (
      <Typography variant="h3" className={classes.title}>
        {card.title.length > 350
          ? card.title.slice(0, 350) + String.fromCharCode(8230)
          : card.title}
      </Typography>
    );

    const textIcon = card.text && (
      <Subject
        className={classes.icon}
        fontSize="small"
        titleAccess="This card has a description."
      />
    );

    const priorityHeightIcon = card.priority && card.priority === 'height' && (
      <IconPriorityHigh classes={classes.icon} />
    );

    const priorityLowIcon = card.priority && card.priority === 'low' && (
      <IconLowPriority classes={classes.icon} />
    );

    const dueDateIcon = card.dueDate && (
      <React.Fragment>
        <IconDueDate classes={classes.icon} />
        <span className={classes.date}>
          {moment(card.dueDate).format('MMM D')}
        </span>
      </React.Fragment>
    );

    const labels = card.labels && <LabelsShort labels={card.labels} />;

    const cardClass = classNames({
      [classes.card]: true,
      [classes.cardActive]: active,
      [classes.selectedCard]: selectedCard,
    });

    return (
      <Card className={cardClass}>
        {labels}
        <CardHeader
          classes={{ action: classes.action }}
          action={icon}
          title={title}
          onClick={() => handleSelectCard(card.id)}
        />
        <CardContent>
          {textIcon}
          {priorityHeightIcon}
          {priorityLowIcon}
          {dueDateIcon}
        </CardContent>
      </Card>
    );
  }
}

CardShort.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    priority: PropTypes.string,
    dueDate: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleShowModal: PropTypes.func.isRequired,
  handleSelectCard: PropTypes.func.isRequired,
  selectedCard: PropTypes.bool.isRequired,
  listId: PropTypes.string.isRequired,
};

export default withStyles(styles)(CardShort);
