import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: start;
`

export const Container = styled.form`
    background-color: ${props => props.theme.card};
    padding: 24px;
    border-radius: 12px;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    span {
        font-size: 12px;
        color: ${props => props.theme.error};
    }
`

export const Footer = styled.div`
    text-align: center;
    a {
        color: ${props => props.theme.primary};
    }
`