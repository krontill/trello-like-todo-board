import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Edit';
import Subject from '@material-ui/icons/Subject';
import AccessTime from '@material-ui/icons/AccessTime';
import PriorityHigh from '@material-ui/icons/PriorityHigh';
import LowPriority from '@material-ui/icons/LowPriority';
import { withStyles } from '@material-ui/core';
import moment from 'moment';

const styles = () => ({
  card: {
    background: '#fff',
    margin: '8px 0',
    cursor: 'pointer',
  },
  title: {
    fontSize: '1rem',
  },
  icon: {
    marginRight: '8px',
  },
  date: {
    top: '-5px',
    position: 'relative',
    marginRight: '8px',
  },
});

const CardShort = props => {
  const { classes, card } = props;
  const icon = (
    <IconButton>
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
    <PriorityHigh
      className={classes.icon}
      fontSize="small"
      titleAccess="High priority."
    />
  );
  const priorityLowIcon = card.priority && card.priority === 'low' && (
    <LowPriority
      className={classes.icon}
      fontSize="small"
      titleAccess="Low priority."
    />
  );
  const dueDateIcon = card.dueDate && (
    <React.Fragment>
      <AccessTime
        className={classes.icon}
        fontSize="small"
        titleAccess="This card id due later."
      />
      <span className={classes.date}>
        {moment(card.dueDate).format('MMM D')}
      </span>
    </React.Fragment>
  );
  return (
    <Card className={classes.card}>
      <CardHeader action={icon} title={title} />
      <CardContent>
        {textIcon}
        {priorityHeightIcon}
        {priorityLowIcon}
        {dueDateIcon}
      </CardContent>
    </Card>
  );
};

CardShort.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    color: PropTypes.arrayOf(PropTypes.string),
    priority: PropTypes.string,
    dueDate: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default withStyles(styles)(CardShort);
