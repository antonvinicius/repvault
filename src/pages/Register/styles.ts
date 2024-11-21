import styled from "styled-components";
import { devices } from "../../helpers/devices";
import loginBg from '../../assets/login_background.png'

export const Wrapper = styled.div`
    display: flex;
    height: 100dvh;
    justify-content: center;
    align-items: center;

    @media(${devices.tablet}) {
        background-image: url(${loginBg});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`

export const Container = styled.form`
    background-color: ${props => props.theme.card};
    padding: 24px;
    border-radius: 12px;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    span {
        font-size: 12px;
        color: ${props => props.theme.error};
    }

    @media(${devices.tablet}) {
        height: 400px;
        border: 1px solid ${props => props.theme.gray};
    }
`

export const Footer = styled.div`
    text-align: center;
    font-size: 14px;
    a {
        color: ${props => props.theme.primary};
    }
`