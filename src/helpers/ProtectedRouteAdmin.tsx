import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRouteAdmin = () => {
    const auth = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    
    console.log(role)

    if (!auth) {
        <Navigate to="/" replace />;
    }else if(role !== "ADMIN"){
        return <Navigate to="/" replace />;
    }
      
    return <Outlet/>;
};