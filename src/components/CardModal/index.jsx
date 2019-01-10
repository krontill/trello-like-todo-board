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
import Title from '@material-ui/icons/Title';
import InputAdornment from '@material-ui/core/InputAdornment';
import Subject from '@material-ui/icons/Subject';
import AccessTime from '@material-ui/icons/AccessTime';
import PriorityHigh from '@material-ui/icons/PriorityHigh';
import LowPriority from '@material-ui/icons/LowPriority';

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
  selectIcon: {
    marginLeft: '10px',
    verticalAlign: 'bottom',
  },
});

class CardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: (props.card && props.card.title) || '',
      text: (props.card && props.card.text) || '',
      priority: (props.card && props.card.priority) || '',
      dueDate: (props.card && props.card.dueDate) || '',
    };
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
      action,
      titleModal,
      btnText,
      handleHideModal,
      listId,
      card,
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
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Title />
            </InputAdornment>
          ),
        }}
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
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Subject />
            </InputAdornment>
          ),
        }}
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
          <MenuItem value="low">
            Low
            <LowPriority className={classes.selectIcon} />
          </MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="height">
            Height
            <PriorityHigh color="error" className={classes.selectIcon} />
          </MenuItem>
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
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccessTime />
            </InputAdornment>
          ),
        }}
      />
    );

    const btn = title && title.trim() && (
      <Button
        variant="contained"
        onClick={() => {
          action({
            id: card && card.id,
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

CardModal.defaultProps = {
  card: null,
};

CardModal.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  action: PropTypes.func.isRequired,
  handleHideModal: PropTypes.func.isRequired,
  titleModal: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  listId: PropTypes.string.isRequired,
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    priority: PropTypes.string,
    dueDate: PropTypes.string,
    labels: PropTypes.objectOf(PropTypes.object),
  }),
};

export default withStyles(styles)(CardModal);
