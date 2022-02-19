const ADD_MESSAGE = "chatReducer/ADD_MESSAGE";
const DELETE_MESSAGE = "chatReducer/DELETE_MESSAGE";

let initialState = {
    messages: [],
}

export const chatReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(message=>message.id !== action.message.id)
            }
        default: return state
    }
}

export const addMessage = (message) => ({type: ADD_MESSAGE, message});
export const deleteMessage = (message) => ({type: DELETE_MESSAGE, message});
