import { GET_SIGNUP_INPUTS } from "../Actions/userActions"

const initialState = {
    signUpFormDetails: {}
}

const userReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === GET_SIGNUP_INPUTS) {
        Object.assign(newState.signUpFormDetails, action.values)
    }

    return newState
}

export default userReducer
