import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeBanner from './Components/HomeBanner/HomeBanner';
import MainPage from './Components/MainPage/MainPage';


const Router = createBrowserRouter([
  {path:"/", element: <MainPage/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={Router} />
  </React.StrictMode>,
)
