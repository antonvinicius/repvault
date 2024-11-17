import styled from "styled-components";

export const Spacer = styled.div<{ size?: number; direction?: 'horizontal' | 'vertical' }>`
  width: ${({ direction = 'vertical', size = 8 }) => (direction === 'horizontal' ? size : 0)}px;
  height: ${({ direction = 'vertical', size = 8 }) => (direction === 'vertical' ? size : 0)}px;
`;