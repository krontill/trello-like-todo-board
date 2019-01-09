import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import AddBox from '@material-ui/icons/AddBox';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  textField: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
  },
  paper: {
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -30%)',
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

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
    const { classes, action } = this.props;
    const { open, title } = this.state;

    const icon = (
      <IconButton aria-label="Add list cards" onClick={() => this.handleOpen()}>
        <AddBox nativeColor="rgba(255, 255, 255, 0.3)" />
      </IconButton>
    );

    const titleModal = (
      <Typography variant="h5" id="modal-title">
        Enter list title
      </Typography>
    );

    const titleField = (
      <TextField
        required
        id="title"
        label="Required title"
        className={classes.textField}
        value={title}
        onChange={e => this.handleChange(e)}
      />
    );

    const btn = title && title.trim() && (
      <Button
        variant="contained"
        onClick={() => {
          action(title.trim());
          this.handleClose();
        }}
      >
        Add list
      </Button>
    );

    return (
      <div>
        {icon}
        <Modal
          aria-labelledby="modal-title"
          open={open}
          onClose={() => this.handleClose()}
        >
          <div className={classes.paper}>
            {titleModal}
            {titleField}
            {btn}
          </div>
        </Modal>
      </div>
    );
  }
}

ListModal.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  action: PropTypes.func.isRequired,
};

export default withStyles(styles)(ListModal);
