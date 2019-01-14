import React from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Subject from '@material-ui/icons/Subject';

const FieldText = props => {
  const { text, classes, handleChange } = props;
  return (
    <TextField
      multiline
      id="text"
      label="Text"
      className={classes.textField}
      value={text}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Subject />
          </InputAdornment>
        ),
      }}
    />
  );
};

FieldText.defaultProps = {
  text: '',
};

FieldText.propTypes = {
  text: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FieldText;
