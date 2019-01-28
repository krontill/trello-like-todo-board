import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalRoot from '../ModalRoot';
import Logo from '../../components/Logo';
import SettingBg from '../../components/SettingBg';
import ListModal from '../../components/ListModal';
import ContentApp from '../ContentApp';
import UndoRedo from '../../components/UndoRedo';
import Container from './container';
import styles from './styles';

const App = props => {
  const {
    classes,
    setting,
    handleAddList,
    handleChangeBg,
    onUndo,
    onRedo,
    canUndo,
    canRedo,
  } = props;

  const classApp = classNames(classes.app, {
    [classes[`app--${setting.bg}`]]: true,
  });

  return (
    <div className={classApp}>
      <header className={classes.header}>
        <div className="search" />
        <Logo />
        <div className={classes.toolBar}>
          <UndoRedo
            onUndo={onUndo}
            canUndo={canUndo}
            onRedo={onRedo}
            canRedo={canRedo}
          />
          <SettingBg handleChangeBg={handleChangeBg} />
          <ListModal action={handleAddList} />
        </div>
      </header>
      <ContentApp />
      <ModalRoot />
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  setting: PropTypes.objectOf(PropTypes.string).isRequired,
  handleAddList: PropTypes.func.isRequired,
  handleChangeBg: PropTypes.func.isRequired,
  onUndo: PropTypes.func.isRequired,
  onRedo: PropTypes.func.isRequired,
  canUndo: PropTypes.bool.isRequired,
  canRedo: PropTypes.bool.isRequired,
};

export default Container(withStyles(styles)(App));
