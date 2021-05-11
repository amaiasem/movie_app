import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import loadMovies from '../../redux/actions/movieActionCreators'
import posterSize from '../../constants/posterURL'
import NavigationHeader from '../NavigationHeader'
import Movie from './../../Interfaces/movieInterface'
import './index.scss'

function MovieList ({ dispatch, movies }: {dispatch: any, movies: Movie[]}) {
  useEffect(() => {
    dispatch(loadMovies())
  }, [])

  return (
    <div className="movies__container">
      <NavigationHeader />
      <h2>Trending this week</h2>
      <div className="container__list">
        {
        movies && movies.map((movie: Movie) => (
          <Link
            key={movie.id}
            to={{
              pathname: '/movie-detail',
              state: movie
            }}
            className="movie__card"
          >
            <img src={`${posterSize.small}${movie.poster_path}`} alt={`Poster from ${movie.title}`} />
            <div className="movie__info">
              {
                movie.title
                  ? <p className="movie__tile">{movie.title}</p>
                  : <p className="movie__tile">{movie.name}</p>

              }
              <div className="movie__details">
                <p>{movie.release_date}</p>
                <div>
                  <p>{movie.vote_average}</p>
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
          </Link>
        ))
      }
      </div>
    </div>
  )
}

function mapStateToProps ({ movies: { allMovies } }: any) {
  return {
    movies: allMovies
  }
}

export default connect(mapStateToProps)(MovieList)
