import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import posterSize from '../../constants/posterURL'
import NavigationHeader from '../NavigationHeader'
import { addFavourites } from '../../redux/actions/movieActionCreators'
import State from './../../Interfaces/stateInterface'
import Location from './../../Interfaces/locationInterface'

import './index.scss'

const MovieDetail = ({ location, action }:{location: Location, action: any}) => {
  const movie = location.state
  return (
    <div>
      <NavigationHeader />
      <div className="movie__container">
        <img src={`${posterSize.large}${movie.backdrop_path}`} alt={`Poster from ${movie.title}`} />
        <div className="movie-detail">
          <div className="movie__title">

            {
            movie.title
              ? <h1>{movie.title}</h1>
              : <h1>{movie.name}</h1>

          }
            <button
              className="favourites--add"
              type="button"
              onClick={() => action.addFavourites(movie)}
            >
              <i className="far fa-heart" />
            </button>
          </div>
          <div className="movie-info">
            <img src={`${posterSize.big}${movie.poster_path}`} alt={`Cover from ${movie.title}`} />
            <div className="movie__description">
              <h3 className="info__title">Overview</h3>
              <p className="info__description">{movie.overview}</p>
              <h3 className="info__title">Released</h3>
              <p className="info__description">{movie.release_date}</p>
              <h3 className="info__title">Media:</h3>
              <p className="info__description">{(movie.media_type).toUpperCase()}</p>
              <h3 className="info__title">Rate:</h3>
              <p className="info__description">{movie.vote_average}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps ({ movies }: {movies: State}) {
  return {
    favourites: movies.favourites
  }
}

function mapDisptachToProps (dispatch: any) {
  return {
    action: bindActionCreators({ addFavourites }, dispatch)
  }
}
export default connect(mapStateToProps, mapDisptachToProps)(MovieDetail)
