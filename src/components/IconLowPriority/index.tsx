import React from 'react';
import LowPriority from '@material-ui/icons/LowPriority';

interface IconLowPriorityProps {
  classes?: string;
}

const IconLowPriority = (props: IconLowPriorityProps) => {
  const { classes } = props;
  return (
    <LowPriority
      className={classes}
      fontSize="small"
      titleAccess="Low priority."
    />
  );
};

IconLowPriority.defaultProps = {
  classes: '',
};

export default IconLowPriority;
