import axios from 'axios';
import movieActionTypes from './movieActionTypes';

export default function loadAllmovies() {
  return async (dispatch) => {
    const { data } = await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=844530321d34296cc96d5c1af2b8648a');
    dispatch({
      type: movieActionTypes.LOAD_ALL_MOVIES,
      data
    });
  };
}
