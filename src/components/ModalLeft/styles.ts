import styled, { css, DefaultTheme } from 'styled-components';
import { ModalProps } from '.';

  
const isOpen = (open:boolean)=>{
    return !open&&css`transform: translate(110%, 0);`
}

export const Wrapper = styled.section<ModalProps>`
  ${({ theme, openModal }) => css`
    width: 100%;
    max-width: 330px;
    background-color: white;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    padding: 10px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 400ms ease;
    z-index: 1;

    ${isOpen(openModal)}
  `}
`;