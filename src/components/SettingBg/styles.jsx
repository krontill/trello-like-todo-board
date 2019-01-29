import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { styled } from '@material-ui/styles';
import {
  BLUE,
  YELLOW,
  GREEN,
  ORANGE,
  RED,
  PURPLE,
} from '../../constants/colors';
import mount from './mount.jpeg';
import sea from './sea.jpeg';

const styledBy = (property, mapping) => props => mapping[props[property]];

const addForImageProp = property => ({
  mount: property,
  sea: property,
});

const StyledMenuItem = styled(({ background, ...other }) => (
  <MenuItem {...other} />
))({
  textShadow: '0 0 2px white',
  background: styledBy('background', {
    blue: `${BLUE}`,
    yellow: `${YELLOW}`,
    green: `${GREEN}`,
    orange: `${ORANGE}`,
    red: `${RED}`,
    purple: `${PURPLE}`,
    mount: `url("${mount}") no-repeat`,
    sea: `url("${sea}") no-repeat`,
  }),
  backgroundSize: styledBy('background', addForImageProp('cover')),
  minWidth: styledBy('background', addForImageProp('100px')),
  width: styledBy('background', addForImageProp('100%')),
  height: styledBy('background', addForImageProp('75px')),
});

export default StyledMenuItem;
