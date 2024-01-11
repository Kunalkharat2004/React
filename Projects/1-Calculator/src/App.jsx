import styles from "./App.module.css";
import Display from "./components/Display";
import Buttons from "./components/ButtonsContainer";

function App(){
  return (
    <center>
    <div className={styles.container}>

     <Display></Display>
    <Buttons></Buttons>

    </div>
    </center>
  )
}

export default App;