import React from 'react';
import { Link } from 'react-router-dom';

function HeaderNav() {
  return (
    <div className="header_container">
      <h2 className="logo">Math Magicians</h2>

      <nav className="nav_items">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav_link">Home</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/calculator" className="nav_link">Calculator</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/quote" className="nav_link">Quote</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderNav;
