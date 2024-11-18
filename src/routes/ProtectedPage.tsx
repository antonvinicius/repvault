import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Layout } from "../components/Layout";

export function ProtectedPage() {
    const { user } = useAuth();
    console.log('user at ProtectedPage: ', user);

    if (!user) {
        return <Navigate to='/login' replace />;
    }

    return <Layout />;
}