import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import logoSvg from './logo.svg';

const style = () => ({
  logo: {
    width: '80px',
    height: '30px',
    opacity: '.5',
    marginTop: '8px',
    transition: 'opacity .1s ease',
    '&:hover, &:focus': {
      opacity: '.8',
    },
  },
});

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

export default withStyles(style)(Logo);
