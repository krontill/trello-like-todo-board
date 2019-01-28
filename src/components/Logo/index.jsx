import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import logoSvg from './logo.svg';
import styles from './styles';

const Logo = props => {
  const { classes } = props;
  return (
    <a href="/">
      <img className={classes.logo} src={logoSvg} alt="logo" />
    </a>
  );
};

Logo.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Logo);
