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
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 23px;
    background: #fbfdff;
    padding: 90px 15px;
    border-radius: 4px;
    box-shadow: 1px 4px 5px -3px black;
    max-width: 73vw;
    min-width: 22vw;
  `}
`;

export const FormContainer = styled.div`
  ${({ theme, }) => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    font-size: 18px;
  `}
`;

export const Error = styled.p`
  ${({ theme:DefaultTheme }) => css`
    font-size: 13px;
    color: #c00000;
    margin-left: 10px;
  `}
`;

