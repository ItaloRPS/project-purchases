import styled, { css, DefaultTheme } from 'styled-components';

type ListProps = {
    position:number
}

export const List = styled.div<ListProps>`
  ${({ theme:DefaultTheme ,position}) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    gap:5px;
    width: 100%;
    position: relative;
    transition: transform 350ms ease 0s; 
    transform: translate3d(-${position}px, 0px, 0px);
    div{
    width: 155px;
}

  `}
`;

export const Container = styled.div`
  ${({ theme:DefaultTheme }) => css`
    display: flex;
    align-items: center;
    overflow: hidden;
  `}
`;
