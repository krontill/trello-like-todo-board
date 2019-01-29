import React from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import Title from '@material-ui/icons/Title';
import StyledTextField from './styles';

const FieldTitle = props => {
  const { title, handleChange } = props;
  return (
    <StyledTextField
      required
      id="title"
      label="Required title"
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
  handleChange: PropTypes.func.isRequired,
};

export default FieldTitle;
