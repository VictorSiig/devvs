import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <nav className="navigation">
      <ul className="nav-list">
      {navItems.map((item, index) => (
          <li
            key={index}
            className={activeItem === index ? 'active' : ''}
            onClick={() => handleItemClick(index)}
          >
            <Link to={`/${item === 'home' ? '' : item}`}>{item}</Link>
          </li>
        ))}
        <div className="active-bar"></div>
      </ul>
    </nav>
  );
}

export default Navbar;
