/* eslint-disable react/prop-types */
import styles from "./FoodItem.module.css";

const FoodItem = ({ foodItem,bought,BuyedFood }) => {


  return (
    <>
      {
        <li className={`${styles["list"]} list-group-item ${bought && `active`}`}>
          <span>{foodItem}</span>
          <button
            type="button"
            className={`${styles.buyButton} btn btn-primary ${bought && `btn-danger`}`}
            onClick={BuyedFood}
          >
            {bought?"Remove":"Buy"}
          </button>
        </li>
      }
    </>
  );
};  

export default FoodItem;