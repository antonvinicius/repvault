import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 12px;
    background-color: ${props => props.theme.card};
    border-radius: 12px;
    cursor: pointer;
    align-items: center;

    img {
        width: 80px;
        height: 80px;
        border-radius: 12px;
    }
`