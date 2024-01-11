import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App(){

  let [currVal,setCurrVal] = useState("");
  
  const handleOnClick = (event)=>{
    let inputBtn = event.target.innerHTML
    if(inputBtn === "C"){
      setCurrVal("")

    }else if(inputBtn === "="){
      const result = eval(currVal);
      setCurrVal(result);

    }else if(inputBtn === "DEL"){
      setCurrVal(currVal.slice(0,currVal.length-1));
    }
    
    else{
      setCurrVal(currVal + inputBtn);
    }
    
  }
  return (
    <center>
    <div className={styles.container}>

     <Display currBtn={currVal}></Display>
    <ButtonsContainer handleOnClick={handleOnClick}></ButtonsContainer>

    </div>
    </center>
  )
}

export default App;