import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const posts = [
  { id: "1", message: "Hi! how are you???", likesCount: "75" },
  { id: "2", message: "How are you?", likesCount: "154" },
  { id: "3", message: "What are you doing?", likesCount: "148" },
  { id: "4", message: "Can meet?", likesCount: "175" },
];

const dialogs = [
  { id: "1", name: "Anatoli" },
  { id: "2", name: "Alexandr" },
  { id: "3", name: "Dmitry" },
  { id: "4", name: "Michail" },
  { id: "5", name: "Alena" },
  { id: "6", name: "Lorisa" },
];

const messages = [
  { id: "1", message: "Hello" },
  { id: "2", message: "How are you?" },
  { id: "3", message: "What are you doing?" },
  { id: "4", message: "Can meet?" },
];
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
