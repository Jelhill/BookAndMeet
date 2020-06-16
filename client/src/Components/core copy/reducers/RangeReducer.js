import RangeList from '../Data/data2';
import * as CONSTANTS from '../constants'


export default (state = RangeList, action) => {
    switch(action.type){
      case CONSTANTS.ADD_RANGE:
        return {
          ...state,
          ranges: [...state.ranges, action.payload]
        }
     default:
       return state
    }
  }