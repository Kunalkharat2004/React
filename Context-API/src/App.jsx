import Login from "./components/Login";
import Message from "./components/Message";
import UserContextProvider from "./context/UserContextProvider";

const App = ()=>{


  return (
    <UserContextProvider>
      <Login ></Login>
      <Message></Message>
    </UserContextProvider>
  )
}

export default App;