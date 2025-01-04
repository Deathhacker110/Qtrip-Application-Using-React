import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

let ProtectedRoute = () => {
    let [state, setState] = useState(true);
    return state ? <Outlet/> : <Navigate to="/"/>
}

export default ProtectedRoute;