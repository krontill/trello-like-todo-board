import React from 'react';
import Typography from '@material-ui/core/Typography';

interface ModalTitleProps {
  titleModal: string;
}

const ModalTitle = (props:  ModalTitleProps) => {
  const { titleModal } = props;
  return (
    <Typography variant="h5" id="modal-title">
      {titleModal}
    </Typography>
  );
};

export default ModalTitle;
