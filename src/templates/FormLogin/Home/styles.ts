import styled, { css, DefaultTheme } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
  width: 90vw;
    margin: auto;
    height: 100%;
    padding-top: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
  `}
`;
export const Products = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    gap: 5px;
   overflow: hidden;
  `}
`;
export const Posts = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    gap: 5px;
    div{
      height: 155px;
    }
  `}
`;

export const Emphasis = styled.div`
  ${({ theme }) => css`
  width: 80vw;
    margin: auto;
   
    `}
`;
export const PostFooter = styled.div`
  ${({ theme }) => css`
  width: 80vw;
   
    `}
`;