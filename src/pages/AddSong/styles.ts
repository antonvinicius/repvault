import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 22px;
    height: 100vh;
    justify-content: space-between;

    h1 {
        font-size: 22px;
    }

    h2 {
        color: ${props => props.theme.textSecondary};
    }
`