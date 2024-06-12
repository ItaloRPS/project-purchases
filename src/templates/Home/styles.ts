import styled, { css, DefaultTheme } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    box-sizing: content-box;
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
    gap: 10px;
    div{
      height: 155px;
    }
  `}
`;

export const Emphasis = styled.div`
  ${({ theme }) => css`
  width: 80vw;
    margin: auto;
    padding-top: 10px;
    padding-bottom: 10px;
   
    `}
`;
export const PostCategory = styled.div`
  ${({ theme }) => css`
    padding: 3px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(36rem, 1fr));
    gap: 15px;

  div{
    height: 50vh;
  }
    `}
`;

export const ImgBanner = styled.img`
  ${({ theme }) => css`
     width: 100%;
    height: 100%;
    object-fit: cover; 
    display: block; 
    `}
`;