import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './redux/state';

const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getState())
store.subscribe(renderEntireTree)
reportWebVitals();