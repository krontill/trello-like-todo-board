import React from 'react';
import PropTypes from 'prop-types';
import StyledFieldButton from './styles';

const FieldButton = props => {
  const { btnText, handleClick } = props;
  return (
    <StyledFieldButton variant="contained" onClick={handleClick}>
      {btnText}
    </StyledFieldButton>
  );
};

FieldButton.propTypes = {
  btnText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FieldButton;
