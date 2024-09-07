import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes({children, user, redirectTo ="/"}) {

    if(!user){
       return <Navigate to={redirectTo}/>
    }

    return children ? children : <Outlet/>
}