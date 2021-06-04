import classes from "./ProfileInfo.module.css";
import UserInfo from "./UserInfo/UserInfo";

const ProfileInfo = (props) => {
  return (
    <div className={classes.profileInfo}>
      <div>
        <img
          className={classes.header}
          src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
          alt="01"
        />
      </div>
      <UserInfo/>
    </div>
  );
};

export default ProfileInfo;
