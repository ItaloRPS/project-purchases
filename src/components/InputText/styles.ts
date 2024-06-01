import styled, { css, DefaultTheme } from 'styled-components';

type InputProps = {
    hasError:boolean,
    theme:DefaultTheme
}


export const Container = styled.div`
  ${({ theme:DefaultTheme }) => css`
  display: flex;
  flex-direction: column;
  `}
`;

export const InputContainer = styled.div<InputProps>`
  ${({ theme:DefaultTheme, hasError}) => css`
  display: flex;
    align-items: center;
    border-radius: 25px;
    margin: 5px;
    border: 1px solid ${(hasError ? 'red' : '#ccc')};
    background: #ebebeb;

    &:focus-within{
        outline: none;
        box-shadow: 0px 0px 3px #02599e;
    }
    
  `}
`;
export const Icon = styled.span`
  ${({ theme:DefaultTheme }) => css`
    margin-left: 7px;
    font-size: 16px;
    color: #5c5c5c;
  `}
`;

export const Input = styled.input`
  ${({theme:DefaultTheme}) => css`
    border: none;
    outline: none;
    border-radius: 25px;
    padding: 9px 4px;
    flex-grow: 1;
    background: #ebebeb;
    margin: 0px 5px;
  `}
`;


export const Error = styled.p`
  ${({ theme:DefaultTheme }) => css`
    font-size: 13px;
    color: #c00000;
    margin-left: 10px;
  `}
`;
