import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { loadFromLocalStorage } from "../../../utils/manageLocalStorage";

const PrivateRoutes  = () => {
    let user = loadFromLocalStorage();
    return (
        user ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoutes; 
