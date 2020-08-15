import { chartData } from '../Data/data';
import { GET_USER_BOOKING_DETAILS } from "../Actions/bookingActions"

const iniialState = {
    chartData: chartData,
    userBookingDetails: {}
}

const bookingReducer = (state = iniialState, action) => {
    const newState = {...state}

    if(action.type === GET_USER_BOOKING_DETAILS){
        Object.assign(newState.userBookingDetails, action.values)
    }
    return newState
}

export default bookingReducer
