import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import ModalRoot from '../ModalRoot';
import {
  BLUE,
  YELLOW,
  GREEN,
  ORANGE,
  RED,
  PURPLE,
} from '../../constants/colors';
import sea from './sea.jpg';
import mount from './mount.jpg';
import { addList, deleteList, editList } from '../../actions/list';
import { changeBg, redo, undo } from '../../actions/setting';
import Logo from '../../components/Logo';
import Undo from '../../components/Undo';
import Redo from '../../components/Redo';
import SettingBg from '../../components/SettingBg';
import ListModal from '../../components/ListModal';
import { showModal } from '../../actions/modal';
import ListCards from '../../components/ListCards';

const styles = () => ({
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    color: '#17394d',
  },
  'app--blue': {
    background: BLUE,
  },
  'app--yellow': {
    background: YELLOW,
  },
  'app--green': {
    background: GREEN,
  },
  'app--orange': {
    background: ORANGE,
  },
  'app--red': {
    background: RED,
  },
  'app--purple': {
    background: PURPLE,
  },
  'app--mount': {
    background: `url("${mount}") no-repeat center center`,
    backgroundSize: 'cover',
  },
  'app--sea': {
    background: `url("${sea}") no-repeat center center`,
    backgroundSize: 'cover',
  },
  header: {
    background: 'rgba(0, 0, 0, .35)',
    height: '48px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  toolBar: {
    display: 'flex',
  },
  content: {
    flex: '1 0 100%',
    padding: '4px',
    display: 'flex',
    alignItems: 'flex-start',
    overflowX: 'auto',
  },
});

const App = props => {
  const {
    classes,
    setting,
    handleAddList,
    handleChangeBg,
    handleUndo,
    handleRedo,
    lists,
    handleEditList,
    handleShowModal,
    handleDeleteList,
    labels,
  } = props;

  const classApp = classNames(classes.app, {
    [classes[`app--${setting.bg}`]]: true,
  });

  const listsTemplate = lists.map(list => (
    <ListCards
      list={list}
      key={list.id}
      handleEditList={handleEditList}
      handleShowModal={handleShowModal}
      handleDeleteList={handleDeleteList}
    />
  ));

  return (
    <div className={classApp}>
      <header className={classes.header}>
        <div className="search">search</div>
        <Logo />
        <div className={classes.toolBar}>
          <Undo handleUndo={handleUndo} />
          <Redo handleRedo={handleRedo} />
          <SettingBg labels={labels} handleChangeBg={handleChangeBg} />
          <ListModal action={handleAddList} />
        </div>
      </header>
      <div className={classes.content}>{listsTemplate}</div>
      <ModalRoot />
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  setting: PropTypes.objectOf(PropTypes.string).isRequired,
  handleAddList: PropTypes.func.isRequired,
  handleChangeBg: PropTypes.func.isRequired,
  handleUndo: PropTypes.func.isRequired,
  handleRedo: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleEditList: PropTypes.func.isRequired,
  handleShowModal: PropTypes.func.isRequired,
  handleDeleteList: PropTypes.func.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateFromProps = ({ setting, lists, labels }) => ({
  setting,
  lists,
  labels,
});

const mapDispatchToProps = dispatch => ({
  handleAddList: list => dispatch(addList(list)),
  handleChangeBg: bg => dispatch(changeBg(bg)),
  handleUndo: () => dispatch(undo()),
  handleRedo: () => dispatch(redo()),
  handleEditList: (id, newTitle) => dispatch(editList(id, newTitle)),
  handleShowModal: (modalType, modalProps) =>
    dispatch(showModal(modalType, modalProps)),
  handleDeleteList: listId => dispatch(deleteList(listId)),
});

export default connect(
  mapStateFromProps,
  mapDispatchToProps
)(withStyles(styles)(App));
