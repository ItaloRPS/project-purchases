import * as S from './styles'

export type ModalProps ={
    open:boolean
    children:React.ReactNode
  }

export const ModalLeft:React.FC<ModalProps> = ({open, children}) =>{
    return <S.Wrapper open={open}>{children}</S.Wrapper>
}