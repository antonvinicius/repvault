import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../../../auth/ui/pages/LoginPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { SongsListPage } from "../../../songs/ui/pages/SongsListPage";
import { SongsSearchPage } from "../../../songs/ui/pages/SongsSearchPage";
import { RegisterPage } from "../../../auth/ui/pages/RegisterPage";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<SongsListPage />} />
                    <Route path="/search" element={<SongsSearchPage />} />
                </Route>
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}