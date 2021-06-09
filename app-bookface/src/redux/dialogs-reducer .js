const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const text = state.newMessageText;
            const newMessage = { id: 5, message: text };
            state.newMessageText = '';
            state.messages.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;
            return state;
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, body: text });

export default dialogsReducer;