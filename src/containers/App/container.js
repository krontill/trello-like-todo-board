import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import { addList } from '../../actions/list';
import changeBg from '../../actions/setting';

const mapStateToProps = ({ setting, lists, selectedCard, cards }) => ({
  setting: setting.present,
  canUndo:
    setting.past.length > 0 ||
    lists.past.length > 0 ||
    selectedCard.past.length > 0 ||
    cards.past.length > 0,
  canRedo:
    setting.future.length > 0 ||
    lists.future.length > 0 ||
    selectedCard.future.length > 0 ||
    cards.future.length > 0,
});

const mapDispatchToProps = dispatch => ({
  handleAddList: list => dispatch(addList(list)),
  handleChangeBg: bg => dispatch(changeBg(bg)),
  onUndo: () => dispatch(UndoActionCreators.undo()),
  onRedo: () => dispatch(UndoActionCreators.redo()),
});

export default componentName =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(componentName);
