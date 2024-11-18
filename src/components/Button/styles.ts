import styled from "styled-components";

export const Container = styled.button<{ customColor?: string }>`
    width: 100%;
    padding: 20px;
    background-color: ${props => props.customColor ? props.customColor : props.theme.primary};
    border-radius: 12px;
    box-sizing: border-box;
    text-align: center;
    color: ${props => props.theme.background};
    cursor: pointer;
    transition: filter 0.3s;
    font-weight: 700;

    &:hover {
        filter: brightness(0.8);
    }
`