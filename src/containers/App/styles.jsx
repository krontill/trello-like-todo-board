import React from 'react';
import { styled } from '@material-ui/styles';
import {
  BLUE,
  YELLOW,
  GREEN,
  ORANGE,
  RED,
  PURPLE,
} from '../../constants/colors';
import mount from './mount.jpg';
import sea from './sea.jpg';

const styledBy = (property, mapping) => props => mapping[props[property]];

const addForImageProp = property => ({
  mount: property,
  sea: property,
});

export const StyledApp = styled(({ background, ...other }) => (
  <div {...other} />
))({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  color: '#17394d',
  background: styledBy('background', {
    blue: `${BLUE}`,
    yellow: `${YELLOW}`,
    green: `${GREEN}`,
    orange: `${ORANGE}`,
    red: `${RED}`,
    purple: `${PURPLE}`,
    mount: `url("${mount}") no-repeat center center`,
    sea: `url("${sea}") no-repeat center center`,
  }),
  backgroundSize: styledBy('background', addForImageProp('cover')),
});

export const StyledHeader = styled(({ ...other }) => <header {...other} />)({
  background: 'rgba(0, 0, 0, .35)',
  height: '48px',
  display: 'flex',
  justifyContent: 'space-between',
});

export const StyledToolBar = styled(({ ...other }) => <div {...other} />)({
  display: 'flex',
});
