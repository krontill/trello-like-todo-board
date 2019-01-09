import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

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

class CardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  handleChange(e) {
    this.setState({ title: e.currentTarget.value });
  }

  render() {
    const {
      classes,
      handleAddCard,
      titleModal,
      btnText,
      handleHideModal,
      listId,
    } = this.props;
    const { title } = this.state;
    return (
      <div>
        <Modal
          open
          aria-labelledby="modal-title"
          onClose={() => handleHideModal()}
        >
          <div className={classes.paper}>
            <Typography variant="h5" id="modal-title">
              {titleModal}
            </Typography>
            <TextField
              required
              id="title"
              label="Required title"
              className={classes.textField}
              value={title}
              onChange={e => this.handleChange(e)}
            />
            {title && title.trim() && (
              <Button
                variant="contained"
                onClick={() => {
                  handleAddCard({
                    listId,
                    title: title.trim(),
                    text: 'text',
                    priority: 'height',
                    dueDate: null,
                    labels: null,
                  });
                  handleHideModal();
                }}
              >
                {btnText}
              </Button>
            )}
          </div>
        </Modal>
      </div>
    );
  }
}

CardModal.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  handleAddCard: PropTypes.func.isRequired,
  handleHideModal: PropTypes.func.isRequired,
  titleModal: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  listId: PropTypes.string.isRequired,
};

export default withStyles(styles)(CardModal);
