/* eslint-disable react/prop-types */
import { useState } from "react";
import FoodItem from "./FoodItem";

const FoodItems = ({ foodToShow }) => {
  let [Buyed, setBuyed] = useState([]);

  const BuyedFood = (item) => {
    let newFoodItems;
    if (Buyed.includes(item)) {
      newFoodItems = Buyed.filter((food) => food !== item);
    } else {
      newFoodItems = [...Buyed, item];
    }
    setBuyed(newFoodItems);
  };
  return (
    <>
      <ul className="list-group">
        {foodToShow.map((food) => (
          <FoodItem
            key={food}
            foodItem={food}
            BuyedFood={() => BuyedFood(food)}
            bought={Buyed.includes(food)}
          ></FoodItem>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;