import { chartData } from '../Data/data';

const iniialState = {
    chartData: chartData
}

const bookingReducer = (state = iniialState, action) => {
    const newState = {...state}
    return newState
}

export default bookingReducer
