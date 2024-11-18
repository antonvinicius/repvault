import { Link, Outlet } from "react-router-dom";
import { Content, Footer, Header, Wrapper } from "./styles";
import { Button } from "../Button";
import { useAuth } from "../../contexts/AuthContext";

export function Layout() {
    const { signOut, user } = useAuth()

    async function onLogout() {
        await signOut()
    }

    return (
        <Wrapper>
            <Header>
                <h1>Olá {user?.email?.split("@")[0]}</h1>
                <Button onClick={onLogout}>Logout</Button>
            </Header>
            <Content>
                <Outlet />
            </Content>
            <Footer>
                <Link to="/">
                    Repertório
                </Link>

                <Link to="/search">
                    Explorar
                </Link>
            </Footer>
        </Wrapper>
    )
}