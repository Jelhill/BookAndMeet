export const GET_ROOM_FORM_INPUTS = "GET_ROOM_FORM_INPUTS"
export const EDIT_ROOM_FORM_INPUTS = "EDIT_ROOM_FORM_INPUTS"
export const SET_LOADING = "SET_LOADING"
export const GET_ROOM_IMAGE = "GET_ROOM_IMAGE"
export const UPDATE_STATE_WITH_ROOMS = "UPDATE_STATE_WITH_ROOMS"
export const SAVE_CURRENT_ROOM = "SAVE_CURRENT_ROOM"


export const getRoomFormInputs = (values) => {
    return {
        type: GET_ROOM_FORM_INPUTS,
        values
    }
}
export const editRoomFormInputs = (values) => {
    return {
        type: EDIT_ROOM_FORM_INPUTS,
        values
    }
}

export const setLoading = (value) => {
    return {
        type: SET_LOADING,
        value
    }
}

export const getRoomImage = (value) => {
    return {
        type: GET_ROOM_IMAGE,
        value
    }
}

export const updateStateWithRooms = (values) => {
    return {
        type: UPDATE_STATE_WITH_ROOMS,
        values
    }
}

export const saveCurrentRoom = (values) => {
    return {
        type: SAVE_CURRENT_ROOM,
        values
    }
}