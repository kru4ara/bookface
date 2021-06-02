import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        {" "}
        <img
          className={classes.header}
          src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
          alt="01"
        />
      </div>
      <div className={classes.userInfo}>
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
      <div>
        My posts
        <div className={classes.form}>
          <textarea name="newPost" id="" cols="100" rows="2"></textarea>
          <button className={classes.addPost}>Add Post</button>
        </div>
        <div>
          <div className={classes.post}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id debitis dolorem molestiae aperiam nulla nisi aspernatur impedit aut at corporis, iste a labore? Quibusdam explicabo porro quae distinctio maiores ut.</div>
          <div className={classes.post}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit in accusantium eos saepe pariatur repudiandae blanditiis sapiente minus! Delectus at similique sit aliquam voluptatibus vitae tempore porro perferendis inventore beatae!</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
