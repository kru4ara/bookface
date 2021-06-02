import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
    My posts
    <div className={classes.form}>
      <textarea ></textarea>
      <button className={classes.addPost}>Add Post</button>
    </div>
    <Post/>
  </div>
  );
};

export default MyPosts;
