import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import UndoIcon from '@material-ui/icons/Undo';

const Undo = props => {
  const { handleUndo } = props;
  return (
    <IconButton aria-label="Undo" onClick={() => handleUndo()}>
      <UndoIcon nativeColor="rgba(255, 255, 255, 0.3)" />
    </IconButton>
  );
};

Undo.propTypes = {
  handleUndo: PropTypes.func.isRequired,
};

export default Undo;
