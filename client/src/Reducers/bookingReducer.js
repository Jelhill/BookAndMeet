import { chartData } from '../Data/data';
import { GET_USER_BOOKING_DETAILS, BOOKING_SUCCESS_MESSAGE } from "../Actions/bookingActions"

const iniialState = {
    chartData: chartData,
    userBookingDetails: {},
    bookingSuccessStatus: ""
}

const bookingReducer = (state = iniialState, action) => {
    const newState = {...state}

    if(action.type === GET_USER_BOOKING_DETAILS){
        Object.assign(newState.userBookingDetails, action.values)
    }

    if(action.type === BOOKING_SUCCESS_MESSAGE){
        newState.bookingSuccessStatus = "Booked Successfully"
    }
    return newState
}

export default bookingReducer
