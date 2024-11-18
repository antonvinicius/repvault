import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function PublicPage({ children }: any) {
    const { user } = useAuth();

    if (user) {
        return <Navigate to='/' replace />;
    }

    return children;
}