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
    align-items: center;
    justify-content: space-between;
`

export const Content = styled.div`
    flex: 1;
`

export const Footer = styled.div`
    display: flex;
    padding: 16px;
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