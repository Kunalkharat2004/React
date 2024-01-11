/* eslint-disable react/prop-types */
import styles from "./Display.module.css"

function Display({currBtn}){
    return (
       
        <div className="input-text">
        <input type="text" name="number" className={styles.inputField} value={currBtn} readOnly/>
      </div>

    )
}

export default Display;