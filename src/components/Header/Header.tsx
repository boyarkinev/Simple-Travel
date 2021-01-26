import './Header.css';
import logo from '../../images/logo3.svg';

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header root__section">
      <img src={logo} alt="Logo" className="logo"/>
    </header>
  );
};

export default Header;