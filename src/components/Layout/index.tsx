import { NavLink, Outlet } from "react-router-dom";
import { Content, Footer, FooterWrapper, Header, HeaderProfile, HeaderWrapper, ImageChange, ImageWrapper, ProfileName, ProfilePicture, Wrapper } from "./styles";
import { useAuth } from "../../contexts/AuthContext";
import { FiLogOut } from "react-icons/fi";
import { useTheme } from "styled-components";
import { Spacer } from "../Spacer";
import { MdOutlineExplore } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";
import { IoIosImages } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import imageCompression from "browser-image-compression";

export function Layout() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { signOut, user, uploadProfilePicture, userPicture } = useAuth()
    const theme = useTheme()
    const username = user?.email?.split("@")[0]
    const [profilePicSrc, setProfilePicSrc] = useState(userPicture ?? `https://ui-avatars.com/api/?name=${username}`)

    async function onLogout() {
        await signOut()
    }

    function onChangeProfilePicture() {
        if (!fileInputRef.current) return;
        fileInputRef.current.click();
    }

    async function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];

        if (!file) {
            toast.error("Nenhuma imagem selecionada!", {
                theme: 'dark'
            })
            return;
        }

        const options = {
            maxSizeMB: 0.4,
            maxWidthOrHeight: 1024,
            useWebWorker: true,
        };

        const compressedFile = await imageCompression(file, options);
        await uploadProfilePicture(compressedFile)

        toast.success("Foto de perfil atualizada com sucesso!", {
            theme: 'dark'
        })
    }

    useEffect(() => {
        if (userPicture) {
            setProfilePicSrc(userPicture)
        }
    }, [userPicture])

    return (
        <Wrapper>
            <HeaderWrapper>
                <Header>
                    <HeaderProfile>
                        <ImageWrapper>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                onChange={onFileChange}
                                accept="image/*"
                            />
                            <ImageChange onClick={onChangeProfilePicture}>
                                <IoIosImages color={theme.primary} />
                            </ImageChange>
                            <ProfilePicture
                                effect="opacity"
                                width={80}
                                height={80}
                                src={profilePicSrc}
                                onError={() => {
                                    setProfilePicSrc(`https://ui-avatars.com/api/?name=${username}`)
                                }}
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