import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { loadFavourites } from '../../redux/actions/movieActionCreators';
import posterSize from '../../constants/posterURL';
import NavigationHeader from '../NavigationHeader';
import './index.scss';

function MyFavourites({ favourites, action }) {
  useEffect(() => {
    // eslint-disable-next-line no-debugger
    debugger;
    action.loadFavourites();
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log(favourites);
    }, 1000);
  }, []);

  return (
    <div className="my-favourites__container">
      <NavigationHeader />
      <h2>My Favourites</h2>
      <div className="favourites__list">
        {
            favourites && favourites.map((movie) => (
              <div>
                <h3>{movie.title}</h3>
                <img src={`${posterSize.small}${movie.poster_path}`} alt={`Poster from ${movie.title}`} />
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
    loadFavourites: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ movies }) {
  return {
    favourites: movies.favourites
  };
}

function mapDisptachToProps(dispatch) {
  return {
    action: bindActionCreators({ loadFavourites }, dispatch)
  };
}
export default connect(mapStateToProps, mapDisptachToProps)(MyFavourites);
