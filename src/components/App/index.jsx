import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Header from '../Header';
import Content from '../Content';
import ModalRoot from '../ModalRoot';
import {
  BLUE,
  YELLOW,
  GREEN,
  ORANGE,
  RED,
  PURPLE,
} from '../../constants/colors';

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
});

const App = props => {
  const { classes, setting } = props;
  return (
    <div
      className={classNames(classes.app, {
        [classes[`app--${setting.bg}`]]: true,
      })}
    >
      <Header />
      <Content />
      <ModalRoot />
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  setting: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateFromProps = setting => setting;

export default connect(mapStateFromProps)(withStyles(styles)(App));
