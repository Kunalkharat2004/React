import './App.css'
import {getFirestore,addDoc,collection} from "firebase/firestore"
import { app } from './firebase';

const firestore = getFirestore(app);

function App() {
  const writeData = async () =>{
   let res = await addDoc(collection(firestore,"products"),{
      name:"Harpic",
      price:99,
      manufactureDate:"28-01-2024"
    })
    console.log(res);
  }
  

  return (
    <>
      <button onClick={writeData}>Put Data</button>
    </>
  )
}

export default App
