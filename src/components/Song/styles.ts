import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 12px;
    background-color: ${props => props.theme.card};
    border-radius: 12px;
    cursor: pointer;
    align-items: center;
`
export const StyledImage = styled.img<{ loaded: boolean }>`
    opacity: ${(props) => (props.loaded ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
    width: 100%;
    height: auto;
    display: block;
`;

export const Placeholder = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.gray};
    z-index: 1;
`;

export const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 80px;
    height: 80px;
    border-radius: 12px;
`;