import React from 'react';
import StyledImgLogo from './styles';
import logoSvg from './logo.svg';

const Logo = () => (
  <a href="/">
    <StyledImgLogo src={logoSvg} />
  </a>
);

export default Logo;
