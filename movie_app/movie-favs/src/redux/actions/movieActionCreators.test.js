import axios from 'axios';
import movieActionTypes from './movieActionTypes';
import
loadAllmovies,
{
  loadFavourites,
  addFavourites,
  deleteFavourites,
  updateFavourites,
  filterFavourites
} from './movieActionCreators';
// import mockedData from '../../constants/mockedData';

jest.mock('axios');

describe('Given a loadAllmovies function', () => {
  describe('When is invoked', () => {
    it('It should dispatch an action with type LOAD_ALL_MOVIES and the response data', async () => {
      const response = {
        data: []
      };

      axios.get.mockReturnValueOnce(response);
      const action = {
        type: movieActionTypes.LOAD_ALL_MOVIES,
        data: response.data
      };
      const dispatch = jest.fn();
      const fnc = loadAllmovies();
      await fnc(dispatch);
      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe('Given a loadFavourites function', () => {
  describe('When is invoked', () => {
    it('It should dispatch an action LOAD_ALL_FAVOURITES and the response', async () => {
      const response = {
        data: []
      };

      axios.get.mockReturnValueOnce(response);
      const action = {
        type: movieActionTypes.LOAD_ALL_FAVOURITES,
        data: response.data
      };
      const dispatch = jest.fn();
      const fnc = loadFavourites();
      await fnc(dispatch);
      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe('Given an addFavourites function', () => {
  describe('When is invoked with a movie', () => {
    it('It should dispatch an action ADD_FAVOURITES and the response', async () => {
      const response = {
        data: {}
      };

      const query = {
        id: 12,
        name: 'Avangers'
      };

      axios.post.mockReturnValueOnce(response);
      const action = {
        type: movieActionTypes.ADD_FAVOURITES,
        data: response.data
      };
      const dispatch = jest.fn();
      const fnc = addFavourites(query);
      await fnc(dispatch);
      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe('Given a deleteFavourites function', () => {
  describe('When is invoked with a movie id', () => {
    it('It should dispatch an action DELETE_FAVOURITES and the query id', async () => {
      const query = {
        id: 12
      };

      axios.delete.mockImplementationOnce();
      const action = {
        type: movieActionTypes.DELETE_FAVOURITES,
        data: query.id
      };
      const dispatch = jest.fn();
      const fnc = deleteFavourites(query.id);
      await fnc(dispatch);
      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe('Given an updateFavourites function', () => {
  describe('When is invoked', () => {
    it('It should dispatch an action UPDATE_FAVOURITES and the data', async () => {
      const query = {
        id: 12,
        watched: false
      };

      const response = {
        data: {}
      };

      axios.patch.mockReturnValueOnce(response);
      const action = {
        type: movieActionTypes.UPDATE_FAVOURITES,
        data: response.data
      };
      const dispatch = jest.fn();
      const fnc = updateFavourites(query.id, query.watched);
      await fnc(dispatch);
      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe('Given a filterFavourites function', () => {
  describe('When is invoked with a watched status', () => {
    it('It should return an action FILTER_FAVOURITES and the status', () => {
      const query = {
        watched: false
      };
      const returnValue = filterFavourites(query.watched);
      expect(returnValue.type).toBe('FILTER_FAVOURITES');
    });
  });
});
