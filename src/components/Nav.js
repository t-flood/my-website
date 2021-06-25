import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div>
        <ul className="nav">
          <li className="nav-item">
            <button type="button" className="btn btn-link">
              <Link to="/">Home</Link>
            </button>
            <button type="button" className="btn btn-link">
              <Link to="/about">About</Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
