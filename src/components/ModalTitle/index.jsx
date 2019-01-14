import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const ModalTitle = props => {
  const { titleModal } = props;
  return (
    <Typography variant="h5" id="modal-title">
      {titleModal}
    </Typography>
  );
};

ModalTitle.propTypes = {
  titleModal: PropTypes.string.isRequired,
};

export default ModalTitle;
