import { 
    GET_USER_COMMENTS 
    
 } from "../Actions/userActions"

const initialState = {
    userComments:[]
}   

const feedbackReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === GET_USER_COMMENTS) {
        console.log(">>>>", action.values);
        newState.userComments = newState.userComments. concat(action.values)
    }
   


    return newState
}

export default feedbackReducer;
