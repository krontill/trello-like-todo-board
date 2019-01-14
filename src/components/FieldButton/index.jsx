import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const FieldButton = props => {
  const { btnText, handleClick } = props;
  return (
    <Button variant="contained" onClick={handleClick}>
      {btnText}
    </Button>
  );
};

FieldButton.propTypes = {
  btnText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FieldButton;
