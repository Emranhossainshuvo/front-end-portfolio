import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './Root/Root.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-gradient-to-tr from-[#6B0935] via-[#120B2E] to-[#0A16A5]'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
