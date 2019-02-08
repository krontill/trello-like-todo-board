import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import priority from '../../constants/priority';
import {
  StyledFieldPriority,
  StyledIconLowPriority,
  StyledIconPriorityHigh,
} from './styles';

interface FieldPriorityProps {
  selectedPriority?: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FieldPriority = (props: FieldPriorityProps) => {
  const { selectedPriority, handleChange } = props;

  const priorityTemplate = priority.map(item => (
    <MenuItem key={item} value={item === 'None' ? '' : item.toLowerCase()}>
      {item}
      {item === 'Low' ? <StyledIconLowPriority /> : null}
      {item === 'Height' ? <StyledIconPriorityHigh /> : null}
    </MenuItem>
  ));

  return (
    <StyledFieldPriority>
      <InputLabel htmlFor="priority">Priority</InputLabel>
      <Select
        value={selectedPriority}
        onChange={handleChange}
        inputProps={{
          name: 'priority',
          id: 'priority',
        }}
      >
        {priorityTemplate}
      </Select>
    </StyledFieldPriority>
  );
};

export default FieldPriority;
