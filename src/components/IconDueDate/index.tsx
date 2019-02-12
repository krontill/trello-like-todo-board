import React from 'react';
import AccessTime from '@material-ui/icons/AccessTime';

interface IconDueDateProps {
  classes?: string;
}

const IconDueDate = (props: IconDueDateProps) => {
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

export default IconDueDate;
