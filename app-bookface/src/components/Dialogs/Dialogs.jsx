import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  const sendMessageElement = React.createRef();

  const sendMesssage = () => {
    const text = sendMessageElement.current.value;
    alert(text);
  };

  const dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  const messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} className={m.className} />
  ));

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsElements}</div>
        <div className={classes.messages}>{messagesElements}</div>
      </div>
      <div className={classes.form}>
        <div>
          <textarea ref={sendMessageElement}></textarea>
        </div>
        <div>
          <button onClick={sendMesssage}>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
