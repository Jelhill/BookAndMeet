export const GET_SIGNUP_INPUTS = 'GET_SIGNUP_INPUTS'

export const getSignupInputs = (values) => {
    return {
        type: GET_SIGNUP_INPUTS,
        values: values
    }
}