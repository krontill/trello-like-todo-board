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
    '&:hover $action': {
      opacity: 1,
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
  root: {
    position: 'relative',
  },
  action: {
    position: 'absolute',
    right: '8px',
    opacity: 0,
    transition: 'opacity .1s',
  },
  labels: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '16px 16px 0 16px',
  },
  label: {
    fontSize: '0.75rem',
    fontWeight: '700',
    height: '8px',
    margin: '0 4px 4px 0',
    width: '40px',
    padding: '0',
    borderRadius: '4px',
    flexShrink: 0,
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
  const labels = card.labels && (
    <div className={classes.labels}>
      {card.labels.map(label => (
        <span
          key={label.color + label.name}
          style={{ background: label.color }}
          className={classes.label}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
  return (
    <Card className={classes.card}>
      {labels}
      <CardHeader
        classes={{ root: classes.root, action: classes.action }}
        action={icon}
        title={title}
      />
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
    labels: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

export default withStyles(styles)(CardShort);
