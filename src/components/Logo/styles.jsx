import { styled } from '@material-ui/styles';
import React from 'react';

const StyledImgLogo = styled(({ ...props }) => <img {...props} alt="logo" />)({
  width: '80px',
  height: '30px',
  opacity: '.5',
  marginTop: '8px',
  transition: 'opacity .1s ease',
  '&:hover, &:focus': {
    opacity: '.8',
  },
});

export default StyledImgLogo;
