import styled, { css, DefaultTheme } from 'styled-components';

export const Description = styled.span`
  ${({ theme }) => css`
    font-size: 11px;
  `}
`;

export const Size = styled.span`
  ${({ theme }) => css`
    font-size: 13px;
    font-weight: 600;
    padding-right:3px;
  `}
`;

export const Prince = styled.span`
  ${({ theme }) => css`
  font-size: 15px;
    font-weight: 600;
  `}
`;





