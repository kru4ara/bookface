import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <img
        src="https://avatarko.ru/img/kartinka/30/kapyushon_cifry_29398.jpg"
        alt=""
      />
      <p>{props.message}</p>
      <div className={classes.like}>
        <span>
          -----&gt;<a href="#s">Like </a>{props.likesCount}
        </span>
      </div>
    </div>
  );
};

export default Post;
