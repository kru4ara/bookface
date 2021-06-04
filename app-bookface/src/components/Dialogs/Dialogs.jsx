import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink to={path} activeClassName="activ">
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Anatoli" id="1" />
        <DialogItem name="Alexandr" id="2" />
        <DialogItem name="Dmitry" id="3" />
        <DialogItem name="Michail" id="4" />
        <DialogItem name="Alena" id="5" />
        <DialogItem name="Lorisa" id="6" />
      </div>
      <div className={classes.messages}>
        <Message message="Hello" />
        <Message message="How are you?" />
        <Message message="What are you doing?" />
        <Message message="Can meet?" />
      </div>
    </div>
  );
};

export default Dialogs;
