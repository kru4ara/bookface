import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.activ}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.activ}>
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.activ}>
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.activ}>
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.activ}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
