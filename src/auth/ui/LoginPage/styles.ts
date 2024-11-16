import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    max-width: 400px;
    padding: 24px;
    border-radius: 12px;
    background-color: ${props => props.theme.card};
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
`

export const RegisterText = styled.p`

`

export const RegisterLink = styled.a`
    color: ${props => props.theme.primary};
`