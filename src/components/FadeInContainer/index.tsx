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
`;

export const FadeInComponent = ({ children }: any) => {
    return <FadeInContainer>{children}</FadeInContainer>;
};