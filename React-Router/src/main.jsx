import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact, { formAction } from './components/Contact.jsx'
import User, { githubLoader } from './components/Github.jsx'
import Github from './components/Github.jsx'

const router = createBrowserRouter(
  [
    {path:"/",
    element:<App/>,
    children:[
      {path:"home",element:<Home/>},
      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>, action:formAction},
      {path:"user/:id",element:<User/>},
      {path:"github",element:<Github/>,loader:githubLoader}
    ]}
   ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
