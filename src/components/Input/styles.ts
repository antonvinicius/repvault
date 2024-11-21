import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.card};
  border: 2px solid ${(props) => props.theme.gray};
  border-radius: 8px;
  padding: 4px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus-within {
    border-color: ${(props) => props.theme.primary};
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  padding: 8px 12px;
  color: ${(props) => props.theme.text};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  cursor: pointer;
  color: ${(props) => props.theme.text};
`;