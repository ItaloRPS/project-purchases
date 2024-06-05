import styled, { css, DefaultTheme } from 'styled-components';


export const ContentItem = styled.div`
  ${({ theme }) => css`
    flex-grow: 1;
    overflow: auto;
    gap: 3px;
}
  `}
`;

export const HeaderItem = styled.div`
  ${({ theme }) => css`
  font-size: 1.8rem;
    font-weight: 500;
    padding: 4px 0 11px;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 80px;
  `}
`;

export const FooterItem = styled.div`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: 500;
    padding: 5px 0 10px;
    border-top: 1px solid #ddd;
  `}
`;

export const Actions = styled.div`
  ${({ theme }) => css`
  display: flex;
    flex-direction: column;
    gap: 5px;
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 15px;
  `}
`;

export const notItem = styled.span`
  ${({ theme }) => css`
    font-size: 12px;
    color: #c3c3c3;
  `}
`;




