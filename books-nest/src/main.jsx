import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider } from 'react-router-dom'
import router from './lib/routes.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
