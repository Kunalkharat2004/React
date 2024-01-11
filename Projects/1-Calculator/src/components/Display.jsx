import styles from "./Display.module.css"

function Display(){
    return (
       
        <div className="input-text">
        <input type="text" name="number" className={styles.inputField}/>
      </div>

    )
}

export default Display;