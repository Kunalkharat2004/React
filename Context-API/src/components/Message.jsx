/* eslint-disable react/prop-types */
import { useContext } from "react"
import UserContext from "../context/UserContext"

function Message() {

    let {user} = useContext(UserContext);

  return (
    <>
    {user.username?<p>{`Welcome ${user.username}`}</p>:<p>Please login</p>}
    </>
  )
}

export default Message