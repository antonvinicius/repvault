import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    padding: 24px;
    background-color: ${props => props.theme.card};
    align-items: center;
    justify-content: space-between;
    max-width: 800px;
    margin: auto;
`

export const HeaderProfile = styled.div`
    align-items: center;
    display: flex;
`

export const ImageChange = styled.div`
    visibility: hidden;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 999;

    
`

export const ProfilePicture = styled(LazyLoadImage)`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 400px;
`

export const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover ${ImageChange} {
        visibility: visible;
    }
`

export const ProfileName = styled.div`
    display: flex;
    margin-left: 24px;
    flex-direction: column;
`

export const HeaderWrapper = styled.div`
    background-color: ${props => props.theme.card};
    width: 100%;
`

export const Content = styled.div`
    flex: 1;
    width: 100%;
    max-width: 800px;
    margin: auto;
`

export const Footer = styled.div`
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.card};
    
    a {
        padding: 16px;
        flex: 1;
        text-align: center;
        font-weight: bold;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &.active {
            background-color: ${props => props.theme.primary};
            color: ${props => props.theme.background};
        }

        &:not(.active):hover {
            color: ${props => props.theme.primary};
        }
    }
`

export const FooterWrapper = styled.div`
    width: 100%;
    padding: 16px;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.card};
`