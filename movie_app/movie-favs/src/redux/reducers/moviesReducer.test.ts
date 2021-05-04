import movieActionTypes from '../actions/movieActionTypes'
import movieReducer from './moviesReducer'
import mockedData from '../../constants/mockedData'

let state: any = {
  allMovies: [],
  favourites: [],
  filteredMovies: []
}

describe('Given a movieReducer', () => {
  describe('When it is called without action type', () => {
    it('It should return the state', () => {
      expect(movieReducer(undefined, { type: null })).toEqual(state)
    })
  })

  describe('When it is called with action LOAD_ALL_MOVIES', () => {
    it('It should return the updated state with an array of 2 movies', () => {
      const action = {
        type: movieActionTypes.LOAD_ALL_MOVIES,
        data: mockedData.movies
      }

      const expectedReturnValue = { ...state, allMovies: action.data }
      const returnValue = movieReducer(state, action)
      expect(returnValue).toEqual(expectedReturnValue)
      expect(returnValue.allMovies.length).toBe(2)
    })
  })

  describe('When it is called with action LOAD_ALL_FAVOURITES', () => {
    it('It should return the updated state with an array of 1 favourite movie', () => {
      const action = {
        type: movieActionTypes.LOAD_ALL_FAVOURITES,
        data: mockedData.favourites
      }

      const expectedReturnValue = { ...state, favourites: action.data }
      const returnValue = movieReducer(state, action)
      expect(returnValue).toEqual(expectedReturnValue)
      expect(returnValue.favourites.length).toBe(1)
    })
  })

  describe('When it is called with action ADD_FAVOURITES', () => {
    it('It should return the updated state with an array of 1 favourite movie', () => {
      const action = {
        type: movieActionTypes.ADD_FAVOURITES,
        data: mockedData.favourites
      }

      const expectedReturnValue = { ...state, favourites: [...state.favourites, action.data] }
      const returnValue = movieReducer(state, action)
      expect(returnValue).toEqual(expectedReturnValue)
      expect(returnValue.favourites.length).toBe(1)
    })
  })

  describe('When it is called with action DELETE_FAVOURITES and a matching id', () => {
    it('It should return the updated state with an array of 0 favourite movies', () => {
      beforeEach(() => {
        state = {
          allMovies: [],
          favourites: mockedData.favourites,
          filteredMovies: []
        }
      })
      const action = {
        type: movieActionTypes.DELETE_FAVOURITES,
        data: 615457
      }

      const expectedReturnValue = { ...state, favourites: [] }
      const returnValue = movieReducer(state, action)
      expect(returnValue).toEqual(expectedReturnValue)
      expect(returnValue.favourites.length).toBe(0)
    })
  })

  describe('When it is called with action DELETE_FAVOURITES and NOT matching id', () => {
    it('It should return the updated state with an array of 1 favourite movies', () => {
      beforeEach(() => {
        state = {
          allMovies: [],
          favourites: mockedData.favourites,
          filteredMovies: []
        }
      })
      const action = {
        type: movieActionTypes.DELETE_FAVOURITES,
        data: 56565
      }

      const expectedReturnValue = { ...state }
      const returnValue = movieReducer(state, action)
      expect(returnValue).toEqual(expectedReturnValue)
      expect(returnValue.favourites.length).toBe(1)
    })
  })

  describe('When it is called with action UPDATE_FAVOURITES', () => {
    it('It should return the state with the updated data', () => {
      beforeEach(() => {
        state = {
          allMovies: [],
          favourites: mockedData.favourites,
          filteredMovies: []
        }
      })
      const action = {
        type: movieActionTypes.UPDATE_FAVOURITES,
        data: {
          original_language: 'en',
          original_title: 'Nobody',
          poster_path: '/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg',
          video: false,
          vote_average: 8.5,
          id: 615457,
          release_date: '2021-03-18',
          vote_count: 1015,
          title: 'Nobody',
          adult: false,
          backdrop_path: '/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg',
          overview: "Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a \"nobody.\" When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.",
          genre_ids: [
            28,
            53,
            80
          ],
          popularity: 2516.939,
          media_type: 'movie',
          watched: false
        }
      }

      const expectedReturnValue = { ...state, favourites: [action.data] }
      expect(movieReducer(state, action)).toEqual(expectedReturnValue)
    })
  })

  describe('When it is called with action FILTER_FAVOURITES and data: watched', () => {
    it('It should return the state with the updated data, favourites length to be 0', () => {
      beforeEach(() => {
        state = {
          allMovies: [],
          favourites: mockedData.favourites,
          filteredMovies: []
        }
      })
      const action = {
        type: movieActionTypes.FILTER_FAVOURITES,
        data: 'watched'
      }

      const expectedReturnValue = { ...state, favourites: [] }
      const returnValue = movieReducer(state, action)
      expect(returnValue).toEqual(expectedReturnValue)
      expect(returnValue.favourites.length).toBe(0)
    })
  })
})
