import React from 'react';
import './style.css';
import Logo from '../Logo';
import AddListModal from '../AddListModal';
import SettingBg from '../SettingBg';

const Header = () => (
  <header className="header">
    <div className="search">search</div>
    <Logo />
    <div className="btn">
      <SettingBg />
      <AddListModal />
    </div>
  </header>
);

export default Header;
