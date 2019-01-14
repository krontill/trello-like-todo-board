import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const FieldButton = props => {
  const { btnText, handleClick, classes } = props;
  return (
    <Button variant="contained" onClick={handleClick} className={classes}>
      {btnText}
    </Button>
  );
};

FieldButton.defaultProps = {
  classes: '',
};

FieldButton.propTypes = {
  btnText: PropTypes.string.isRequired,
  classes: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default FieldButton;
