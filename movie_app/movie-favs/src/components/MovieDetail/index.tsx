import React from 'react'
import { connect } from 'react-redux'
import posterSize from '../../constants/posterURL'
import NavigationHeader from '../NavigationHeader'
import { addFavourites } from '../../redux/actions/movieActionCreators'
import Location from './../../Interfaces/locationInterface'
import Movie from './../../Interfaces/movieInterface'
import { AppDispatch } from './../../redux/stores/configureStore'

import './index.scss'

const MovieDetail = ({ dispatch, location }:{dispatch: AppDispatch, location: Location}) => {
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
              onClick={() => dispatch(addFavourites(movie))}
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

function mapStateToProps ({ favourites }: {favourites: Movie[]}) {
  return {
    favourites
  }
}

export default connect(mapStateToProps)(MovieDetail)
