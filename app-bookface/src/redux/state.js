const store = {
    _state: {
        profilePage: {
            posts: [
                { id: "1", message: "Hi! how are you???", likesCount: "75" },
                { id: "2", message: "How are you?", likesCount: "154" },
                { id: "3", message: "What are you doing?", likesCount: "148" },
                { id: "4", message: "Can meet?", likesCount: "175" },
            ],
            newPostText: 'h00000000k',
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
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log(' ky-kyk-ky-ky-kyyy');
    },
    addPost() {
        const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store;
window.store = store