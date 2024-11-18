import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`

export const Label = styled.span<{ selected: boolean }>`
    cursor: pointer;
    padding: 8px;
    font-size: 14px;
    border-radius: 22px;
    margin-right: 8px;
    border: 2px solid ${props => props.selected ? props.theme.primary : props.theme.gray};
    color: ${props => props.selected ? props.theme.primary : props.theme.gray};
`