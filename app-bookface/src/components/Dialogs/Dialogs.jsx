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

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={dialogItemData[0].name} id={dialogItemData[0].id} />
        <DialogItem name={dialogItemData[1].name} id={dialogItemData[1].id} />
        <DialogItem name={dialogItemData[2].name} id={dialogItemData[2].id} />
        <DialogItem name={dialogItemData[3].name} id={dialogItemData[3].id} />
        <DialogItem name={dialogItemData[4].name} id={dialogItemData[4].id} />
        <DialogItem name={dialogItemData[5].name} id={dialogItemData[5].id} />
      </div>
      <div className={classes.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  );
};

export default Dialogs;
