import classes from "./Post.module.css";

const Post = () => {
  return (
    <div className={classes.post}>
      <img
        src="https://avatarko.ru/img/kartinka/30/kapyushon_cifry_29398.jpg"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id debitis
        dolorem molestiae aperiam nulla nisi aspernatur impedit aut at corporis,
        iste a labore? Quibusdam explicabo porro quae distinctio maiores ut.
      </p>
      <div className={classes.like}><span>-----&gt;<a href="#s">Like</a></span></div>
    </div>
  );
};

export default Post;
