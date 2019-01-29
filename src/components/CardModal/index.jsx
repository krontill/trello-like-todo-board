import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import uuidv4 from 'uuid/v4';
import ModalTitle from '../ModalTitle';
import FieldTitle from '../FieldTitle';
import FieldText from '../FieldText';
import FieldPriority from '../FieldPriority';
import FieldDueDate from '../FieldDueDate';
import FieldButton from '../FieldButton';
import createLablesOptions from '../../utils/createLablesOptions';
import { LABELS } from '../../constants/colors';
import { StyledSelect, StyledPaper } from './styles';

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
        margin="right"
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

    return (
      <div>
        <Modal
          open
          aria-labelledby="modal-title"
          onClose={() => handleHideModal()}
        >
          <StyledPaper>
            <ModalTitle titleModal={titleModal} />
            <FieldTitle
              title={title}
              handleChange={e => this.handleChange('title', e)}
            />
            <FieldText
              text={text}
              handleChange={e => this.handleChange('text', e)}
            />
            <FieldPriority
              selectedPriority={priority}
              handleChange={e => this.handleChangeSelect(e)}
            />
            <FieldDueDate
              dueDate={dueDate}
              handleChange={e => this.handleChange('dueDate', e)}
            />
            <StyledSelect
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
          </StyledPaper>
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

export default CardModal;
