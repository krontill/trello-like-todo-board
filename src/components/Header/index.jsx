import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import AddListModal from '../AddListModal';
import SettingBg from '../SettingBg';
import Undo from '../Undo';
import Redo from '../Redo';

const styles = () => ({
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

const Header = props => {
  const { classes } = props;
  return (
    <header className={classes.header}>
      <div className="search">search</div>
      <Logo />
      <div className={classes.toolBar}>
        <Undo />
        <Redo />
        <SettingBg />
        <AddListModal />
      </div>
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Header);
