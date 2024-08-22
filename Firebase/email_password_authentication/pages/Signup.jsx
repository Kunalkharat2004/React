import {  useRef } from "react";
import { useFirebase } from "../context/AuthenticationContext";
function Signup() {



    const email = useRef("");
    const password = useRef("");

    const firebase = useFirebase();
    const signUpUser = (e) =>{
      e.preventDefault();
      firebase.handleSignup(email.current.value,password.current.value);
      email.current.value =""
      password.current.value =""
    }
    

  return (
      <>
    <h1 >Sign Up</h1>
    <form className="form" style={{marginBottom:"30px"}}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input ref={email} type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input ref={password} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button onClick={(e)=>signUpUser(e)} className="btn btn-primary">Submit</button>
</form>
</>
  )
}

export default Signup