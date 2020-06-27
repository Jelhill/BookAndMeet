import { GET_SIGNUP_INPUTS, GET_IMAGE_INPUTS } from "../Actions/userActions"

const initialState = {
    signUpFormDetails: {},
    imageInputs: {}
}

const userReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === GET_SIGNUP_INPUTS) {
        Object.assign(newState.signUpFormDetails, action.values)
    }

    if(action.type === GET_IMAGE_INPUTS) {
        Object.assign(newState.imageInputs, action.values)
    }
    return newState
}

export default userReducer
