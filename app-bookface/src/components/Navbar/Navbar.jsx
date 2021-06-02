import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.activ}>
          <a href="#s">Profile</a>
        </li>
        <li>
          <a href="#s">Messages</a>
        </li>
        <li>
          <a href="#s">News</a>
        </li>
        <li>
          <a href="#s">Music</a>
        </li>
        <li>
          <a href="#s">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;