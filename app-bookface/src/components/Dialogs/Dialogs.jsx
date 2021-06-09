import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "./../../redux/state";

const Dialogs = (props) => {
  const state = props.dialogsPage;
  const dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElements = state.messages.map((m) => (
    <Message message={m.message} className={m.className} />
  ));

  // const sendMessageElement = React.createRef();
  const newMessageText = state.newMessageText;

  const onSendMesssageClick = () => {
    props.dispatch(addMessageActionCreator());
  };

  const onNewMessageChange = (event) => {
    const text = event.target.value;
    const action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsElements}</div>
        <div>
          <div className={classes.messages}>
            <div>{messagesElements}</div>
            <div className={classes.form}>
              <div>
                <textarea
                  onChange={onNewMessageChange}
                  value={newMessageText}
                  placeholder="Enter your message..."
                />
              </div>
              <div>
                <button onClick={onSendMesssageClick}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
