import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconLowPriority from '../IconLowPriority';
import IconPriorityHigh from '../IconPriorityHigh';
import priority from '../../constants/priority';

const FieldPriority = props => {
  const { selectedPriority, classes, handleChange } = props;

  const priorityTemplate = priority.map(item => (
    <MenuItem key={item} value={item === 'None' ? '' : item.toLowerCase()}>
      {item}
      {item === 'Low' ? <IconLowPriority classes={classes.selectIcon} /> : null}
      {item === 'Height' ? (
        <IconPriorityHigh classes={classes.selectIcon} />
      ) : null}
    </MenuItem>
  ));

  return (
    <FormControl className={classes.formControl}>
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
    </FormControl>
  );
};

FieldPriority.defaultProps = {
  selectedPriority: '',
};

FieldPriority.propTypes = {
  selectedPriority: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FieldPriority;
