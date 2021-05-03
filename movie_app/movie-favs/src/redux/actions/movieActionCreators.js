import axios from 'axios'
import movieActionTypes from './movieActionTypes'

export default function loadAllmovies () {
  return async (dispatch) => {
    const { data } = await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=844530321d34296cc96d5c1af2b8648a')
    dispatch({
      type: movieActionTypes.LOAD_ALL_MOVIES,
      data
    })
  }
}

export function loadFavourites () {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:3000/favourites')
    dispatch({
      type: movieActionTypes.LOAD_ALL_FAVOURITES,
      data
    })
  }
}

export function addFavourites (movie) {
  const favouriteMovie = { ...movie, watched: false }
  return async (dispatch) => {
    const { data } = await axios.post('http://localhost:3000/favourites', favouriteMovie)
    dispatch({
      type: movieActionTypes.ADD_FAVOURITES,
      data
    })
  }
}

export function deleteFavourites (movieID) {
  return async (dispatch) => {
    await axios.delete(`http://localhost:3000/favourites/${movieID}`)
    dispatch({
      type: movieActionTypes.DELETE_FAVOURITES,
      data: movieID
    })
  }
}

export function updateFavourites (movieID, watched) {
  const updateMovie = { watched: !watched }
  return async (dispatch) => {
    const { data } = await axios.patch(`http://localhost:3000/favourites/${movieID}`, updateMovie)

    dispatch({
      type: movieActionTypes.UPDATE_FAVOURITES,
      data
    })
  }
}

export function filterFavourites (watched) {
  return {
    type: movieActionTypes.FILTER_FAVOURITES,
    data: watched
  }
}
