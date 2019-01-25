import { connect } from 'react-redux';
import { addCard } from '../../actions/card';
import { hideModal } from '../../actions/modal';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleAddCard: card => dispatch(addCard(card)),
  handleHideModal: () => dispatch(hideModal()),
});

export default componentName =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(componentName);
