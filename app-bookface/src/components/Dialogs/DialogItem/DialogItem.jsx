import classes from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;

  return (
    <div className={classes.dialog}>
      <img src="" alt="123" />
      <NavLink to={path} activeClassName="activ">
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
