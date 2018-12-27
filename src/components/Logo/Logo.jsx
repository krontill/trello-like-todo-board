import React from 'react';
import logoSvg from './logo.svg';
import './logo.css';

const logo = () => (
  <a href="/">
    <img className="logo" src={logoSvg} alt="logo" />
  </a>
);

export default logo;
