import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import router from './router'
function App() {
  return (
    <div>
      <RouterProvider router={createBrowserRouter(router)}/>
    </div>
  )
}

export default App