import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import UndoIcon from '@material-ui/icons/Undo';
import { undo } from '../../actions/setting';

const Undo = props => {
  const { handleUndo } = props;
  return (
    <div>
      <IconButton aria-label="Undo" onClick={() => handleUndo()}>
        <UndoIcon nativeColor="rgba(255, 255, 255, 0.3)" />
      </IconButton>
    </div>
  );
};

Undo.propTypes = {
  handleUndo: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleUndo: () => dispatch(undo()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Undo);
