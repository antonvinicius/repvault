import styled from "styled-components";
import { devices } from "../../helpers/devices";

export const Container = styled.div`
    max-width: 800px;
    align-items: center;
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 22px;
    height: 100dvh;
    justify-content: center;

    h1 {
        align-self: flex-start;
        font-size: 22px;
    }

    h2 {
        align-self: flex-start;
        color: ${props => props.theme.textSecondary};
    } 

    img {
        width: 100%;
        max-width: 200px;
    }

    > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const ButtonGroup = styled.div`
    display: flex;
    width: 100%;
    margin-top: 88px;

    @media(${devices.tablet}) {
        flex-direction: column;
        width: 400px;
    }
`