import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core';
import Select from 'react-select';
import classNames from 'classnames';
import uuidv4 from 'uuid/v4';
import ModalTitle from '../ModalTitle';
import FieldTitle from '../FieldTitle';
import FieldText from '../FieldText';
import FieldPriority from '../FieldPriority';
import FieldDueDate from '../FieldDueDate';
import FieldButton from '../FieldButton';
import createLablesOptions from '../../utils/createLablesOptions';
import { LABELS } from '../../constants/colors';

const styles = theme => ({
  textField: {
    display: 'flex',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing.unit * 1.5,
      marginBottom: theme.spacing.unit * 3,
    },
  },
  selectField: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing.unit * 1.5,
      marginBottom: theme.spacing.unit * 3,
    },
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
    minWidth: '310px',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit * 3,
    },
  },
  formControl: {
    display: 'flex',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing.unit * 1.5,
      marginBottom: theme.spacing.unit * 3,
    },
  },
  selectIcon: {
    marginLeft: '10px',
    verticalAlign: 'bottom',
  },
  btn: {
    marginRight: '16px',
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
      cardLabels: (props.card && props.card.labels) || null,
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

  handleChangeSelectLabels(selectLabels) {
    this.setState({
      cardLabels: selectLabels.map(label => label.value),
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
    const { title, text, priority, dueDate, cardLabels } = this.state;

    const btn = title && title.trim() && (
      <FieldButton
        btnText={btnText}
        classes={classes.btn}
        handleClick={() => {
          action({
            id: (card && card.id) || uuidv4(),
            listId,
            title: title.trim(),
            text,
            priority,
            dueDate,
            labels: cardLabels,
          });
          handleHideModal();
        }}
      />
    );

    const btnDelete = card && card.id && (
      <FieldButton
        btnText="Delete card"
        handleClick={() => {
          handleDeleteCard(listId, card.id);
          handleHideModal();
        }}
      />
    );

    const options = createLablesOptions(LABELS);
    const selectOptions = cardLabels && createLablesOptions(cardLabels);

    const classSelect = classNames({
      [classes.selectField]: true,
      'basic-multi-select': true,
    });

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
              classes={classes.textField}
              handleChange={e => this.handleChange('dueDate', e)}
            />
            <Select
              className={classSelect}
              options={options}
              placeholder="Select labels..."
              isMulti
              defaultValue={selectOptions}
              onChange={selectLabels =>
                this.handleChangeSelectLabels(selectLabels)
              }
              isClearable
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
  handleDeleteCard: null,
};

CardModal.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  action: PropTypes.func.isRequired,
  handleDeleteCard: PropTypes.func,
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
    labels: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default withStyles(styles)(CardModal);
