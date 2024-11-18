import styled from "styled-components";
import loginBg from '../../assets/login_background.png'
import { devices } from "../../helpers/devices";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: end;
    width: 100%;
    background-image: url(${loginBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (${devices.tablet}) {
        align-items: center;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    background-color: ${props => props.theme.card};
    padding: 24px;
    width: 100%;
    max-width: 500px;
    border: 1px solid ${props => props.theme.gray};

    @media (${devices.tablet}) {
        border-radius: 12px;
        height: 400px;
    }

    form {
        width: 100%;

        span {
            font-size: 12px;
            color: ${props => props.theme.error};
        }
    }
`

export const Title = styled.h1`
`

export const Subtitle = styled.h2`
    color: ${props => props.theme.textSecondary};
    font-size: 0.875rem;
`

export const Footer = styled.div`
    font-size: 0.8rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
`

export const RegisterText = styled.p`
    margin-right: 4px;
`

export const RegisterLink = styled(Link)`
    color: ${props => props.theme.primary};
    text-align: center;

    &:hover {
        cursor: pointer;
    }
`