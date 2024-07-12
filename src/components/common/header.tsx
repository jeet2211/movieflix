import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp'
import '../../assets/header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="MoveFlix Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
