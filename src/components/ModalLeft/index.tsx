import * as S from './styles'

export type ModalProps ={
    openModal:boolean
    children:React.ReactNode
  }

export const ModalLeft:React.FC<ModalProps> = ({openModal, children}) =>{
    return <S.Wrapper openModal={openModal}>{children}</S.Wrapper>
}