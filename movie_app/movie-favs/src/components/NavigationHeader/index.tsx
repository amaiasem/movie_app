import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../constants/logo'
import './index.scss'

function NavigationHeader () {
  return (
    <nav>
      <Link className="logo" to="/">
        <img src={logo} alt="Logo TMDB" />
      </Link>
      <div>
        <Link className="navigate" to="/my-favourites">My Favourites</Link>
        <Link className="navigate home" to="/">
          <i className="fas fa-home" />
        </Link>
      </div>
    </nav>
  )
}

export default NavigationHeader
