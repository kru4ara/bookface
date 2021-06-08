import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../redux/state";

const MyPosts = (props) => {
  const postElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    const action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={classes.myPosts}>
      <h2>My Posts</h2>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
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
