import { Outlet } from "react-router-dom";
import { Content, Footer, Header, Wrapper } from "./styles";
import { Button } from "../Button";
import { useAuth } from "../../contexts/AuthContext";

export function Layout() {
    const { signOut } = useAuth()

    async function onLogout() {
        await signOut()
    }

    return (
        <Wrapper>
            <Header>
                <h1>Olá vinibouner</h1>
                <Button onClick={onLogout}>Logout</Button>
            </Header>
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </Wrapper>
    )
}