import styled from "styled-components";

export const Container = styled.input`
    background-color: ${props => props.theme.card}; 
    border: 2px solid ${props => props.theme.gray}; 
    border-radius: 8px;          
    outline: none;       
    transition: border-color 0.3s ease;
    padding: 8px 12px;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        border-color: ${props => props.theme.primary};
    }
`