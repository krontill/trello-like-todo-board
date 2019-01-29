import React from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconDueDate from '../IconDueDate';
import StyledTextField from './styles';

const FieldDueDate = props => {
  const { dueDate, handleChange } = props;
  return (
    <StyledTextField
      id="dueDate"
      label="Due Date"
      type="date"
      defaultValue={dueDate}
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
};

FieldDueDate.propTypes = {
  dueDate: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default FieldDueDate;
