import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import RedoIcon from '@material-ui/icons/Redo';

const Redo = props => {
  const { handleRedo } = props;
  return (
    <IconButton aria-label="Redo" onClick={() => handleRedo()}>
      <RedoIcon nativeColor="rgba(255, 255, 255, 0.3)" />
    </IconButton>
  );
};

Redo.propTypes = {
  handleRedo: PropTypes.func.isRequired,
};

export default Redo;
