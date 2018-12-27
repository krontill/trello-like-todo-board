import React from 'react';
import './header.css';
import Logo from '../Logo/Logo';

const header = () => (
  <header className="header">
    <div className="search">search</div>
    <Logo />
    <div className="btn">btn</div>
  </header>
);

export default header;
