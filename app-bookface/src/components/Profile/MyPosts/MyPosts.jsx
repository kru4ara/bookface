import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const postsData = [
    { id: "1", message: "Hi! how are you???", likesCount: "75" },
    { id: "2", message: "How are you?", likesCount: "154" },
    { id: "3", message: "What are you doing?", likesCount: "148" },
    { id: "4", message: "Can meet?", likesCount: "175" },
  ];

  const postElement = postsData
  .map((p) => ( <Post message={p.message} likesCount={p.likesCount} />));
  return (
    <div className={classes.myPosts}>
      <h2>My Posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      {postElement}
    </div>
  );
};

export default MyPosts;
