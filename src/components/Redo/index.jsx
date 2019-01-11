import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import RedoIcon from '@material-ui/icons/Redo';
import { redo } from '../../actions/setting';

const Redo = props => {
  const { handleRedo } = props;
  return (
    <div>
      <IconButton aria-label="Redo" onClick={() => handleRedo()}>
        <RedoIcon nativeColor="rgba(255, 255, 255, 0.3)" />
      </IconButton>
    </div>
  );
};

Redo.propTypes = {
  handleRedo: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleRedo: () => dispatch(redo()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Redo);
