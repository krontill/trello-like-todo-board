import React from 'react';
import PropTypes from 'prop-types';
import PriorityHigh from '@material-ui/icons/PriorityHigh';

const IconPriorityHigh = props => {
  const { classes } = props;
  return (
    <PriorityHigh
      color="error"
      className={classes}
      fontSize="small"
      titleAccess="High priority."
    />
  );
};

IconPriorityHigh.propTypes = {
  classes: PropTypes.string.isRequired,
};

export default IconPriorityHigh;
