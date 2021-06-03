import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <div>
        <img
          className={classes.header}
          src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
          alt="01"
        />
      </div>
      <div >
        <img
          className={classes.avatar}
          src="https://www.meme-arsenal.com/memes/825b9b3ef148fbf2b20f47951e170699.jpg"
          alt="02"
        />
        <div className={classes.description}>
          <p className={classes.name}> Name: Anatoli</p>
          <p className={classes.age}> Age: 32 year</p>
          <p className={classes.city}> City: Kobrin</p>
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
