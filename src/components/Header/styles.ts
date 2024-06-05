import styled, { css, DefaultTheme } from 'styled-components';

export const Wrapper = styled.form`
  ${({ theme }) => css`
  width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;




