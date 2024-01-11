/* eslint-disable react/prop-types */
import styles from "./ButtonsContainer.module.css";
import Button from "./Button";

function Buttons({handleOnClick}) {

  let Buttons = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "%",
    "*",
    "C",
    "=",
  ];

  return (
    <div className={styles.buttonsContainer}>
    <Button buttons={Buttons} handleOnClick={handleOnClick}></Button>
    </div>
  );
}

export default Buttons;
