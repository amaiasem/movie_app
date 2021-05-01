import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadMovies from '../../redux/actions/movieActionCreators';
import posterSize from '../../constants/posterURL';
import './index.scss';

function MovieList({ movies, action }) {
  useEffect(() => {
    action.loadMovies();
  }, []);

  return (
    <section className="movies__container">
      <h2>Trending this week</h2>
      <div className="container__list">
        {
        movies && movies.map((movie) => (
          <Link
            href="/movie-detail"
            className="movie__card"
            params={{ movie }}
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
    </section>
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
