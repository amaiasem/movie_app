import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../constants/logo';
import './index.scss';

function NavigationHeader() {
  return (
    <nav>
      <Link className="home--go" to="/">
        <img src={logo} alt="Logo TMDB" />
      </Link>
      <Link className="favourites--go" to="/my-favourites">My Favourites</Link>
    </nav>
  );
}

export default NavigationHeader;
