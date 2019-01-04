import React from 'react';
import './header.css';
import Logo from '../Logo';
import AddListModal from '../AddListModal';

const Header = () => (
  <header className="header">
    <div className="search">search</div>
    <Logo />
    <div className="btn">
      <AddListModal />
    </div>
  </header>
);

export default Header;
