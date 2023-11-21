import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const auth = localStorage.getItem("token");
  
    if (!auth) {
        return <Navigate to="/auth" replace />;
    }
      
    return <Outlet/>;
};