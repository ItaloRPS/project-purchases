
import styled,{css} from 'styled-components'
;
export const Wapper = styled.div`
  ${({ theme }) => css`
    a,div{
    width: 100%; /* largura desejada para a div */
    height: 30%; /* altura desejada para a div */
    }
  `}
`;

