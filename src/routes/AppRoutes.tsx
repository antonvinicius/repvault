import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { ProtectedPage } from "./ProtectedPage";
import { SongsListPage } from "../pages/Songs";
import { SongsSearchPage } from "../pages/Search";
import { Root } from "../pages/Root";
import { RegisterPage } from "../pages/Register";
import { PublicPage } from "./PublicPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <h1>Error</h1>,
        children: [
            {
                path: 'login',
                element: (
                    <PublicPage>
                        <LoginPage />
                    </PublicPage>
                )
            },
            {
                path: 'register',
                element: (
                    <PublicPage>
                        <RegisterPage />
                    </PublicPage>
                )
            },
            {
                path: '/',
                element: <ProtectedPage />,
                children: [
                    {
                        path: '/songs',
                        element: <SongsListPage />
                    },
                    {
                        path: '/search',
                        element: <SongsSearchPage />
                    }
                ]
            }
        ]
    }
])