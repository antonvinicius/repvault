import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Layout } from "../components/Layout";

export function ProtectedPage() {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to='/login' replace />;
    }

    return <Layout />;
}