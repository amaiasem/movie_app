import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadMovies from '../../redux/actions/movieActionCreators';
import posterSize from '../../constants/posterURL';
import './index.scss';

function MovieList({ movies, action }) {
  useEffect(() => {
    // eslint-disable-next-line no-debugger
    debugger;
    action.loadMovies();
  }, []);

  return (
    <div>
      <h1>Trending this week</h1>
      <div className="container__list">
        {
        movies && movies.map((movie) => (
          <div className="movie-card">
            <img src={`${posterSize.small}${movie.poster_path}`} alt={`Poster from ${movie.title}`} />
            <p>{movie.title}</p>
          </div>
        ))
      }
      </div>
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.shape([]).isRequired,
  action: PropTypes.shape({
    loadMovies: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ movies }) {
  return {
    movies: movies.allMovies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators({ loadMovies }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
