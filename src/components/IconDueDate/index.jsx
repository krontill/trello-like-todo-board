import React from 'react';
import PropTypes from 'prop-types';
import AccessTime from '@material-ui/icons/AccessTime';

const IconDueDate = props => {
  const { classes } = props;
  return (
    <AccessTime
      className={classes}
      fontSize="small"
      titleAccess="This card id due later."
    />
  );
};

IconDueDate.defaultProps = {
  classes: '',
};

IconDueDate.propTypes = {
  classes: PropTypes.string,
};

export default IconDueDate;
