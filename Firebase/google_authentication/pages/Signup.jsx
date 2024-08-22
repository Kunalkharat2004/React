import {getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
import { app } from "../src/firebase";



function Signup() {

      
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
    const handleSignIn = () =>{
        signInWithPopup(auth,provider)
        .then(()=>console.log("SignIn Succussfull"))
        .catch(()=>console.log("Error occured"))
      }
    return (
        <>
         <button onClick={handleSignIn}>Sign in with google</button>
        </>
      )
  }
  
  export default Signup