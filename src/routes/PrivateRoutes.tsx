import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoutes() {
    const user = null;
    return user ? <Outlet /> : <Navigate to={"/login"} />
}