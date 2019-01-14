import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import RedoIcon from '@material-ui/icons/Redo';

const Redo = props => {
  const { onRedo, canRedo } = props;
  return (
    <IconButton
      title="Redo"
      aria-label="Redo"
      onClick={() => onRedo()}
      disabled={!canRedo}
    >
      <RedoIcon nativeColor="rgba(255, 255, 255, 0.3)" />
    </IconButton>
  );
};

Redo.propTypes = {
  onRedo: PropTypes.func.isRequired,
  canRedo: PropTypes.bool.isRequired,
};

export default Redo;
