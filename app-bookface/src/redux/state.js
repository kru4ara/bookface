import { renderEntireTree } from "../render"

const state = {
    profilePage: {
        posts: [
            { id: "1", message: "Hi! how are you???", likesCount: "75" },
            { id: "2", message: "How are you?", likesCount: "154" },
            { id: "3", message: "What are you doing?", likesCount: "148" },
            { id: "4", message: "Can meet?", likesCount: "175" },
        ],
        newPostText: 'h00000000k'
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
}

window.state = state

export const addPost = () => {
    const newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newPost) => {
    state.profilePage.newPostText = newPost;
    renderEntireTree(state);
}

export default state;