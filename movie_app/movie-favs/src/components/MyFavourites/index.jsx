import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { loadFavourites, deleteFavourites } from '../../redux/actions/movieActionCreators';
import posterSize from '../../constants/posterURL';
import NavigationHeader from '../NavigationHeader';
import './index.scss';

function MyFavourites({ favourites, action }) {
  useEffect(() => {
    action.loadFavourites();
  }, []);

  return (
    <div className="my-favourites__container">
      <NavigationHeader />
      <h2>My Favourit movies</h2>
      <div className="favourites__list">
        {
            favourites && favourites.map((movie) => (
              <div className="movie__card">
                <button
                  className="movie--delete"
                  type="button"
                  onClick={() => action.deleteFavourites(movie.id)}
                >
                  <i className="far fa-times-circle" />
                </button>
                <img src={`${posterSize.small}${movie.poster_path}`} alt={`Poster from ${movie.title}`} />
                <h4>{movie.title}</h4>
              </div>
            ))
        }
      </div>
    </div>
  );
}

MyFavourites.propTypes = {
  favourites: PropTypes.shape([]).isRequired,
  action: PropTypes.shape({
    loadFavourites: PropTypes.func.isRequired,
    deleteFavourites: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ movies }) {
  return {
    favourites: movies.favourites
  };
}

function mapDisptachToProps(dispatch) {
  return {
    action: bindActionCreators({ loadFavourites, deleteFavourites }, dispatch)
  };
}
export default connect(mapStateToProps, mapDisptachToProps)(MyFavourites);
