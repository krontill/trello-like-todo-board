import React from 'react';
import './app.css';
import Header from '../Header';
import Content from '../Content';
import ModalRoot from '../ModalRoot';

const App = () => (
  <div className="app">
    <Header />
    <Content />
    <ModalRoot />
  </div>
);

export default App;
