import React from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import Subject from '@material-ui/icons/Subject';
import StyledTextField from './styles';

const FieldText = props => {
  const { text, handleChange } = props;
  return (
    <StyledTextField
      multiline
      id="text"
      label="Text"
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
  handleChange: PropTypes.func.isRequired,
};

export default FieldText;
