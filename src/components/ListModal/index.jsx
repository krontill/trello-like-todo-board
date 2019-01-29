import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import AddBox from '@material-ui/icons/AddBox';
import IconButton from '@material-ui/core/IconButton';
import ModalTitle from '../ModalTitle';
import FieldButton from '../FieldButton';
import { StyledPaper, StyledFieldTitle } from './styles';

class ListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, title: '' };
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false, title: '' });
  }

  handleChange(e) {
    this.setState({ title: e.currentTarget.value });
  }

  render() {
    const { action } = this.props;
    const { open, title } = this.state;

    const icon = (
      <IconButton
        title="Add list cards"
        aria-label="Add list cards"
        onClick={() => this.handleOpen()}
      >
        <AddBox nativeColor="rgba(255, 255, 255, 0.3)" />
      </IconButton>
    );

    const btn = title && title.trim() && (
      <FieldButton
        btnText="Add list"
        handleClick={() => {
          action(title.trim());
          this.handleClose();
        }}
      />
    );

    return (
      <div>
        {icon}
        <Modal
          aria-labelledby="modal-title-list"
          open={open}
          onClose={() => this.handleClose()}
        >
          <StyledPaper>
            <ModalTitle titleModal="Enter list title" />
            <StyledFieldTitle
              title={title}
              handleChange={e => this.handleChange(e)}
            />
            {btn}
          </StyledPaper>
        </Modal>
      </div>
    );
  }
}

ListModal.propTypes = {
  action: PropTypes.func.isRequired,
};

export default ListModal;
