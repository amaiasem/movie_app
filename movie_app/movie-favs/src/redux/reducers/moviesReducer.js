import movieActionTypes from '../actions/movieActionTypes';

export default function moviesReducer(state = {}, action) {
  switch (action.type) {
    case movieActionTypes.LOAD_ALL_MOVIES:
      return { ...state, allMovies: action.data.results };
    default:
      return state;
  }
}
