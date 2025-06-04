import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {

    const username=localStorage.getItem("username")
    const password=localStorage.getItem("password")

  return username==="rooster" && password==="1234" ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRouter