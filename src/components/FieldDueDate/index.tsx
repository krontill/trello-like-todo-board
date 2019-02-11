import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconDueDate from '../IconDueDate';
import StyledTextField from './styles';

interface FieldDueDateProps {
  dueDate?: string;
  handleChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

const FieldDueDate = (props: FieldDueDateProps) => {
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

export default FieldDueDate;
