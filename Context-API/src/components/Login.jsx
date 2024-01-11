/* eslint-disable react/prop-types */

import { useRef,useContext } from 'react'
import UserContext from '../context/UserContext';

function Login() {

    const usernameInput = useRef("");
    const passwordInput = useRef("");

    const {setUser} = useContext(UserContext);

    const onSubmit=(e)=>{
        e.preventDefault();
        let username = usernameInput.current.value;
        let password = passwordInput.current.value
        setUser({username,password});
    }

  return (
   <form onSubmit={(e)=>onSubmit(e)}>
   <label htmlFor="username">Username</label>
   <input type="text" name="username" id="username" ref={usernameInput}/>

   <label htmlFor="password">Password</label>
   <input type="text" name="password" id="password" ref={passwordInput}/>
    <br />
    <button>Login</button>
   </form>
  )
}

export default Login