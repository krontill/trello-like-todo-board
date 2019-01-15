import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import RedoIcon from '@material-ui/icons/Redo';
import UndoIcon from '@material-ui/icons/Undo';

class UndoRedo extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    const { onRedo, onUndo } = this.props;
    if (e.keyCode === 90 && e.ctrlKey) {
      onUndo();
    }
    if (e.keyCode === 89 && e.ctrlKey) {
      onRedo();
    }
  }

  render() {
    const { onRedo, canRedo, onUndo, canUndo } = this.props;
    return (
      <React.Fragment>
        <IconButton
          title="Undo"
          aria-label="Undo"
          onClick={() => onUndo()}
          disabled={!canUndo}
        >
          <UndoIcon nativeColor="rgba(255, 255, 255, 0.3)" />
        </IconButton>
        <IconButton
          title="Redo"
          aria-label="Redo"
          onClick={() => onRedo()}
          disabled={!canRedo}
        >
          <RedoIcon nativeColor="rgba(255, 255, 255, 0.3)" />
        </IconButton>
      </React.Fragment>
    );
  }
}

UndoRedo.propTypes = {
  onRedo: PropTypes.func.isRequired,
  canRedo: PropTypes.bool.isRequired,
  onUndo: PropTypes.func.isRequired,
  canUndo: PropTypes.bool.isRequired,
};

export default UndoRedo;
