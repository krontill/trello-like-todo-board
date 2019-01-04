import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddBox from '@material-ui/icons/AddBox';
import IconButton from '@material-ui/core/IconButton';
import { addList } from '../../actions/list';

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

class AddListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, title: null };
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false, title: null });
  }

  handleChange(e) {
    this.setState({ title: e.currentTarget.value });
  }

  render() {
    const { classes, handleAddList } = this.props;
    const { open, title } = this.state;
    return (
      <div>
        <IconButton
          aria-label="Add list cards"
          onClick={() => this.handleOpen()}
        >
          <AddBox nativeColor="rgba(255, 255, 255, 0.3)" />
        </IconButton>
        <Modal
          aria-labelledby="modal-title"
          open={open}
          onClose={() => this.handleClose()}
        >
          <div className={classes.paper}>
            <Typography variant="h5" id="modal-title">
              Enter list title
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
                  handleAddList(title.trim());
                  this.handleClose();
                }}
              >
                Add list
              </Button>
            )}
          </div>
        </Modal>
      </div>
    );
  }
}

AddListModal.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  handleAddList: PropTypes.func.isRequired,
};

const mapStateToProps = ({ list }) => ({ list });

const mapDispatchToProps = dispatch => ({
  handleAddList: list => dispatch(addList(list)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AddListModal));
