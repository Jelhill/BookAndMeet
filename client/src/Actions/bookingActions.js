export const GET_USER_BOOKING_DETAILS = 'GET_USER_BOOKING_DETAILS'

export const getUserBookingDetails = (values) => {
  return({
    type: GET_USER_BOOKING_DETAILS,
    values
  })
}
