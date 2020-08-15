import { GET_ROOM_FORM_INPUTS, 
    SET_LOADING,
    GET_ROOM_IMAGE, 
    UPDATE_STATE_WITH_ROOMS,
    EDIT_ROOM_FORM_INPUTS,
    SAVE_CURRENT_ROOM } from "../Actions/roomActions"

const initialState = {
    addRoomFormInputs: {}, 
    editRoomFormInputs: [],
    setLoading: false, 
    roomImage: null,
    rooms: [],
    currentRoom: {}
}

const roomReducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === GET_ROOM_FORM_INPUTS) {
        Object.assign(newState.addRoomFormInputs, action.values)
    }
    if(action.type === EDIT_ROOM_FORM_INPUTS) {
        Object.assign(newState.editRoomFormInputs, action.values)
    }

    if(action.type === SET_LOADING) {
        newState.setLoading = action.value
    }

    if(action.type === GET_ROOM_IMAGE) {
        newState.roomImage = action.value
    }

    if(action.type === UPDATE_STATE_WITH_ROOMS) {
        newState.rooms = newState.rooms.concat(action.values)
    }

    if(action.type === SAVE_CURRENT_ROOM) {
        console.log("actionss", action.values)
        Object.assign(newState.currentRoom, action.values)
    }
    return newState
}



export default roomReducer;