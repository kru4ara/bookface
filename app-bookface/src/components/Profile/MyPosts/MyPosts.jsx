import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
    <h1>My posts</h1>
    <div className={classes.form}>
      <textarea ></textarea>
      <button className={classes.addPost}>Add Post</button>
    </div>
    <Post message='Hi! how are you???' likesCount='25'/>
    <Post message="We haven't seen each other for a long time!" likesCount='45'/>
    <Post message="Let's see you today?" likesCount='15'/>
  </div>
  );
};

export default MyPosts;
