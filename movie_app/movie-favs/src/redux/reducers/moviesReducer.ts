import movieActionTypes from '../actions/movieActionTypes'
import Movie from './../../Interfaces/movieInterface'
import { AnyAction } from 'redux'
import initialState from './../stores/initialState'

export interface movieState {
  allMovies: Movie[],
  favourites: Movie[],
  filteredMovies: Movie[]
}

export default function moviesReducer (state = initialState.movies, action: AnyAction): movieState {
  switch (action.type) {
    case movieActionTypes.LOAD_ALL_MOVIES:
      return { ...state, allMovies: action.data }
    case movieActionTypes.LOAD_ALL_FAVOURITES:
      return { ...state, favourites: action.data }
    case movieActionTypes.ADD_FAVOURITES:
      return { ...state, favourites: [...state.favourites, action.data] }
    case movieActionTypes.DELETE_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter((movie: Movie) => movie.id !== action.data)
      }
    case movieActionTypes.UPDATE_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.map((movie: Movie) => ((movie.id === action.data.id) ? action.data : movie))
      }
    case movieActionTypes.FILTER_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter((movie: Movie) => (movie.watched === action.data))
      }
    default:
      return state
  }
}
