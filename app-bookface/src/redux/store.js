import dialogsReducer from "./dialogs-reducer ";
import profileReducer from "./profile-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },
}


export default store;
window.store = store;