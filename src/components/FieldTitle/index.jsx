import React from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Title from '@material-ui/icons/Title';

const FieldTitle = props => {
  const { title, classes, handleChange } = props;
  return (
    <TextField
      required
      id="title"
      label="Required title"
      className={classes.textField}
      value={title}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Title />
          </InputAdornment>
        ),
      }}
    />
  );
};

FieldTitle.defaultProps = {
  title: '',
};

FieldTitle.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FieldTitle;
