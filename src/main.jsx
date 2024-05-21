import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './Root/Root.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-gradient-to-r from-[#2C3E50] to-[#000000]'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
