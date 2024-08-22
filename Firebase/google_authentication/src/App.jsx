import './App.css'
import {getAuth,onAuthStateChanged,signOut} from "firebase/auth"
import { app } from './firebase';
import { useEffect, useState } from 'react';
import Signup from '../pages/Signup';
function App() {
  const [user,setUser] = useState(null);
  
  const auth = getAuth(app);
  

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      user ? setUser(user) : setUser(null)
    })
  },[])

  if(user === null){
    return <div>
      <Signup/>
    </div>
  }
   
   return <div>
      <h1>Welcome {user.email}</h1>
      <button onClick={()=>signOut(auth)}>Logout</button>
    </div>
 

}

export default App
