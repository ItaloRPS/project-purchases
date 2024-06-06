import styled, { css, DefaultTheme } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
  width: 100%;
   position: sticky;;
   top: 0;
   right:0;
   z-index: 1;
  `}
`;




