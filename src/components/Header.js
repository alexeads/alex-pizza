import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const loc = useLocation().pathname;

  const titleMap = {
    '/': "Alex's Pizza",
    '/menu': 'Menu',
    '/order': 'Order',
    '/locations': 'Locations',
    '/contact': 'Contact Us',
    '/about': 'About Us',
  };

  const pageTitle = titleMap[loc] || '';

  // Only show nav on home page
  const showNav = loc === '/';

  return (
    <header className={loc === '/locations' ? 'locationsHeaderCustom' : ''}>
      <div className="header-content">
        <div className="left">
          <Link to="/" className="home-link">Home</Link>
        </div>
        <h1 className="page-title">{pageTitle}</h1>
        <div className="right"></div>
      </div>

      {showNav && (
        <nav>
          <ul>
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/menu">MENU</Link></li>
            <li><Link to="/order">ORDER</Link></li>
            <li><Link to="/locations">LOCATIONS</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}