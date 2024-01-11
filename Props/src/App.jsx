import "bootstrap/dist/css/bootstrap.min.css";
import Message from "./components/Message";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import styles from "./App.module.css";
import { useState } from "react";
import FoodItems from "./components/FoodItems";


function App() {

  // let foods = [];

  let [foodToShow, setFoodToShow] = useState([])

  let handleOnKeyDown = (event) => {
    if(event.key === "Enter"){
      let newFood = event.target.value;
     let newFoodItems = [newFood,...foodToShow];
      setFoodToShow(newFoodItems);
      event.target.value = "";
    }
  };



  return (
    <Container>
      {/* {isBuyed && <BuyAlert></BuyAlert>} */}
      <h1 className={styles.heading}>Healthy Foods</h1>

      <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
      <Message foodItem={foodToShow}></Message>
      <FoodItems foodToShow={foodToShow} ></FoodItems>
    </Container>
  );
}

export default App;