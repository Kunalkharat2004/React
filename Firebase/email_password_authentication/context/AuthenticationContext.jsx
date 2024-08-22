/* eslint-disable react/prop-types */
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useContext } from "react"
import { app } from "../src/firebase";

const AuthenticationContext = createContext(null);
export const useFirebase = () => useContext(AuthenticationContext);
const auth = getAuth(app);

function AuthenticationContextProvider({children}) {
  
  const handleSignup = (email,password) =>{
    
    createUserWithEmailAndPassword(auth,email,password);
    
  }
  const handleSignIn = (email,password) =>{
  
    signInWithEmailAndPassword (auth,email,password)
    .then(()=>alert("Success"))
    .catch(()=>alert("User doesn't exists"))
  }
  
  
  
  return (

    <AuthenticationContext.Provider value={{handleSignup,handleSignIn}}>
    {children}        
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContextProvider