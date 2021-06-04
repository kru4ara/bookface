import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const postsData = [
    { id: "1", message: "Hi! how are you???" , likesCount :'75'},
    { id: "2", message: "How are you?" ,likesCount :'154'},
    { id: "3", message: "What are you doing?" , likesCount :'148'},
    { id: "4", message: "Can meet?" , likesCount :'175'},
  ];

  return (
    <div className={classes.myPosts}>
      <h2>My Posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button className={classes.addPost}>Add Post</button>
        </div>
      </div>
      <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
      <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
      <Post message={postsData[2].message} likesCount={postsData[2].likesCount} />
      <Post message={postsData[3].message} likesCount={postsData[3].likesCount} />
    </div>
  );
};

export default MyPosts;
