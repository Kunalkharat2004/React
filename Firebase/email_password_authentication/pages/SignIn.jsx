import { useRef } from "react"
import { useFirebase } from "../context/AuthenticationContext";

const SignIn = () =>{


    const email = useRef("");
    const password = useRef("");
    const firebase = useFirebase();

    const signInUser = (e) =>{
        e.preventDefault();
        firebase.handleSignIn(email.current.value,password.current.value)
    }

    return (
        <>
        <h1 style={{marginTop:"30px"}}>Sign In</h1>
        <form className="form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input ref={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input ref={password} type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button onClick={(e)=>signInUser(e)} className="btn btn-primary">Submit</button>
      </form>
      </>
    )
}

export default SignIn;