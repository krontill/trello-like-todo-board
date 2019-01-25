import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
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
import Logo from '../../components/Logo';
import SettingBg from '../../components/SettingBg';
import ListModal from '../../components/ListModal';
import Content from '../Content';
import UndoRedo from '../../components/UndoRedo';
import Container from './container';

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
});

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
      <Content />
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
