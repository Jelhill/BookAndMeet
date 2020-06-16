 import * as CONSTANTS from '../constants'
 import initialState from '../Data/data'
 

 
   


 export default (state = initialState, action) => {
   switch(action.type){
     case CONSTANTS.ADD_LIST:
       return {
         ...state,
         rooms: [...state.rooms, action.payload]
       }
    default:
      return state
   }
 }

