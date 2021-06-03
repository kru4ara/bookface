import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>Anatoli</div>
                <div className={classes.dialog}>Alexandr</div>
                <div className={classes.dialog}>Dmitry</div>
                <div className={classes.dialog}>Michail</div>
                <div className={classes.dialog}>Alena</div>
                <div className={classes.dialog}>Lorisa</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>hi</div>
                <div className={classes.message}>hi</div>
                <div className={classes.message}>hi</div>
                <div className={classes.message}>hi</div>
                <div className={classes.message}>hi</div>
                <div className={classes.message}>hi</div>
            </div>
        </div>
    );
};

export default Dialogs;
