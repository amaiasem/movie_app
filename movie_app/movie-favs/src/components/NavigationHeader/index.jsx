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
      <div>
        <button type="button">Movies</button>
        <button type="button">TV SHows</button>
        <Link className="favourites--go" to="/my-favourites">My Favourites</Link>
      </div>
    </nav>
  );
}

export default NavigationHeader;
