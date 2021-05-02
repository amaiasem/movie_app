import React from 'react';
// import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import posterSize from '../../constants/posterURL';
import './index.scss';

const MovieDetail = ({ location }) => {
  const movie = location.props;
  return (
    <div className="movie__container">
      <img src={`${posterSize.large}${movie.backdrop_path}`} alt={`Poster from ${movie.title}`} />
      <div className="movie-detail">
        {
            movie.title
              ? <h1>{movie.title}</h1>
              : <h1>{movie.name}</h1>

        }
        <div className="movie-info">
          <img src={`${posterSize.big}${movie.poster_path}`} alt={`Cover from ${movie.title}`} />
          <div>
            <h3 className="info__title">Overview</h3>
            <p className="info__description">{movie.overview}</p>
            <h3 className="info__title">Released</h3>
            <p className="info__description">{movie.release_date}</p>
            <h3 className="info__title">Media:</h3>
            <p className="info__description">{(movie.media_type).toUpperCase()}</p>
            <h3 className="info__title">Rate:</h3>
            <p className="info__description">{movie.vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieDetail.propTypes = {
  location: PropTypes.shape({
    props: PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      backdrop_path: PropTypes.string,
      poster_path: PropTypes.string,
      overview: PropTypes.string,
      release_date: PropTypes.string,
      media_type: PropTypes.string,
      vote_average: PropTypes.string
    }).isRequired
  }).isRequired
};

export default MovieDetail;
