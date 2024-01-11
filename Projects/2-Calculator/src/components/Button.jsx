/* eslint-disable react/prop-types */
import styles from "./Button.module.css";

const Button=({buttons,handleOnClick})=>{

    return (
        <>
        {
            buttons.map(btn=> <button key={btn} className={styles.button}
            onClick={(event)=>handleOnClick(event)}
            >{btn}</button>)
        }
         
        </>
    )
}

export default Button;