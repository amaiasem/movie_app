import { applyMiddleware, compose, createStore } from 'redux'
import reduxInmutableStateInvariant from 'redux-immutable-state-invariant'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/index'
import initialState from './initialState'

function configureStore () {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(reduxInmutableStateInvariant(), thunkMiddleware))
  )
}
const store = configureStore()
export type AppDispatch = typeof store.dispatch
export default configureStore()
