import React from "react";
import { Outlet , Navigate } from "react-router-dom";

const PrivateComponent = () =>{
    const auth = localStorage.getItem('User')

   return auth?<Outlet/> : <Navigate to="/log" />
}

export default PrivateComponent