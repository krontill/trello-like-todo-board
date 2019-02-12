import React from 'react';
import PriorityHigh from '@material-ui/icons/PriorityHigh';

interface IconPriorityHighProps {
  classes?: string;
}

const IconPriorityHigh = (props: IconPriorityHighProps) => {
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

IconPriorityHigh.defaultProps = {
  classes: '',
};

export default IconPriorityHigh;
