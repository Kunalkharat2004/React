/* eslint-disable react/prop-types */
import styles from "./FoodInput.module.css";

const FoodInput = ({handleOnKeyDown})=>{

    return (
        <>
        <div className={styles.foodInputContainer}>
        <input type="text" name="food" placeholder="Enter a food to buy" className={styles.inputField}
        onKeyDown={handleOnKeyDown}
        />

            <button
            type="button"
            className={`${styles.addButton} btn btn-success`}
          >
            Add
          </button>
        </div>
        </>
    )
}

export default FoodInput;