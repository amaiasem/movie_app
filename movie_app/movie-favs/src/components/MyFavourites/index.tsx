import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import {
  loadFavourites,
  deleteFavourites,
  updateFavourites,
  filterFavourites
} from '../../redux/actions/movieActionCreators'
import posterSize from '../../constants/posterURL'
import NavigationHeader from '../NavigationHeader'
import State from './../../Interfaces/stateInterface'
import Movie from './../../Interfaces/movieInterface'
import './index.scss'

function MyFavourites ({ favourites, action }: {favourites: Movie[], action: any}) {
  useEffect(() => {
    action.loadFavourites()
  }, [])

  return (
    <div className="my-favourites__container">
      <NavigationHeader />
      <h2>My Favourite Movies</h2>
      <div className="favourites__filter">
        <button
          type="button"
          onClick={() => action.loadFavourites()}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => action.filterFavourites(false)}
        >
          Pending

        </button>
      </div>
      <div className="favourites__list">
        {
            favourites && favourites.map((movie) => (
              <div key={movie.id} className="movie__card">
                <div>
                  {
                  movie.title
                    ? <h4>{movie.title}</h4>
                    : <h4>{movie.name}</h4>

                }
                  <button
                    className="movie__menu"
                    type="button"
                  >
                    <i className="fas fa-ellipsis-v" />
                  </button>
                  <ul className="movie__dropdown">
                    <li>
                      <button
                        type="button"
                        onClick={() => action.deleteFavourites(movie.id)}
                      >
                        Delete
                      </button>
                    </li>
                    {
                      movie.watched
                        ? (
                          <li>
                            <button
                              type="button"
                              onClick={() => action.updateFavourites(movie.id, movie.watched)}
                            >
                              Pending
                            </button>
                          </li>
                          )
                        : (
                          <li>
                            <button
                              type="button"
                              onClick={() => action.updateFavourites(movie.id, movie.watched)}
                            >
                              Watched
                            </button>
                          </li>
                          )
                    }
                  </ul>
                </div>
                <Link to={{
                  pathname: '/movie-detail',
                  state: movie
                }}
                >
                  <img src={`${posterSize.small}${movie.poster_path}`} alt={`Poster from ${movie.title}`} />
                </Link>
                {
                  movie.watched
                    ? <p className="watched">Watched</p>
                    : <p className="pending">Pending</p>
                }
              </div>
            ))
        }
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
    action: bindActionCreators({
      loadFavourites,
      deleteFavourites,
      updateFavourites,
      filterFavourites
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDisptachToProps)(MyFavourites)
