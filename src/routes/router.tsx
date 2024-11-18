import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { ProtectedPage } from "./ProtectedPage";
import { Songs } from "../pages/Songs";
import { Search } from "../pages/Search";
import { Root } from "../pages/Root";
import { Register } from "../pages/Register";
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
                        <Login />
                    </PublicPage>
                )
            },
            {
                path: 'register',
                element: (
                    <PublicPage>
                        <Register />
                    </PublicPage>
                )
            },
            {
                path: '/',
                element: <ProtectedPage />,
                children: [
                    {
                        path: '/',
                        element: <Songs />
                    },
                    {
                        path: 'search',
                        element: <Search />
                    }
                ]
            }
        ]
    }
])