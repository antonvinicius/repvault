import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.card};
  border: 2px solid ${(props) => props.theme.gray};
  border-radius: 8px;
  padding: 12px 8px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus-within {
    border-color: ${(props) => props.theme.primary};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: ${(props) => props.theme.text};
`;

export const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;
  color: ${(props) => props.theme.text};
`;