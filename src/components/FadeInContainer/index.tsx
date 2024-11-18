import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInContainer = styled.div`
  animation: ${fadeIn} 0.2s ease-in-out;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FadeInComponent = ({ children }: any) => {
    return <FadeInContainer>{children}</FadeInContainer>;
};