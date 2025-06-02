import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {

    const username=localStorage.getItem("username")

  return username==="helen" ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRouter