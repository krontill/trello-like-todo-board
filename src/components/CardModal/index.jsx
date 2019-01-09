import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  textField: {
    display: 'flex',
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
  formControl: {
    display: 'flex',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
  },
});

class CardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', text: '', priority: '', dueDate: '' };
  }

  handleChange(name, event) {
    this.setState({
      [name]: event.target.value,
    });
  }

  handleChangeSelect(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
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
    const { title, text, priority, dueDate } = this.state;

    const titleModalHtml = (
      <Typography variant="h5" id="modal-title">
        {titleModal}
      </Typography>
    );

    const titleField = (
      <TextField
        required
        id="title"
        label="Required title"
        className={classes.textField}
        value={title}
        onChange={e => this.handleChange('title', e)}
      />
    );

    const textField = (
      <TextField
        multiline
        id="text"
        label="Text"
        className={classes.textField}
        value={text}
        onChange={e => this.handleChange('text', e)}
      />
    );

    const priorityField = (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="priority">Priority</InputLabel>
        <Select
          value={priority}
          onChange={event => this.handleChangeSelect(event)}
          inputProps={{
            name: 'priority',
            id: 'priority',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="height">Height</MenuItem>
        </Select>
      </FormControl>
    );

    const dueDateField = (
      <TextField
        id="dueDate"
        label="Due Date"
        type="date"
        defaultValue={dueDate}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={e => this.handleChange('dueDate', e)}
      />
    );

    const btn = title && title.trim() && (
      <Button
        variant="contained"
        onClick={() => {
          handleAddCard({
            listId,
            title: title.trim(),
            text,
            priority,
            dueDate,
            labels: null,
          });
          handleHideModal();
        }}
      >
        {btnText}
      </Button>
    );

    return (
      <div>
        <Modal
          open
          aria-labelledby="modal-title"
          onClose={() => handleHideModal()}
        >
          <div className={classes.paper}>
            {titleModalHtml}
            {titleField}
            {textField}
            {priorityField}
            {dueDateField}
            {btn}
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
