import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="grid">
        <nav className="header__navbar">
          <a href="#" className="header__navbar-logo">
            <img src="assets/images/logo.png" alt="" className="header__navbar-logo-img"/>
            <span className="header__navbar-logo-company">TRENDALL</span>
          </a>
          <ul className="header__navbar-list">
            <li className="header__navbar-item header__navbar-item--disabled">
              <a href="#" className="header__navbar-link header__navbar-link--primary">HOME</a>
            </li>
            <li className="header__navbar-item">
              <a href="#article" className="header__navbar-link">ARTICLE</a>
            </li>
            <li className="header__navbar-item">
              <a href="#exhibition" className="header__navbar-link">GALLERY</a>
            </li>
            <li className="header__navbar-item">
              <a href="#search" className="header__navbar-link">SEARCH</a>
            </li>
            <li className="header__navbar-item">
              <a href="#aboutus" className="header__navbar-link">ABOUT US</a>
            </li>
            <li className="header__navbar-item">
              <button className="header__navbar-link link-sign-in">SIGN IN</button>
            </li>
            <li className="header__navbar-item">
              <i className="header__navbar-menu fas fa-bars"></i> 
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
