import { chartData } from '../Data/data';
import { GET_USER_BOOKING_DETAILS, SHOW_FAILED_BOOKING_MODAL } from "../Actions/bookingActions"


const iniialState = {
    chartData: chartData,
    userBookingDetails: {},
    showfailedBookingModal: false
    
}

const bookingReducer = (state = iniialState, action) => {
    const newState = {...state}

    if(action.type === GET_USER_BOOKING_DETAILS){
        Object.assign(newState.userBookingDetails, action.values)
    }
    if(action.type === SHOW_FAILED_BOOKING_MODAL){
        newState.showfailedBookingModal = action.values
    }
    return newState
}

export default bookingReducer
