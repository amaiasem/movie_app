import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  loadFavourites,
  deleteFavourites,
  updateFavourites,
  filterFavourites
} from '../../redux/actions/movieActionCreators'
import posterSize from '../../constants/posterURL'
import NavigationHeader from '../NavigationHeader'
import Movie from './../../Interfaces/movieInterface'
import { AppDispatch } from './../../redux/stores/configureStore'
import './index.scss'

function MyFavourites ({ dispatch, favourites }: {dispatch: AppDispatch, favourites: Movie[]}) {
  useEffect(() => {
    dispatch(loadFavourites())
  }, [])

  return (
    <div className="my-favourites__container">
      <NavigationHeader />
      <h2>My Favourite Movies</h2>
      <div className="favourites__filter">
        <button
          type="button"
          onClick={() => dispatch(loadFavourites())}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => dispatch(filterFavourites(false))}
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
                        onClick={() => dispatch(deleteFavourites(movie.id))}
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
                              onClick={() => dispatch(updateFavourites(movie.id, movie.watched))}
                            >
                              Pending
                            </button>
                          </li>
                          )
                        : (
                          <li>
                            <button
                              type="button"
                              onClick={() => dispatch(updateFavourites(movie.id, movie.watched))}
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

function mapStateToProps ({ movies: { favourites } }: any) {
  return {
    favourites
  }
}

export default connect(mapStateToProps)(MyFavourites)
