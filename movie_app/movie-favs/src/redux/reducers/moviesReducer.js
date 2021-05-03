/* eslint-disable max-len */
import movieActionTypes from '../actions/movieActionTypes'

export default function moviesReducer (state = {}, action) {
  switch (action.type) {
    case movieActionTypes.LOAD_ALL_MOVIES:
      return { ...state, allMovies: action.data.results }
    case movieActionTypes.LOAD_ALL_FAVOURITES:
      return { ...state, favourites: action.data }
    case movieActionTypes.ADD_FAVOURITES:
      return { ...state, favourites: [...state.favourites, action.data] }
    case movieActionTypes.DELETE_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter((movie) => movie.id !== action.data)
      }
    case movieActionTypes.UPDATE_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.map((movie) => ((movie.id === action.data.id) ? action.data : movie))
      }
    case movieActionTypes.FILTER_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter((movie) => (movie.watched === action.data))
      }
    default:
      return state
  }
}
