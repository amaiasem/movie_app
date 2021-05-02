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
    <div className="movie-detail">
      <img src={`${posterSize.large}${movie.backdrop_path}`} alt={`Poster from ${movie.title}`} />
      <div className="movie-info">
        {
            movie.title
              ? <h1>{movie.title}</h1>
              : <h1>{movie.name}</h1>

        }

      </div>
    </div>
  );
};

MovieDetail.propTypes = {
  location: PropTypes.shape({
    props: PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      backdrop_path: PropTypes.string
    }).isRequired
  }).isRequired
};

export default MovieDetail;
