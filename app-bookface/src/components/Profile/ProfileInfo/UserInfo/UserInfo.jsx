import classes from "./UserInfo.module.css";

const UserInfo = (props) => {
  return (
    <div className={classes.userInfo}>
      <img
        className={classes.avatar}
        src="https://www.meme-arsenal.com/memes/825b9b3ef148fbf2b20f47951e170699.jpg"
        alt="02"
      />
      <div className={classes.description}>
        <p className={classes.name}> Name: Anatoli Kurliuk</p>
        <p className={classes.age}> Age: 32 year</p>
        <p className={classes.city}> City: BY, Kobrin</p>
        <p className={classes.job}> Job: Frontend Developer(React)</p>
      </div>
    </div>
  );
};

export default UserInfo;
