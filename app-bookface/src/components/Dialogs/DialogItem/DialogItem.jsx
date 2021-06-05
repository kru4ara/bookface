import classes from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;

  return (
    <div className={classes.dialog}>
      <img
      className={classes.avatar}
        src="http://i.i.ua/photo/images/blog/0/3/580830_a4fcd43b.jpg"
        alt="123"
      />
      <NavLink to={path} activeClassName="activ">
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
