import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import Logout from '../components/Logout';

const Header = () => {
  const { isAuthenticated } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Wizestore</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/cart">Shopping Cart</Link>
            </li>
            <li className="nav-item ms-5">
              {
                !isAuthenticated ?
                  <Link className="btn btn-dark" to="/login">Sign In</Link>
                :
                  <Logout />
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header
