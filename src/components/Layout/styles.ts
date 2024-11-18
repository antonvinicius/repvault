import styled from "styled-components";

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
`

export const Content = styled.div`
    flex: 1;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 24px;
    background-color: ${props => props.theme.card};
`