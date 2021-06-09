const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";


const store = {
    _state: {
        profilePage: {

            posts: [
                { id: "1", message: "Hi! how are you???", likesCount: "75" },
                { id: "2", message: "How are you?", likesCount: "154" },
                { id: "3", message: "What are you doing?", likesCount: "148" },
                { id: "4", message: "Can meet?", likesCount: "175" },
            ],

            newPostText: '',
        },

        dialogsPage: {

            dialogs: [
                { id: "1", name: "Anatoli" },
                { id: "2", name: "Alexandr" },
                { id: "3", name: "Dmitry" },
                { id: "4", name: "Michail" },
                { id: "5", name: "Alena" },
                { id: "6", name: "Lorisa" },
            ],

            messages: [
                { id: "1", message: "Hello" },
                { id: "2", message: "How are you?" },
                { id: "3", message: "What are you doing?" },
                { id: "4", message: "Can meet?" },
            ],

            newMessageText: '',
        },

        sidebar: {},
    },
    _callSubscriber() {
        console.log(' ky-kyk-ky-ky-kyyy');
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const text = this._state.profilePage.newPostText;
            const newPost = { id: 5, message: text, likesCount: 0 };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.body;
            this._callSubscriber(this._state);

        } else if (action.type === ADD_MESSAGE) {
            const text = this._state.dialogsPage.newMessageText;
            const newMessage = { id: 5, message: text };

            this._state.dialogsPage.newMessageText = '';
            this._state.dialogsPage.messages.push(newMessage);
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.body;
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, body: text });

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, body: text });

export default store;
window.store = store;