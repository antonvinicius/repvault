import { NavLink, Outlet } from "react-router-dom";
import { Content, Footer, FooterWrapper, Header, HeaderProfile, HeaderWrapper, ImageChange, ImageWrapper, ProfileName, ProfilePicture, Wrapper } from "./styles";
import { useAuth } from "../../contexts/AuthContext";
import { FiLogOut } from "react-icons/fi";
import { useTheme } from "styled-components";
import { Spacer } from "../Spacer";
import { MdOutlineExplore } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";
import { IoIosImages } from "react-icons/io";

export function Layout() {
    const { signOut, user } = useAuth()
    const theme = useTheme()
    const username = user?.email?.split("@")[0]

    async function onLogout() {
        await signOut()
    }

    return (
        <Wrapper>
            <HeaderWrapper>
                <Header>
                    <HeaderProfile>
                        <ImageWrapper>
                            <ImageChange>
                                <IoIosImages color={theme.primary} />
                            </ImageChange>
                            <ProfilePicture
                                src={`https://ui-avatars.com/api/?name=${username}`}
                            />
                        </ImageWrapper>
                        <ProfileName>
                            <p>Olá,</p>
                            <p>{username}</p>
                        </ProfileName>
                    </HeaderProfile>
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