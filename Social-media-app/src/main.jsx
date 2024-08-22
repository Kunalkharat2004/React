import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreatePost, { createPostAction } from './components/CreatePost.jsx';
import CardList, { postLoader } from './components/CardList.jsx';

const router = createBrowserRouter([
  {path:"/",element:<App/>,
  children:[
    {path: "/", element: <CardList />,loader: postLoader},
    {path: "/create-post",element:<CreatePost />, action:createPostAction}
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)