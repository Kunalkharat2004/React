/* eslint-disable react/prop-types */
import styles from "./Button.module.css";

const Button=({buttons})=>{

    return (
        <>
        {
            buttons.map(btn=> <button key={btn} className={styles.button}>{btn}</button>)
        }
         
        </>
    )
}

export default Button;