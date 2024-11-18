import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 16px;
    align-items: center;
    color: ${props => props.theme.primary};
    margin-bottom: 24px;
    h1 {
        flex: 1;
        font-size: 20px;
        text-align: center;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    background-color: ${props => props.theme.card};
`