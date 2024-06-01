import styled, { css, keyframes } from 'styled-components';
import { LoadingSpinnerProps } from '.';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div<LoadingSpinnerProps>`
 ${({ theme, size,color }) => css`
  display: inline-block;
  width: ${size};
  height: ${size}; 
  border: 4px solid ${color}; 
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 0.8s linear infinite;
`};
`;