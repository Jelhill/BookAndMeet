export const GET_SIGNUP_INPUTS = 'GET_SIGNUP_INPUTS'
export const GET_FEEDBACK_INPUTS = 'GET_FEEDBACK_INPUTS'
export const GET_IMAGE_INPUTS = 'GET_IMAGE_INPUTS'
export const SHOW_SIGNUP = "SHOW_SIGNUP"
export const SHOW_LOGIN = "SHOW_LOGIN"
export const SHOW_SIGNIN = "SHOW_LOGIN"
export const SAVE_INITIAL_USER_DETAILS = "SAVE_INITIAL_USER_DETAILS"
export const UPDATE_STATE_WITH_API = "UPDATE_STATE_WITH_API"
export const UPDATE_STATE_FOR_HEADER = "UPDATE_STATE_FOR_HEADER"
export const SHOW_LOGOUT = "SHOW_LOGOUT"
export const SUCCESS_MESSAGE = "SUCCESS_MESSAGE"
export const GET_USER_COMMENTS = "GET_USER_COMMENTS"
export const SUCCESSFUL_REG_MODAL = "SUCCESSFULL_REG_MODAL"
export const GET_ADMINFORM_INPUT = " GET_ADMINFORM_INPUT"



export const getSignupInputs = (values) => {
    return {
        type: GET_SIGNUP_INPUTS,
        values: values
    }
}
export const getAdminRegInputs = (values) => {
    return {
        type: GET_ADMINFORM_INPUT,
        values: values
    }
}
export const getUserComments = (values) => {
    return {
        type: GET_USER_COMMENTS,
        values: values
    }
}
export const getFeedbackInputs =(values)=>{
    return{
        type:GET_FEEDBACK_INPUTS,
        values:values
    }
}
export const getInputForImage = (values) => {
    return{
        type: GET_IMAGE_INPUTS,
        values
    }
}

export const showSignup = (values) => {
    return{
        type: SHOW_SIGNUP,
        values
    }
}
export const showSuccessfulRegModal = (values) => {
    return {
        type: SUCCESSFUL_REG_MODAL,
        values
    }
}

export const showSignIn = (values) => {
    return{
        type: SHOW_LOGIN,
        values
    }
}
export const showLogout = (value) =>{
    return{
        type:SHOW_LOGOUT,
        value
    }
}

export const saveInitialUserDetails = (values) => {
    return{
        type: SAVE_INITIAL_USER_DETAILS,
        values
    }
}

export const updateStateWithAPI = (value) => {
    return{
        type: UPDATE_STATE_WITH_API,
        value
    }
}

export const updateStateForHeader = (values) => {
    return{
        type: UPDATE_STATE_FOR_HEADER,
        values
    }
}

export const successMessage = (message) => {
    return{
        type: SUCCESS_MESSAGE,
        message
    }
}


