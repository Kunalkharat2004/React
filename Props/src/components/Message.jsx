/* eslint-disable react/prop-types */
import styles from "./Message.module.css";
const Message = (props) =>{

    return (
        <>
        {props.foodItem.length === 0 && <h3 className={`${styles["error-msg"]}`}>I am still hungry</h3>}
        </>
    )
}

export default Message; 