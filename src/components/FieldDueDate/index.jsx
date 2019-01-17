import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconDueDate from '../IconDueDate';

const FieldDueDate = props => {
  const { dueDate, classes, handleChange } = props;
  return (
    <TextField
      id="dueDate"
      label="Due Date"
      type="date"
      defaultValue={dueDate}
      className={classes}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconDueDate />
          </InputAdornment>
        ),
      }}
    />
  );
};

FieldDueDate.defaultProps = {
  dueDate: '',
  classes: '',
};

FieldDueDate.propTypes = {
  dueDate: PropTypes.string,
  classes: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default FieldDueDate;
