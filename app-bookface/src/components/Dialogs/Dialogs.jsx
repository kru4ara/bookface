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
  const dialogItemData = [
    { id: "1", name: "Anatoli" },
    { id: "2", name: "Alexandr" },
    { id: "3", name: "Dmitry" },
    { id: "4", name: "Michail" },
    { id: "5", name: "Alena" },
    { id: "6", name: "Lorisa" },
  ];

  const messagesData = [
    { id: "1", message: "Hello" },
    { id: "2", message: "How are you?" },
    { id: "3", message: "What are you doing?" },
    { id: "4", message: "Can meet?" },
  ];

  const dialogsElements = dialogItemData.map(d=> <DialogItem name={d.name} id={d.id} />);
  const messagesElements = messagesData.map(m=> <Message message={m.message} />);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
      {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
