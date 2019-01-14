import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconLowPriority from '../IconLowPriority';
import IconPriorityHigh from '../IconPriorityHigh';

const FieldPriority = props => {
  const { priority, classes, handleChange } = props;
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="priority">Priority</InputLabel>
      <Select
        value={priority}
        onChange={handleChange}
        inputProps={{
          name: 'priority',
          id: 'priority',
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="low">
          Low
          <IconLowPriority classes={classes.selectIcon} />
        </MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="height">
          Height
          <IconPriorityHigh classes={classes.selectIcon} />
        </MenuItem>
      </Select>
    </FormControl>
  );
};

FieldPriority.defaultProps = {
  priority: '',
};

FieldPriority.propTypes = {
  priority: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FieldPriority;
