import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthService from "../../../pages/seller/services/auth.service";

const PrivateRoutes  = () => {
    let auth = AuthService.getCurrentUser();
    return (
        auth ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoutes; 
