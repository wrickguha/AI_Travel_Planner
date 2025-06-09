import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom' 
import CreateTrip from './create-trip/index.jsx'
import ReactDOM from "react-dom/client";
import Header from './components/ui/custom/Header.jsx'

const Router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create-trip',
    element:<CreateTrip/>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={Router} />
  </StrictMode>,
)

