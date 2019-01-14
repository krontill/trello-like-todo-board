import React from 'react';
import PropTypes from 'prop-types';
import LowPriority from '@material-ui/icons/LowPriority';

const IconLowPriority = props => {
  const { classes } = props;
  return (
    <LowPriority
      className={classes}
      fontSize="small"
      titleAccess="Low priority."
    />
  );
};

IconLowPriority.propTypes = {
  classes: PropTypes.string.isRequired,
};

export default IconLowPriority;
