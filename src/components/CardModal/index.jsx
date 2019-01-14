import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core';
import ModalTitle from '../ModalTitle';
import FieldTitle from '../FieldTitle';
import FieldText from '../FieldText';
import FieldPriority from '../FieldPriority';
import FieldDueDate from '../FieldDueDate';
import FieldButton from '../FieldButton';

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
      handleDeleteCard,
    } = this.props;
    const { title, text, priority, dueDate } = this.state;

    const btn = title && title.trim() && (
      <FieldButton
        btnText={btnText}
        handleClick={() => {
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
      />
    );

    const btnDelete = card && card.id && (
      <FieldButton
        btnText="Delete card"
        handleClick={() => {
          handleDeleteCard({
            listId,
            id: card.id,
          });
          handleHideModal();
        }}
      />
    );

    return (
      <div>
        <Modal
          open
          aria-labelledby="modal-title"
          onClose={() => handleHideModal()}
        >
          <div className={classes.paper}>
            <ModalTitle titleModal={titleModal} />
            <FieldTitle
              title={title}
              classes={classes}
              handleChange={e => this.handleChange('title', e)}
            />
            <FieldText
              text={text}
              classes={classes}
              handleChange={e => this.handleChange('text', e)}
            />
            <FieldPriority
              priority={priority}
              classes={classes}
              handleChange={e => this.handleChangeSelect(e)}
            />
            <FieldDueDate
              dueDate={dueDate}
              classes={classes}
              handleChange={e => this.handleChange('dueDate', e)}
            />
            {btn}
            {btnDelete}
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
  handleDeleteCard: PropTypes.func.isRequired,
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
