import { combineReducers } from 'redux'
import catReducer from './catReducer'
import RangeReducer from './RangeReducer'


export default combineReducers({
  categories: catReducer,
  ranges: RangeReducer
})