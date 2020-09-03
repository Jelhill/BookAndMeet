export const GET_USER_BOOKING_DETAILS = 'GET_USER_BOOKING_DETAILS'
export const BOOKING_SUCCESS_MESSAGE = 'BOOKING_SUCCESS_MESSAGE'
export const SHOW_FAILED_BOOKING_MODAL = 'SHOW_FAILED_BOOKING_MODAL,'

export const getUserBookingDetails = (values) => {
  return{
    type: GET_USER_BOOKING_DETAILS,
    values
  }
}

export const bookingSuccessMessage = () => {
  return{
    type: BOOKING_SUCCESS_MESSAGE
  }
}
export const showFailedBookingModal = (values) => {
  return({
    type: SHOW_FAILED_BOOKING_MODAL,
    values
  })
}
