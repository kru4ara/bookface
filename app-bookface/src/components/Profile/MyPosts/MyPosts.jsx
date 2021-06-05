import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';
import ReactDOM from 'react-dom';

const MyPosts = (props) => {
  const postElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  const newPostElement = React.createRef();
  const addPost = () => {
    const text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={classes.myPosts}>
      <h2>My Posts</h2>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      {postElement}
    </div>
  );
};

export default MyPosts;
