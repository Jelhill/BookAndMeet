import { 
    GET_SIGNUP_INPUTS, 
    GET_IMAGE_INPUTS, 
    SHOW_SIGNUP,
    SHOW_LOGIN,
    SAVE_INITIAL_USER_DETAILS,
    UPDATE_STATE_WITH_API,
    UPDATE_STATE_FOR_HEADER,
    SHOW_LOGOUT
 } from "../Actions/userActions"

const initialState = {
    signUpFormDetails: {},
    imageInputs: {},
    showSignUp: false,
    showSignIn: false,
    showLogOut:false,
    renderPage: false,
    loggedInUserInfo: {}
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
    if(action.type === SHOW_LOGOUT ){
        newState.showLogOut = action.value
    }

    if(action.type === SAVE_INITIAL_USER_DETAILS) {
        Object.assign(newState.signUpFormDetails, action.values)
    }

    if(action.type === UPDATE_STATE_WITH_API) {
        newState.renderPage = action.value
    }

    if(action.type === UPDATE_STATE_FOR_HEADER) {
        const now = new Date()
        console.log("Reducer",now.getTime(), action.values)
        Object.assign(newState.loggedInUserInfo, action.values)
    }


    return newState
}

export default userReducer
