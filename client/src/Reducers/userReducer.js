import { 
    GET_SIGNUP_INPUTS, 
    GET_IMAGE_INPUTS, 
    SHOW_SIGNUP,
    SHOW_LOGIN,
    SAVE_INITIAL_USER_DETAILS
 } from "../Actions/userActions"

const initialState = {
    signUpFormDetails: {},
    imageInputs: {},
    showSignUp: false,
    showSignIn: false,
}   

const userReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === GET_SIGNUP_INPUTS) {
        Object.assign(newState.signUpFormDetails, action.values)
    }

    if(action.type === GET_IMAGE_INPUTS) {
        Object.assign(newState.imageInputs, action.values)
    }

    if(action.type === SHOW_SIGNUP) {
        newState.showSignUp = action.values
    }

    if(action.type === SHOW_LOGIN) {
        newState.showSignIn = action.values
    }

    if(action.type === SAVE_INITIAL_USER_DETAILS) {
        console.log(action.values)
        Object.assign(newState.signUpFormDetails, action.values)
    }

    return newState
}

export default userReducer
