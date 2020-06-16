// import createStore, applyMiddleware
import { createStore } from 'redux'


// import rootReducer
import rootReducer from './reducers'

// create initial state, an object
const initialState = {}


const store = createStore(rootReducer, initialState)

export default store