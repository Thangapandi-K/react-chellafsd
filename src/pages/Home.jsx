import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Welocome to our website</h1>
        <p>Please register or login to access our services</p>
        
        <Outlet />
    </div>
  )
}

export default Home