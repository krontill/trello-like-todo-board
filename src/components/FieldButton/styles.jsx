import React from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const styledBy = (property, mapping) => props => mapping[props[property]];

const StyledFieldButton = styled(({ background, ...other }) => (
  <Button {...other} />
))({
  marginRight: styledBy('margin', {
    "right": '16px',
  }),
});

export default StyledFieldButton;
