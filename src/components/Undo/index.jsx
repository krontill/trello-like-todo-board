import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import UndoIcon from '@material-ui/icons/Undo';

const Undo = props => {
  const { onUndo, canUndo } = props;
  return (
    <IconButton
      title="Undo"
      aria-label="Undo"
      onClick={() => onUndo()}
      disabled={!canUndo}
    >
      <UndoIcon nativeColor="rgba(255, 255, 255, 0.3)" />
    </IconButton>
  );
};

Undo.propTypes = {
  onUndo: PropTypes.func.isRequired,
  canUndo: PropTypes.bool.isRequired,
};

export default Undo;
