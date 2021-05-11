import { applyMiddleware, compose, createStore } from 'redux'
import reduxInmutableStateInvariant from 'redux-immutable-state-invariant'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/index'

export default function configureStore (initialState: {} | undefined) {
  return createStore(rootReducer, compose(applyMiddleware(reduxInmutableStateInvariant(), thunkMiddleware)))
}
const store = configureStore({})

export type AppDispatch = typeof store.dispatch
