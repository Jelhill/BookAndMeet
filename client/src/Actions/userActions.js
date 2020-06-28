export const GET_SIGNUP_INPUTS = 'GET_SIGNUP_INPUTS'
export const GET_IMAGE_INPUTS = 'GET_IMAGE_INPUTS'

export const getSignupInputs = (values) => {
    return {
        type: GET_SIGNUP_INPUTS,
        values: values
    }
}

export const getInputForImage = (values) => {
    return{
        type: GET_IMAGE_INPUTS,
        values
    }
}