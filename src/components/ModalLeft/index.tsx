import './styles.scss'

export type ModalProps ={
    open:boolean
    children:React.ReactNode
  }

export const ModalLeft:React.FC<ModalProps> = ({open, children}) =>{
    return <div className={`wrapper-modal ${!open&&'show-modal'}`}>{children}</div>
}