import { NavLink, Outlet } from "react-router-dom";
import { Content, Footer, FooterWrapper, Header, HeaderWrapper, Wrapper } from "./styles";
import { useAuth } from "../../contexts/AuthContext";
import { FiLogOut } from "react-icons/fi";
import { useTheme } from "styled-components";
import { Spacer } from "../Spacer";
import { MdOutlineExplore } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";

export function Layout() {
    const { signOut, user } = useAuth()
    const theme = useTheme()

    async function onLogout() {
        await signOut()
    }

    return (
        <Wrapper>
            <HeaderWrapper>
                <Header>
                    <p>Olá, <span>{user?.email?.split("@")[0]}</span></p>
                    <FiLogOut
                        style={{ cursor: 'pointer' }}
                        onClick={onLogout}
                        size={24}
                        color={theme.primary}
                    />
                </Header>
            </HeaderWrapper>
            <Content>
                <Outlet />
            </Content>
            <FooterWrapper>
                <Footer>
                    <NavLink to="/">
                        <MdMusicNote />
                        <Spacer direction="horizontal" />
                        <span>Repertório</span>
                    </NavLink>
                    <Spacer direction="horizontal" />
                    <NavLink to="/search">
                        <MdOutlineExplore />
                        <Spacer direction="horizontal" />
                        <span>Explorar</span>
                    </NavLink>
                </Footer>
            </FooterWrapper>
        </Wrapper>
    )
}